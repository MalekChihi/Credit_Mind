## 🚀 Getting Started

1. Create a virtual environment: `python -m venv .venv`
2. Activate it: `.venv\Scripts\activate`
3. Install dependencies: `pip install -r requirements.txt`
4. Create a `.env` file with Qdrant credentials.
5. Run the server: `uvicorn main:app --reload`

## 📡 API Endpoints

- **POST `/apply`**: Send applicant features to get a decision.
- **GET `/docs`**: Interactive Swagger documentation.

## 🔢 Feature Mapping (Indices 0-10)

0: Gender | 1: Married | 2: Dependents | 3: Education | 4: Self_Employed | 5: ApplicantIncome | 6: CoapplicantIncome | 7: LoanAmount | 8: Term | 9: Credit_History | 10: Property_Area
