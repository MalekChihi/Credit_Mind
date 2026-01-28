import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/dashboard.css";

export default function ViewApplication() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const applications = [
    {
      id: "LP001002",
      applicant: "John Smith",
      email: "j.smith@email.com",
      amount: 150000,
      status: "approved",
      confidence: 94,
      submittedDate: "2026-01-28",
      income: 85000,
      creditScore: 720,
      risk: "low"
    },
    {
      id: "LP001003",
      applicant: "Mary Johnson",
      email: "m.johnson@email.com",
      amount: 200000,
      status: "declined",
      confidence: 89,
      submittedDate: "2026-01-28",
      income: 45000,
      creditScore: 580,
      risk: "high"
    },
    {
      id: "LP001004",
      applicant: "Kevin Williams",
      email: "k.williams@email.com",
      amount: 175000,
      status: "anomaly",
      confidence: 67,
      submittedDate: "2026-01-28",
      income: 72000,
      creditScore: 680,
      risk: "medium"
    },
    {
      id: "LP001005",
      applicant: "Lisa Brown",
      email: "l.brown@email.com",
      amount: 125000,
      status: "approved",
      confidence: 91,
      submittedDate: "2026-01-27",
      income: 95000,
      creditScore: 750,
      risk: "low"
    },
    {
      id: "LP001006",
      applicant: "Robert Davis",
      email: "r.davis@email.com",
      amount: 180000,
      status: "pending",
      confidence: 78,
      submittedDate: "2026-01-27",
      income: 68000,
      creditScore: 650,
      risk: "medium"
    },
  ];

  const filteredApplications = applications.filter(app => {
    const matchesSearch = 
      app.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.applicant.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterStatus === "all" || app.status === filterStatus;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-content">
          <div>
            <h1>Applications</h1>
            <p style={{ marginTop: '0.5rem', opacity: 0.8 }}>
            </p>
          </div>
          <button className="btn btn-secondary" onClick={() => navigate("/admin")}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Dashboard
          </button>
        </div>
      </header>

      <div className="dashboard-content">
        <section className="card">
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            <div style={{ flex: '1', minWidth: '250px' }}>
              <input
                type="text"
                placeholder="Search by ID, name, or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  border: '1px solid #e5e7eb',
                  borderRadius: '0.5rem',
                  fontSize: '0.95rem'
                }}
              />
            </div>
            <div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                style={{
                  padding: '0.75rem 1rem',
                  border: '1px solid #e5e7eb',
                  borderRadius: '0.5rem',
                  fontSize: '0.95rem',
                  cursor: 'pointer'
                }}
              >
                <option value="all">All Status</option>
                <option value="approved">Approved</option>
                <option value="declined">Declined</option>
                <option value="pending">Pending</option>
                <option value="anomaly">Anomaly</option>
              </select>
            </div>
          </div>

          {/* Applications Table */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Application ID</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Applicant</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Loan Amount</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Income</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Credit Score</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Status</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Confidence</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredApplications.map((app) => (
                  <tr key={app.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '1rem' }}>
                      <span style={{ fontFamily: 'monospace', fontWeight: '500' }}>{app.id}</span>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <div>
                        <div style={{ fontWeight: '500' }}>{app.applicant}</div>
                        <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>{app.email}</div>
                      </div>
                    </td>
                    <td style={{ padding: '1rem', fontWeight: '500' }}>
                      ${app.amount.toLocaleString()}
                    </td>
                    <td style={{ padding: '1rem' }}>
                      ${app.income.toLocaleString()}
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <span style={{
                        padding: '0.25rem 0.75rem',
                        borderRadius: '0.375rem',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        backgroundColor: app.creditScore >= 700 ? '#d1fae5' : app.creditScore >= 600 ? '#fef3c7' : '#fee2e2',
                        color: app.creditScore >= 700 ? '#065f46' : app.creditScore >= 600 ? '#92400e' : '#991b1b'
                      }}>
                        {app.creditScore}
                      </span>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <span className={`badge badge-${app.status}`}>
                        {app.status}
                      </span>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <span className="confidence-badge">
                        {app.confidence}%
                      </span>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <button
                        onClick={() => navigate(`/application/${app.id}`)}
                        style={{
                          padding: '0.5rem 1rem',
                          backgroundColor: '#3b82f6',
                          color: 'white',
                          border: 'none',
                          borderRadius: '0.375rem',
                          cursor: 'pointer',
                          fontSize: '0.875rem',
                          fontWeight: '500'
                        }}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredApplications.length === 0 && (
              <div style={{
                textAlign: 'center',
                padding: '3rem',
                color: '#6b7280'
              }}>
                No applications found matching your criteria.
              </div>
            )}
          </div>

          {/* Summary */}
          <div style={{
            marginTop: '1.5rem',
            padding: '1rem',
            backgroundColor: '#f9fafb',
            borderRadius: '0.5rem',
            fontSize: '0.875rem',
            color: '#6b7280'
          }}>
            Showing {filteredApplications.length} of {applications.length} applications
          </div>
        </section>
      </div>
    </div>
  );
}