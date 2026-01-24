import pandas as pd
import os
from dotenv import load_dotenv
from qdrant_client import QdrantClient
from qdrant_client.models import Distance, VectorParams, PointStruct

# 1. Setup Connection
load_dotenv()
client = QdrantClient(
    url=os.getenv("QDRANT_URL"), 
    api_key=os.getenv("QDRANT_API_KEY")
)

# 2. Create the "Collection" (The storage bucket)
COLLECTION_NAME = "bank_history"

# This wipes any old data and starts fresh
client.recreate_collection(
    collection_name=COLLECTION_NAME,
    vectors_config=VectorParams(size=11, distance=Distance.COSINE),
)

# 3. Load your final data
df = pd.read_csv("data/loan_data_final.csv")

# 4. Convert Rows to "Points"
points = []
# The exact columns we scaled earlier
feature_cols = [
    'Gender', 'Married', 'Dependents', 'Education', 'Self_Employed', 
    'ApplicantIncome', 'CoapplicantIncome', 'LoanAmount', 
    'Loan_Amount_Term', 'Credit_History', 'Property_Area'
]

for idx, row in df.iterrows():
    # The math part (Vector)
    vector = row[feature_cols].tolist()
    
    # The human part (Payload) - very important for the Banker!
    payload = {
        "Loan_ID": row["Loan_ID"],
        "Status": "Approved" if row["Loan_Status"] == 1 else "Rejected",
        "Original_Income": row["ApplicantIncome"], # For display later
        "Credit_History": row["Credit_History"]
    }
    
    points.append(PointStruct(id=idx, vector=vector, payload=payload))

# 5. Push to Cloud
client.upsert(collection_name=COLLECTION_NAME, points=points)

print(f"🚀 Success! {len(points)} historical cases are now in your Qdrant Cloud brain.")