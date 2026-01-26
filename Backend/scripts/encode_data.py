import pandas as pd
from sklearn.preprocessing import LabelEncoder , MinMaxScaler

df = pd.read_csv("../data/loan_data_cleaned.csv")

df['Married'] = df['Married'].map({'Yes': 1, 'No': 0})
df['Gender'] = df['Gender'].map({'Male': 1, 'Female': 0})
df['Self_Employed'] = df['Self_Employed'].map({'Yes': 1, 'No': 0})
df['Loan_Status'] = df['Loan_Status'].map({'Y': 1, 'N': 0})
le = LabelEncoder()

cols_to_encode = ['Education', 'Property_Area', 'Dependents']

for col in cols_to_encode:
    df[col] = le.fit_transform(df[col].astype(str))

feature_cols = [
    'Gender', 'Married', 'Dependents', 'Education', 'Self_Employed', 
    'ApplicantIncome', 'CoapplicantIncome', 'LoanAmount', 
    'Loan_Amount_Term', 'Credit_History', 'Property_Area'
]
scaler = MinMaxScaler()

df[feature_cols] = scaler.fit_transform(df[feature_cols])

df.to_csv("../data/loan_data_final.csv", index=False)

print("Sprint 1 Complete: Data is encoded and scaled.")
print("Sample of scaled vectors:")
print(df[feature_cols].head())