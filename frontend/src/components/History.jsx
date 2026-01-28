import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/cases.css";

export default function History() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  
  const cases = [
    {
      id: "LOAN_2401",
      date: "2024-01-28",
      applicant: "John Smith",
      amount: "$52,000",
      decision: "approved",
      confidence: 94,
      outcome: "performing",
      creditScore: 735,
      riskLevel: "low"
    },
    {
      id: "LOAN_2400",
      date: "2024-01-27",
      applicant: "Maria Garcia",
      amount: "$38,500",
      decision: "approved",
      confidence: 88,
      outcome: "paid-off",
      creditScore: 710,
      riskLevel: "low"
    },
    {
      id: "LOAN_2399",
      date: "2024-01-27",
      applicant: "David Lee",
      amount: "$67,000",
      decision: "declined",
      confidence: 91,
      outcome: "n/a",
      creditScore: 625,
      riskLevel: "high"
    },
    {
      id: "LOAN_2398",
      date: "2024-01-26",
      applicant: "Sarah Johnson",
      amount: "$45,000",
      decision: "approved",
      confidence: 86,
      outcome: "performing",
      creditScore: 695,
      riskLevel: "medium"
    },
    {
      id: "LOAN_2397",
      date: "2024-01-26",
      applicant: "Michael Chen",
      amount: "$55,000",
      decision: "approved",
      confidence: 92,
      outcome: "performing",
      creditScore: 740,
      riskLevel: "low"
    },
    {
      id: "LOAN_2396",
      date: "2024-01-25",
      applicant: "Emily Rodriguez",
      amount: "$41,000",
      decision: "declined",
      confidence: 89,
      outcome: "n/a",
      creditScore: 640,
      riskLevel: "high"
    },
    {
      id: "LOAN_2395",
      date: "2024-01-25",
      applicant: "James Wilson",
      amount: "$72,000",
      decision: "approved",
      confidence: 79,
      outcome: "late-payment",
      creditScore: 680,
      riskLevel: "medium"
    },
    {
      id: "LOAN_2394",
      date: "2024-01-24",
      applicant: "Lisa Anderson",
      amount: "$35,000",
      decision: "approved",
      confidence: 95,
      outcome: "paid-off",
      creditScore: 755,
      riskLevel: "low"
    }
  ];
  
  const filteredCases = cases.filter(c => {
    const matchesSearch = c.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         c.applicant.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || c.decision === filterStatus;
    return matchesSearch && matchesFilter;
  });
  
  return (
    <div className="cases-container">
      <header className="cases-header">
        <div className="header-content">
          <div>
            <h1>Historical Cases</h1>
          </div>
          <button className="btn btn-secondary" onClick={() => navigate("/admin")}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Dashboard
          </button>
        </div>
      </header>
      
      <div className="cases-content">
        {/* Filters and Search */}
        <section className="filters-section">
          <div className="search-box">
            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Search by ID or applicant name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="filter-controls">
            <select 
              className="filter-select"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Decisions</option>
              <option value="approved">Approved</option>
              <option value="declined">Declined</option>
            </select>
            
            <select 
              className="filter-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="date">Sort by Date</option>
              <option value="amount">Sort by Amount</option>
              <option value="confidence">Sort by Confidence</option>
            </select>
          </div>
        </section>
        
        {/* Statistics */}
        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="8.5" cy="7" r="4"/>
                <polyline points="17 11 19 13 23 9"/>
              </svg>
            </div>
            <div className="stat-content">
              <div className="stat-label">Total Cases</div>
              <div className="stat-value">1,045</div>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon success">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              </svg>
            </div>
            <div className="stat-content">
              <div className="stat-label">Avg Confidence</div>
              <div className="stat-value">89%</div>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon warning">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div className="stat-content">
              <div className="stat-label">Default Rate</div>
              <div className="stat-value">3.2%</div>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon info">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
            </div>
            <div className="stat-content">
              <div className="stat-label">Accuracy Rate</div>
              <div className="stat-value">87%</div>
            </div>
          </div>
        </section>
        
        {/* Cases Table */}
        <section className="card">
          <div className="table-header">
            <h2>Case History</h2>
            <div className="results-count">
              Showing {filteredCases.length} of {cases.length} cases
            </div>
          </div>
          
          <div className="table-container">
            <table className="cases-table">
              <thead>
                <tr>
                  <th>Case ID</th>
                  <th>Date</th>
                  <th>Applicant</th>
                  <th>Amount</th>
                  <th>Decision</th>
                  <th>Confidence</th>
                  <th>Outcome</th>
                  <th>Risk</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCases.map((case_, index) => (
                  <tr key={case_.id} style={{animationDelay: `${index * 0.05}s`}}>
                    <td className="case-id-cell">
                      <span className="case-id">{case_.id}</span>
                    </td>
                    <td>{case_.date}</td>
                    <td className="applicant-cell">{case_.applicant}</td>
                    <td className="amount-cell">{case_.amount}</td>
                    <td>
                      <span className={`badge badge-${case_.decision}`}>
                        {case_.decision}
                      </span>
                    </td>
                    <td>
                      <div className="confidence-cell">
                        <span className="confidence-value">{case_.confidence}%</span>
                        <div className="mini-bar">
                          <div 
                            className="mini-bar-fill" 
                            style={{width: `${case_.confidence}%`}}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className={`outcome-badge outcome-${case_.outcome}`}>
                        {case_.outcome}
                      </span>
                    </td>
                    <td>
                      <span className={`risk-badge risk-${case_.riskLevel}`}>
                        {case_.riskLevel}
                      </span>
                    </td>
                    <td>
                      <button className="action-btn" title="View Details">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                          <circle cx="12" cy="12" r="3"/>
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}