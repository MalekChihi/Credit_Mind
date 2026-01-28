import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/anomaly.css";

export default function AnomalyDetection() {
  const navigate = useNavigate();
  const [selectedAnomaly, setSelectedAnomaly] = useState(null);
  
  const anomalies = [
    {
      id: "ANM_2401",
      caseId: "LOAN_2403",
      date: "2024-01-28",
      applicant: "K. Williams",
      severity: "high",
      type: "document-inconsistency",
      description: "Income stated in application ($85,000) does not match bank statements ($62,000)",
      confidence: 94,
      flags: [
        "Income verification mismatch",
        "Document tampering suspected",
        "Inconsistent employment dates"
      ],
      status: "under-review"
    },
    {
      id: "ANM_2398",
      date: "2024-01-27",
      caseId: "LOAN_2399",
      applicant: "R. Patterson",
      severity: "medium",
      type: "fraud-pattern",
      description: "Application pattern matches known fraud cases with 87% similarity",
      confidence: 87,
      flags: [
        "Similar to fraud case FR_8821",
        "Rapid employment changes",
        "Multiple address changes in 6 months"
      ],
      status: "investigating"
    },
    {
      id: "ANM_2395",
      date: "2024-01-26",
      caseId: "LOAN_2395",
      applicant: "T. Morrison",
      severity: "low",
      type: "data-outlier",
      description: "Debt-to-income ratio significantly outside normal distribution",
      confidence: 72,
      flags: [
        "DTI ratio: 58% (typical range: 25-45%)",
        "Unusual expense patterns"
      ],
      status: "resolved"
    },
    {
      id: "ANM_2392",
      date: "2024-01-25",
      caseId: "LOAN_2390",
      applicant: "M. Brooks",
      severity: "high",
      type: "identity-verification",
      description: "ID document shows signs of digital manipulation",
      confidence: 91,
      flags: [
        "Metadata inconsistencies in ID scan",
        "Photo quality mismatch",
        "Fonts differ from genuine documents"
      ],
      status: "rejected"
    },
    {
      id: "ANM_2388",
      date: "2024-01-24",
      caseId: "LOAN_2385",
      applicant: "J. Thompson",
      severity: "medium",
      type: "behavioral-anomaly",
      description: "Application behavior differs from typical successful applicants",
      confidence: 78,
      flags: [
        "Unusual application time patterns",
        "Multiple draft submissions",
        "Inconsistent information updates"
      ],
      status: "cleared"
    }
  ];
  
  const stats = {
    total: 12,
    high: 3,
    medium: 5,
    low: 4,
    resolved: 8,
    pending: 4
  };
  
  return (
    <div className="anomaly-container">
      <header className="anomaly-header">
        <div className="header-content">
          <div>
            <h1>Anomaly Detection</h1>
          </div>
   <div className="header-actions">
  <button className="btn btn-secondary" onClick={() => navigate("/admin")}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M19 12H5M12 19l-7-7 7-7"/>
    </svg>
    Back to Dashboard
  </button>
</div>
        </div>
      </header>
      
      <div className="anomaly-content">
        {/* Statistics Overview */}
        <section className="anomaly-stats">
          <div className="stat-card-anomaly">
            <div className="stat-icon-large danger">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
            </div>
            <div className="stat-details">
              <div className="stat-number">{stats.total}</div>
              <div className="stat-label">Total Anomalies</div>
              <div className="stat-breakdown">
                <span className="breakdown-item high">{stats.high} High</span>
                <span className="breakdown-item medium">{stats.medium} Medium</span>
                <span className="breakdown-item low">{stats.low} Low</span>
              </div>
            </div>
          </div>
          
          <div className="stat-card-anomaly">
            <div className="stat-icon-large warning">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div className="stat-details">
              <div className="stat-number">{stats.pending}</div>
              <div className="stat-label">Pending Review</div>
              <div className="stat-meta">Requires immediate attention</div>
            </div>
          </div>
          
          <div className="stat-card-anomaly">
            <div className="stat-icon-large success">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <div className="stat-details">
              <div className="stat-number">{stats.resolved}</div>
              <div className="stat-label">Resolved</div>
              <div className="stat-meta">{Math.round((stats.resolved / stats.total) * 100)}% resolution rate</div>
            </div>
          </div>
        </section>
        <section className="card">
          <h2 className="section-title">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3"/>
              <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"/>
            </svg>
            Detection Categories
          </h2>
          
          <div className="detection-types">
            <div className="type-card">
              <div className="type-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                </svg>
              </div>
              <div className="type-name">Document Inconsistency</div>
              <div className="type-count">3 cases</div>
            </div>
            
            <div className="type-card">
              <div className="type-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="8.5" cy="7" r="4"/>
                  <line x1="20" y1="8" x2="20" y2="14"/>
                  <line x1="23" y1="11" x2="17" y2="11"/>
                </svg>
              </div>
              <div className="type-name">Identity Verification</div>
              <div className="type-count">2 cases</div>
            </div>
            
            <div className="type-card">
              <div className="type-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <div className="type-name">Fraud Pattern Match</div>
              <div className="type-count">4 cases</div>
            </div>
            
            <div className="type-card">
              <div className="type-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
              <div className="type-name">Behavioral Anomaly</div>
              <div className="type-count">2 cases</div>
            </div>
            
            <div className="type-card">
              <div className="type-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <div className="type-name">Data Outlier</div>
              <div className="type-count">1 case</div>
            </div>
          </div>
        </section>
        
        {/* Anomaly List */}
        <section className="card">
          <h2 className="section-title">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 11l3 3L22 4"/>
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
            </svg>
            Detected Anomalies
          </h2>
          
          <div className="anomaly-list">
            {anomalies.map((anomaly, index) => (
              <div 
                key={anomaly.id} 
                className={`anomaly-item ${selectedAnomaly === anomaly.id ? 'selected' : ''}`}
                style={{animationDelay: `${index * 0.1}s`}}
                onClick={() => setSelectedAnomaly(selectedAnomaly === anomaly.id ? null : anomaly.id)}
              >
                <div className="anomaly-main">
                  <div className={`severity-indicator severity-${anomaly.severity}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                      <line x1="12" y1="9" x2="12" y2="13"/>
                      <line x1="12" y1="17" x2="12.01" y2="17"/>
                    </svg>
                  </div>
                  
                  <div className="anomaly-info">
                    <div className="anomaly-header-row">
                      <span className="anomaly-id">{anomaly.id}</span>
                      <span className="anomaly-case">Case: {anomaly.caseId}</span>
                      <span className={`status-badge status-${anomaly.status}`}>
                        {anomaly.status.replace('-', ' ')}
                      </span>
                    </div>
                    
                    <div className="anomaly-applicant">{anomaly.applicant}</div>
                    
                    <div className="anomaly-type">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="16" x2="12" y2="12"/>
                        <line x1="12" y1="8" x2="12.01" y2="8"/>
                      </svg>
                      {anomaly.type.replace('-', ' ')}
                    </div>
                    
                    <p className="anomaly-description">{anomaly.description}</p>
                  </div>
                  
                  <div className="anomaly-meta">
                    <div className="confidence-display-small">
                      <div className="confidence-ring" style={{"--conf": anomaly.confidence}}>
                        <span>{anomaly.confidence}%</span>
                      </div>
                      <div className="confidence-label-small">Confidence</div>
                    </div>
                    
                    <div className="anomaly-date">{anomaly.date}</div>
                  </div>
                </div>
                
                {selectedAnomaly === anomaly.id && (
                  <div className="anomaly-details">
                    <div className="details-section">
                      <h4>Detected Flags</h4>
                      <ul className="flags-list">
                        {anomaly.flags.map((flag, i) => (
                          <li key={i}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                              <line x1="12" y1="9" x2="12" y2="13"/>
                              <line x1="12" y1="17" x2="12.01" y2="17"/>
                            </svg>
                            {flag}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="details-actions">
                      <button className="btn btn-danger">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/>
                          <line x1="15" y1="9" x2="9" y2="15"/>
                          <line x1="9" y1="9" x2="15" y2="15"/>
                        </svg>
                        Reject Application
                      </button>
                      <button className="btn btn-secondary">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                          <polyline points="14 2 14 8 20 8"/>
                        </svg>
                        Request Documentation
                      </button>
                      <button className="btn btn-success">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        Clear Anomaly
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}