import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/audit.css";

export default function AuditTrail() {
  const navigate = useNavigate();
  const [filterType, setFilterType] = useState("all");
  const [dateRange, setDateRange] = useState("7days");
  
  const auditLogs = [
    {
      id: "AUD_5201",
      timestamp: "2024-01-28 14:32:15",
      user: "admin@creditdecision.com",
      action: "Decision Override",
      details: "Changed decision from DECLINED to APPROVED for LOAN_2401",
      caseId: "LOAN_2401",
      type: "critical",
      justification: "Manual review completed - applicant provided additional income verification"
    },
    {
      id: "AUD_5200",
      timestamp: "2024-01-28 13:15:42",
      user: "system@creditdecision.com",
      action: "Model Update",
      details: "Updated similarity model weights based on new training data",
      type: "system",
      version: "v2.3.1"
    },
    {
      id: "AUD_5199",
      timestamp: "2024-01-28 11:22:08",
      user: "analyst@creditdecision.com",
      action: "Anomaly Resolution",
      details: "Cleared anomaly ANM_2395 after document verification",
      caseId: "LOAN_2395",
      type: "review",
      outcome: "Cleared"
    },
    {
      id: "AUD_5198",
      timestamp: "2024-01-28 09:45:33",
      user: "system@creditdecision.com",
      action: "Automated Decision",
      details: "Approved LOAN_2400 with 94% confidence",
      caseId: "LOAN_2400",
      type: "decision",
      confidence: 94
    },
    {
      id: "AUD_5197",
      timestamp: "2024-01-27 16:18:27",
      user: "compliance@creditdecision.com",
      action: "Fairness Audit",
      details: "Completed monthly fairness analysis - no bias detected",
      type: "compliance",
      status: "Passed"
    },
    {
      id: "AUD_5196",
      timestamp: "2024-01-27 14:55:19",
      user: "admin@creditdecision.com",
      action: "Data Access",
      details: "Accessed historical cases for training data preparation",
      type: "access",
      recordCount: 1500
    },
    {
      id: "AUD_5195",
      timestamp: "2024-01-27 13:30:45",
      user: "system@creditdecision.com",
      action: "Anomaly Detection",
      details: "Detected document inconsistency in LOAN_2403",
      caseId: "LOAN_2403",
      type: "alert",
      severity: "high"
    },
    {
      id: "AUD_5194",
      timestamp: "2024-01-27 11:12:03",
      user: "analyst@creditdecision.com",
      action: "Case Review",
      details: "Reviewed and approved LOAN_2398 after manual assessment",
      caseId: "LOAN_2398",
      type: "review",
      outcome: "Approved"
    },
    {
      id: "AUD_5193",
      timestamp: "2024-01-27 09:28:51",
      user: "system@creditdecision.com",
      action: "Performance Update",
      details: "Updated model accuracy metrics - 87.2% accuracy achieved",
      type: "system",
      metric: "87.2%"
    },
    {
      id: "AUD_5192",
      timestamp: "2024-01-26 15:47:36",
      user: "admin@creditdecision.com",
      action: "Configuration Change",
      details: "Updated risk threshold for high-value loans (>$75k)",
      type: "configuration",
      previousValue: "82%",
      newValue: "85%"
    }
  ];
  
  const filteredLogs = auditLogs.filter(log => 
    filterType === "all" || log.type === filterType
  );
  
  const activityStats = {
    total: 5201,
    today: 47,
    critical: 12,
    system: 3842
  };
  
  return (
    <div className="audit-container">
      <header className="audit-header">
        <div className="header-content">
          <div>
            <h1>Audit Trail</h1>
            <p className="header-subtitle">Complete decision history with transparency and traceability</p>
          </div>
          <div className="header-actions">
            <button className="btn btn-secondary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Export Audit Log
            </button>
            <button className="btn btn-secondary" onClick={() => navigate("/admin")}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back to Dashboard
            </button>
          </div>
        </div>
      </header>
      
      <div className="audit-content">
        {/* Activity Statistics */}
        <section className="activity-stats">
          <div className="activity-stat-card">
            <div className="activity-icon primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 20h9"/>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
              </svg>
            </div>
            <div className="activity-stat-content">
              <div className="activity-stat-value">{activityStats.total.toLocaleString()}</div>
              <div className="activity-stat-label">Total Activities</div>
            </div>
          </div>
          
          <div className="activity-stat-card">
            <div className="activity-icon success">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div className="activity-stat-content">
              <div className="activity-stat-value">{activityStats.today}</div>
              <div className="activity-stat-label">Today's Activities</div>
            </div>
          </div>
          
          <div className="activity-stat-card">
            <div className="activity-icon danger">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
            </div>
            <div className="activity-stat-content">
              <div className="activity-stat-value">{activityStats.critical}</div>
              <div className="activity-stat-label">Critical Actions</div>
            </div>
          </div>
          
          <div className="activity-stat-card">
            <div className="activity-icon info">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
            </div>
            <div className="activity-stat-content">
              <div className="activity-stat-value">{activityStats.system.toLocaleString()}</div>
              <div className="activity-stat-label">System Events</div>
            </div>
          </div>
        </section>
        
        {/* Filters */}
        <section className="audit-filters">
          <div className="filter-group">
            <label className="filter-label">Activity Type</label>
            <select 
              className="filter-select"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="decision">Decisions</option>
              <option value="critical">Critical Actions</option>
              <option value="review">Reviews</option>
              <option value="system">System Events</option>
              <option value="compliance">Compliance</option>
              <option value="alert">Alerts</option>
              <option value="access">Data Access</option>
              <option value="configuration">Configuration</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label className="filter-label">Date Range</label>
            <select 
              className="filter-select"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
            >
              <option value="24hours">Last 24 Hours</option>
              <option value="7days">Last 7 Days</option>
              <option value="30days">Last 30 Days</option>
              <option value="90days">Last 90 Days</option>
            </select>
          </div>
          
          <div className="filter-results">
            Showing {filteredLogs.length} of {auditLogs.length} activities
          </div>
        </section>
        
        {/* Timeline */}
        <section className="card">
          <h2 className="section-title">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            Activity Timeline
          </h2>
          
          <div className="audit-timeline">
            {filteredLogs.map((log, index) => (
              <div 
                key={log.id} 
                className={`timeline-item type-${log.type}`}
                style={{animationDelay: `${index * 0.05}s`}}
              >
                <div className="timeline-marker">
                  <div className="marker-dot"></div>
                  <div className="marker-line"></div>
                </div>
                
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div className="timeline-title">
                      <span className="timeline-action">{log.action}</span>
                      <span className={`timeline-badge badge-${log.type}`}>
                        {log.type}
                      </span>
                    </div>
                    <div className="timeline-timestamp">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                      {log.timestamp}
                    </div>
                  </div>
                  
                  <div className="timeline-details">
                    <p className="timeline-description">{log.details}</p>
                    
                    <div className="timeline-meta">
                      <div className="meta-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                          <circle cx="12" cy="7" r="4"/>
                        </svg>
                        <span>{log.user}</span>
                      </div>
                      
                      {log.caseId && (
                        <div className="meta-item">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <polyline points="14 2 14 8 20 8"/>
                          </svg>
                          <span>Case: {log.caseId}</span>
                        </div>
                      )}
                      
                      <div className="meta-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                        </svg>
                        <span>ID: {log.id}</span>
                      </div>
                    </div>
                    
                    {/* Additional context based on type */}
                    {log.justification && (
                      <div className="timeline-context warning">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/>
                          <line x1="12" y1="16" x2="12" y2="12"/>
                          <line x1="12" y1="8" x2="12.01" y2="8"/>
                        </svg>
                        <div>
                          <strong>Justification:</strong>
                          <p>{log.justification}</p>
                        </div>
                      </div>
                    )}
                    
                    {log.confidence && (
                      <div className="timeline-metric">
                        <span className="metric-label">Confidence:</span>
                        <span className="metric-value">{log.confidence}%</span>
                      </div>
                    )}
                    
                    {log.previousValue && log.newValue && (
                      <div className="timeline-change">
                        <div className="change-item">
                          <span className="change-label">Previous:</span>
                          <span className="change-value old">{log.previousValue}</span>
                        </div>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="5" y1="12" x2="19" y2="12"/>
                          <polyline points="12 5 19 12 12 19"/>
                        </svg>
                        <div className="change-item">
                          <span className="change-label">New:</span>
                          <span className="change-value new">{log.newValue}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Compliance Summary */}
        <section className="card compliance-card">
          <h2 className="section-title">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            Compliance & Security
          </h2>
          
          <div className="compliance-grid">
            <div className="compliance-item">
              <div className="compliance-icon success">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <div className="compliance-content">
                <div className="compliance-title">Audit Completeness</div>
                <div className="compliance-value">100%</div>
                <div className="compliance-desc">All activities logged</div>
              </div>
            </div>
            
            <div className="compliance-item">
              <div className="compliance-icon success">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <div className="compliance-content">
                <div className="compliance-title">Data Integrity</div>
                <div className="compliance-value">Verified</div>
                <div className="compliance-desc">Tamper-proof logs</div>
              </div>
            </div>
            
            <div className="compliance-item">
              <div className="compliance-icon success">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <div className="compliance-content">
                <div className="compliance-title">Access Control</div>
                <div className="compliance-value">Active</div>
                <div className="compliance-desc">Role-based permissions</div>
              </div>
            </div>
            
            <div className="compliance-item">
              <div className="compliance-icon success">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
              </div>
              <div className="compliance-content">
                <div className="compliance-title">Documentation</div>
                <div className="compliance-value">Current</div>
                <div className="compliance-desc">Audit-ready reports</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}