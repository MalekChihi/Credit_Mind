from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from scripts.apply_logic import process_application

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # specify the React URL
    allow_methods=["*"],
    allow_headers=["*"],
)

class ApplicantData(BaseModel):
    features: list

@app.post("/apply")
async def apply_for_loan(data: ApplicantData):
    # calls Qdrant 
    result = process_application(data.features)
    return result

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)