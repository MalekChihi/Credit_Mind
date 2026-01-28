import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/result.css";

export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state || {};
  
  const [showDetails, setShowDetails] = useState(false);
  const [animateMetrics, setAnimateMetrics] = useState(false);
  
  useEffect(() => {
    setTimeout(() => setAnimateMetrics(true), 300);
  }, []);
  
  // Mock decision data
  const decision = {
    status: "approved",
    confidence: 82,
    recommendation: "Approve with standard terms",
    riskLevel: "low",
    loanAmount: formData?.loanAmount || "50,000",
    estimatedRate: "6.5%",
    monthlyPayment: "875"
  };
  
  const similarCases = [
    {
      id: "LOAN_1456",
      applicant: "Similar Applicant A",
      similarity: 92,
      outcome: "approved",
      amount: "$48,000",
      performance: "Excellent - Paid in full",
      creditScore: 725,
      income: "$76,000"
    },
    {
      id: "LOAN_2301",
      applicant: "Similar Applicant B",
      similarity: 87,
      outcome: "approved",
      amount: "$52,000",
      performance: "Good - On track",
      creditScore: 710,
      income: "$72,000"
    },
    {
      id: "LOAN_1889",
      applicant: "Similar Applicant C",
      similarity: 84,
      outcome: "approved",
      amount: "$45,000",
      performance: "Excellent - Early payoff",
      creditScore: 735,
      income: "$78,000"
    }
  ];
  
  const riskFactors = [
    { factor: "Income Stability", score: 95, status: "positive" },
    { factor: "Credit History", score: 88, status: "positive" },
    { factor: "Debt-to-Income Ratio", score: 76, status: "neutral" },
    { factor: "Employment Duration", score: 92, status: "positive" },
    { factor: "Collateral Value", score: 85, status: "positive" }
  ];
  
  const anomalyCheck = {
    status: "clear",
    checks: [
      { name: "Document Verification", passed: true, confidence: 98 },
      { name: "Income Consistency", passed: true, confidence: 94 },
      { name: "Identity Verification", passed: true, confidence: 99 },
      { name: "Fraud Pattern Detection", passed: true, confidence: 97 }
    ]
  };
  
  const explainability = {
    topFactors: [
      "Strong income stability with 5+ years employment",
      "Credit score above approval threshold (720+)",
      "Low debt-to-income ratio compared to similar approved cases",
      "Consistent payment history in similar historical cases"
    ],
    comparisonInsights: [
      "Your application profile matches 92% with historically successful loans",
      "Income level is 8% above the average for approved loans of this size",
      "Credit score is in the top 25% of approved applicants"
    ]
  };
  
  return (
    <div className="result-container">
      <header className="result-header">
        <button className="back-btn" onClick={() => navigate("/apply")}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          New Application
        </button>
        <div className="header-actions">
          <button className="btn btn-secondary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Export Report
          </button>
          <button className="btn btn-secondary" onClick={() => navigate("/admin")}>
            Dashboard
          </button>
        </div>
      </header>
      
      <div className="result-content">
        {/* Decision Summary */}
        <section className="decision-card">
          <div className="decision-header">
            <div className={`decision-status status-${decision.status}`}>
              <div className="status-icon">
                {decision.status === "approved" ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="15" y1="9" x2="9" y2="15"/>
                    <line x1="9" y1="9" x2="15" y2="15"/>
                  </svg>
                )}
              </div>
              <div className="status-text">
                <h1>Application {decision.status === "approved" ? "Approved" : "Declined"}</h1>
                <p>Decision rendered based on similarity-driven analysis</p>
              </div>
            </div>
            
            <div className="confidence-display">
              <div className="confidence-circle" style={{"--progress": decision.confidence}}>
                <svg viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="54" className="confidence-bg"/>
                  <circle cx="60" cy="60" r="54" className="confidence-progress"/>
                </svg>
                <div className="confidence-value">{decision.confidence}%</div>
              </div>
              <div className="confidence-label">Confidence Score</div>
            </div>
          </div>
          
          <div className="decision-details">
            <div className="detail-grid">
              <div className="detail-item">
                <div className="detail-label">Recommendation</div>
                <div className="detail-value">{decision.recommendation}</div>
              </div>
              <div className="detail-item">
                <div className="detail-label">Risk Level</div>
                <div className="detail-value">
                  <span className={`risk-badge risk-${decision.riskLevel}`}>
                    {decision.riskLevel.toUpperCase()}
                  </span>
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-label">Loan Amount</div>
                <div className="detail-value">${parseInt(decision.loanAmount).toLocaleString()}</div>
              </div>
              <div className="detail-item">
                <div className="detail-label">Estimated Rate</div>
                <div className="detail-value">{decision.estimatedRate}</div>
              </div>
              <div className="detail-item">
                <div className="detail-label">Monthly Payment</div>
                <div className="detail-value">${decision.monthlyPayment}</div>
              </div>
            </div>
          </div>
        </section>
        
        <div className="result-grid">
          {/* Similar Cases */}
          <section className="card">
            <h2 className="section-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"/>
              </svg>
              Similar Historical Cases
            </h2>
            <p className="section-description">
              Top matching cases from decision memory with verified outcomes
            </p>
            
            <div className="similar-cases-list">
              {similarCases.map((case_, index) => (
                <div key={case_.id} className="case-item" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="case-header">
                    <div className="case-info">
                      <div className="case-id">{case_.id}</div>
                      <div className="case-similarity">
                        {case_.similarity}% Match
                        <div className="similarity-bar">
                          <div 
                            className="similarity-fill" 
                            style={{width: `${case_.similarity}%`}}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <span className={`badge badge-${case_.outcome}`}>
                      {case_.outcome}
                    </span>
                  </div>
                  
                  <div className="case-details">
                    <div className="case-metric">
                      <span className="metric-label">Amount:</span>
                      <span className="metric-value">{case_.amount}</span>
                    </div>
                    <div className="case-metric">
                      <span className="metric-label">Credit Score:</span>
                      <span className="metric-value">{case_.creditScore}</span>
                    </div>
                    <div className="case-metric">
                      <span className="metric-label">Income:</span>
                      <span className="metric-value">{case_.income}</span>
                    </div>
                  </div>
                  
                  <div className="case-performance">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                    </svg>
                    <span>{case_.performance}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Risk Assessment */}
          <section className="card">
            <h2 className="section-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              Risk Factor Analysis
            </h2>
            <p className="section-description">
              Detailed breakdown of risk assessment factors
            </p>
            
            <div className="risk-factors-list">
              {riskFactors.map((factor, index) => (
                <div 
                  key={factor.factor} 
                  className="risk-factor-item"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="factor-header">
                    <span className="factor-name">{factor.factor}</span>
                    <span className="factor-score">{factor.score}/100</span>
                  </div>
                  <div className="factor-bar">
                    <div 
                      className={`factor-fill status-${factor.status}`}
                      style={{width: animateMetrics ? `${factor.score}%` : '0%'}}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
        
        {/* Anomaly Detection */}
        <section className="card">
          <h2 className="section-title">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
              <line x1="12" y1="9" x2="12" y2="13"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
            Anomaly Detection Results
          </h2>
          
          <div className="anomaly-status">
            <div className={`anomaly-badge status-${anomalyCheck.status}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              No Anomalies Detected
            </div>
          </div>
          
          <div className="anomaly-checks">
            {anomalyCheck.checks.map((check, index) => (
              <div key={check.name} className="check-item" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="check-icon">
                  {check.passed ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18"/>
                      <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                  )}
                </div>
                <div className="check-content">
                  <div className="check-name">{check.name}</div>
                  <div className="check-confidence">{check.confidence}% confidence</div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Explainability */}
        <section className="card explainability-section">
          <h2 className="section-title">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
            Decision Explainability
          </h2>
          <p className="section-description">
            Audit-ready explanation of decision factors and evidence trail
          </p>
          
          <button 
            className="expand-btn"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? "Hide Details" : "Show Detailed Explanation"}
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              style={{transform: showDetails ? 'rotate(180deg)' : 'rotate(0)'}}
            >
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          
          {showDetails && (
            <div className="explainability-details">
              <div className="explain-section">
                <h3>Key Contributing Factors</h3>
                <ul className="factor-list">
                  {explainability.topFactors.map((factor, index) => (
                    <li key={index}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9 11 12 14 22 4"/>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                      </svg>
                      {factor}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="explain-section">
                <h3>Comparative Insights</h3>
                <ul className="insight-list">
                  {explainability.comparisonInsights.map((insight, index) => (
                    <li key={index}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                      </svg>
                      {insight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}