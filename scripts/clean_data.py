import pandas as pd

df = pd.read_csv("../data/loan_data.csv")

print("Empty cells before cleaning:")
print(df.isnull().sum())

cat_cols = ['Gender', 'Married', 'Dependents', 'Self_Employed', 'Credit_History']

for col in cat_cols:
    df[col] = df[col].fillna(df[col].mode()[0])

num_cols = ['LoanAmount', 'Loan_Amount_Term']

for col in num_cols:
    df[col] = df[col].fillna(df[col].median())

print("\nEmpty cells after cleaning:")
print(df.isnull().sum())
df.to_csv("../data/loan_data_cleaned.csv", index=False)