import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/dashboard.css";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [metrics, setMetrics] = useState({
    totalCases: 0,
    anomalies: 0,
    accuracy: 0,
    approved: 0,
    declined: 0,
    pending: 0
  });
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setMetrics({
        totalCases: 1045,
        anomalies: 12,
        accuracy: 87,
        approved: 723,
        declined: 298,
        pending: 24
      });
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  
  const recentActivity = [
    { id: "LP001002", applicant: "J. Smith", status: "approved", confidence: 94, time: "2 min ago", risk: "low" },
    { id: "LP001003", applicant: "M. Johnson", status: "declined", confidence: 89, time: "15 min ago", risk: "high" },
    { id: "LP001004", applicant: "K. Williams", status: "anomaly", confidence: 67, time: "32 min ago", risk: "medium" },
    { id: "LP001005", applicant: "L. Brown", status: "approved", confidence: 91, time: "1 hour ago", risk: "low" },
    { id: "LP001006", applicant: "R. Davis", status: "pending", confidence: 78, time: "2 hours ago", risk: "medium" },
  ];
  
  
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-content">
          <div>
            <h1>Administrator Dashboard</h1>
          </div>
          <button className="btn btn-secondary" onClick={() => navigate("/login")}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            Logout
          </button>
        </div>
      </header>
      
      <div className="dashboard-content">
        {/* Key Metrics */}
        <section className="metrics-grid">
          <div className="metric-card primary">
            <div className="metric-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 3h18v18H3zM9 3v18M15 3v18M3 9h18M3 15h18"/>
              </svg>
            </div>
            <div className="metric-content">
              <div className="metric-label">Total Cases</div>
              <div className="metric-value">{metrics.totalCases.toLocaleString()}</div>
              <div className="metric-trend positive">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                  <polyline points="17 6 23 6 23 12"/>
                </svg>
                +8.3% from last month
              </div>
            </div>
          </div>
          
          <div className="metric-card danger">
            <div className="metric-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
            </div>
            <div className="metric-content">
              <div className="metric-label">Anomalies Detected</div>
              <div className="metric-value">{metrics.anomalies}</div>
              <div className="metric-trend negative">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/>
                  <polyline points="17 18 23 18 23 12"/>
                </svg>
                Requires review
              </div>
            </div>
          </div>
          
          <div className="metric-card success">
            <div className="metric-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <div className="metric-content">
              <div className="metric-label">Model Accuracy</div>
              <div className="metric-value">{metrics.accuracy}%</div>
              <div className="metric-trend positive">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                  <polyline points="17 6 23 6 23 12"/>
                </svg>
                +2.1% improvement
              </div>
            </div>
          </div>
          
          <div className="metric-card info">
            <div className="metric-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
            </div>
            <div className="metric-content">
              <div className="metric-label">Pending Reviews</div>
              <div className="metric-value">{metrics.pending}</div>
              <div className="metric-trend neutral">
                Within normal range
              </div>
            </div>
          </div>
        </section>
        
        {/* Decision Distribution */}
        <section className="card">
          <h2 className="section-title">Decision Distribution</h2>
          <div className="distribution-chart">
            <div className="distribution-bar">
              <div 
                className="bar-segment approved" 
                style={{width: `${(metrics.approved / metrics.totalCases * 100)}%`}}
                data-tooltip={`${metrics.approved} Approved`}
              ></div>
              <div 
                className="bar-segment declined" 
                style={{width: `${(metrics.declined / metrics.totalCases * 100)}%`}}
                data-tooltip={`${metrics.declined} Declined`}
              ></div>
              <div 
                className="bar-segment pending" 
                style={{width: `${(metrics.pending / metrics.totalCases * 100)}%`}}
                data-tooltip={`${metrics.pending} Pending`}
              ></div>
            </div>
            <div className="distribution-legend">
              <div className="legend-item">
                <div className="legend-color approved"></div>
                <span>Approved: {metrics.approved} ({Math.round(metrics.approved / metrics.totalCases * 100)}%)</span>
              </div>
              <div className="legend-item">
                <div className="legend-color declined"></div>
                <span>Declined: {metrics.declined} ({Math.round(metrics.declined / metrics.totalCases * 100)}%)</span>
              </div>
              <div className="legend-item">
                <div className="legend-color pending"></div>
                <span>Pending: {metrics.pending} ({Math.round(metrics.pending / metrics.totalCases * 100)}%)</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Quick Actions */}
        <section className="quick-actions">
          <h2 className="section-title">Quick Actions</h2>
          <div className="action-grid">
            <button className="action-card" onClick={() => navigate("/cases")}>
              <svg className="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
              <div className="action-title">Historical Cases</div>
              <div className="action-description">Browse & analyze past decisions</div>
            </button>
            
            <button className="action-card" onClick={() => navigate("/anomalies")}>
              <svg className="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"/>
              </svg>
              <div className="action-title">Anomaly Detection</div>
              <div className="action-description">Review flagged applications</div>
            </button>
            
            <button className="action-card" onClick={() => navigate("/audit")}>
              <svg className="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="12" y1="18" x2="12" y2="12"/>
                <line x1="9" y1="15" x2="15" y2="15"/>
              </svg>
              <div className="action-title">Audit Trail</div>
              <div className="action-description">Track decision history</div>
            </button>
            
            <button className="action-card" onClick={() => navigate("/application")}>
                <svg className="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <path d="M8 11h8M8 15h8M8 19h5"/>
  </svg>
  <div className="action-title">View Application</div>
  <div className="action-description">Display applications</div>
            </button>
          </div>
        </section>
        
        <section className="card">
          <h2 className="section-title">Recent Activity</h2>
          <div className="activity-list">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="activity-item">
                <div className="activity-info">
                  <div className="activity-header">
                    <span className="activity-id">{activity.id}</span>
                    <span className={`badge badge-${activity.status}`}>
                      {activity.status}
                    </span>
                  </div>
                  <div className="activity-applicant">{activity.applicant}</div>
                  <div className="activity-meta">
                    <span className="confidence-badge">
                      Confidence: {activity.confidence}%
                    </span>
                    <span className={`risk-badge risk-${activity.risk}`}>
                      Risk: {activity.risk}
                    </span>
                  </div>
                </div>
                <div className="activity-time">{activity.time}</div>
              </div>
            ))}
          </div>
        </section>
        
      </div>
    </div>
  );
}