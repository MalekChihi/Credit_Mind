# 💎 CreditMind
> **Kernel Panic Team | Qdrant Hackathon 2026**
> Moving beyond black-box credit scoring. CreditMind transforms static loan applications into searchable, explainable historical intelligence.

---

## 📖 Project Overview
CreditMind addresses **"Contextual Amnesia"** in financial systems. While traditional models provide a numerical score, they lack evidence. Our engine uses **High-Dimensional Vector Search** to retrieve "Historical Twins"—past loan applications with similar financial DNA—to provide audit-ready justifications for every decision.



## 🛠️ The Tech Stack
* **Frontend:** React.js (Stateful Dashboards & Dynamic Controllers)
* **Backend:** FastAPI (Python 3.10+)
* **Vector Database:** Qdrant (HNSW Indexing & Cosine Similarity)
* **Data Science:** Scikit-Learn (Normalization & Encoding)

---

## 📂 Repository Structure
```bash
CreditMind/
├── Backend/             # The Inference Engine
│   ├── main.py          # FastAPI Gateway
│   ├── requirements.txt # Dependencies
│   └── .gitignore       # Python-specific excludes
├── Frontend/            # The Intelligence Dashboard
│   ├── src/             # React Logic & Components
│   ├── React-README.md  # Detailed UI documentation by Sarra
│   └── .gitignore       # Node-specific excludes
├── architecture.png     # Full-stack System Diagram
└── README.md            # You are here