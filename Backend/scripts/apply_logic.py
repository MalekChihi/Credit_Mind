import os
import numpy as np
from dotenv import load_dotenv
from qdrant_client import QdrantClient

# 1. SETUP & CONNECTION
load_dotenv()
client = QdrantClient(
    url=os.getenv("QDRANT_URL"), 
    api_key=os.getenv("QDRANT_API_KEY")
)
COLLECTION_NAME = "bank_history"

def process_application(applicant_vector):
    """
    Analyzes a new loan application by comparing it to historical 'twins' in Qdrant.
    """
    # 2. QUERY QDRANT 
    results = client.query_points(
        collection_name=COLLECTION_NAME,
        query=applicant_vector,
        limit=5,
        with_payload=True
    ).points

    # 3. ANALYSIS VARIABLES
    approved_count = 0
    total_similarity = 0
    anomalies = []
    
    income_val = applicant_vector[5]
    credit_val = applicant_vector[9]

    # 4. LOOP THROUGH HISTORICAL TWINS
    clean_twins = [] # We create a clean list for the Frontend
    for hit in results:
        total_similarity += hit.score
        if hit.payload['Status'] == 'Approved':
            approved_count += 1
        
        if hit.score < 0.85:
            anomalies.append(f"Low match (ID: {hit.payload['Loan_ID']})")
            
        # Format the twin data for React to display easily
        clean_twins.append({
            "loan_id": hit.payload.get('Loan_ID', 'N/A'),
            "status": hit.payload.get('Status', 'N/A'),
            "similarity": f"{hit.score:.2%}"
        })

    # 5. CALCULATE FINAL METRICS
    approval_rate = (approved_count / len(results)) * 100
    avg_confidence = (total_similarity / len(results)) * 100
    
    if approval_rate >= 60:
        recommendation = "✅ RECOMMENDED"
    elif approval_rate >= 40:
        recommendation = "⚠️ MANUAL REVIEW REQUIRED"
    else:
        recommendation = "❌ NOT RECOMMENDED"

    # 6. STRATEGIC CONTEXT
    special_note = "Standard Case"
    if credit_val == 0 and income_val > 0.6:
        special_note = "💎 STRATEGIC OPPORTUNITY: High-income outlier with no credit history."
    elif credit_val == 0:
        special_note = "🚩 RISK WARNING: Zero credit history detected."

    # 7. RETURN THE BUNDLE
    return {
        "decision": recommendation,
        "confidence": f"{avg_confidence:.2f}%",
        "history_summary": f"{approved_count}/{len(results)} twins were Approved",
        "note": special_note,
        "anomalies": anomalies if anomalies else "None",
        "twins": clean_twins # React will use this to build a table
    }

if __name__ == "__main__":
    test_applicant = [1, 0, 0, 0, 0, 0.07, 0.0, 0.1, 0.7, 1, 1] 
    report = process_application(test_applicant)
    
    print("\n" + "="*45)
    print("       CREDITMIND DECISION REPORT       ")
    print("="*45)
    print(f"FINAL DECISION: {report['decision']}")
    print(f"CONFIDENCE:     {report['confidence']}")
    print(f"HISTORY:        {report['history_summary']}")
    print("="*45)
    
    for i, t in enumerate(report['twins']):
        print(f"{i+1} | {t['loan_id']} | {t['status']} | {t['similarity']}")