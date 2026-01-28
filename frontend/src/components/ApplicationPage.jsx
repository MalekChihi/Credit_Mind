import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/application.css";

export default function ApplicationPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // Applicant Profile
    income: "",
    expenses: "",
    employment: "",
    employmentYears: "",
    creditScore: "",
    existingLoans: "",
    loanAmount: "",
    loanTerm: "",
    loanPurpose: "",
    collateral: "",
    documents: []
  });
  
  const [processing, setProcessing] = useState(false);
  const [uploadedDocs, setUploadedDocs] = useState([]);
  
  function handleChange(field, value) {
    setFormData(prev => ({ ...prev, [field]: value }));
  }
  
  function handleFileUpload(e) {
    const files = Array.from(e.target.files);
    const newDocs = files.map(file => ({
      name: file.name,
      type: file.type,
      size: (file.size / 1024).toFixed(2) + " KB",
      status: "uploaded"
    }));
    setUploadedDocs(prev => [...prev, ...newDocs]);
  }
  
  function removeDocument(index) {
    setUploadedDocs(prev => prev.filter((_, i) => i !== index));
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    setProcessing(true);
    setTimeout(() => {
      navigate("/result", { state: { formData, documents: uploadedDocs } });
    }, 2000);
  }
  
  const loanPurposes = [
    "Home Purchase",
    "Debt Consolidation",
    "Business Expansion",
    "Vehicle Purchase",
    "Education",
    "Home Improvement",
    "Medical Expenses",
    "Other"
  ];
  
  const collateralTypes = [
    "None",
    "Real Estate",
    "Vehicle",
    "Equipment",
    "Investments",
    "Other Assets"
  ];
  
  return (
    <div className="application-container">
      <header className="application-header">
        <div className="header-title">
          <h1>Loan Application</h1>
          <p>Complete your application for intelligent risk assessment</p>
        </div>
      </header>
      
      <div className="application-content">
        <div className="application-sidebar">
          <div className="sidebar-card">
            <div className="sidebar-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 11l3 3L22 4"/>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
              </svg>
            </div>
            <h3>What Happens Next?</h3>
            <ol className="process-list">
              <li>Profile Analysis: Your financial profile is vectorized</li>
              <li>Similarity Search: We find similar historical cases</li>
              <li>Risk Assessment: We evaluate your application</li>
              <li>Decision Support: Receive recommendation & explanation</li>
            </ol>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="application-form">
          <section className="form-section">
            <div className="section-header">
              <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              <div>
                <h2>Applicant Profile</h2>
                <p>Your financial background and employment details</p>
              </div>
            </div>
            
            <div className="form-grid">
              <div className="form-field">
                <label className="form-label">
                  Annual Income
                  <span className="required">*</span>
                </label>
                <div className="input-with-prefix">
                  <span className="input-prefix">$</span>
                  <input
                    type="number"
                    className="form-input"
                    placeholder="75,000"
                    value={formData.income}
                    onChange={(e) => handleChange('income', e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="form-field">
                <label className="form-label">
                  Monthly Expenses
                  <span className="required">*</span>
                </label>
                <div className="input-with-prefix">
                  <span className="input-prefix">$</span>
                  <input
                    type="number"
                    className="form-input"
                    placeholder="3,500"
                    value={formData.expenses}
                    onChange={(e) => handleChange('expenses', e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="form-field">
                <label className="form-label">
                  Employment Status
                  <span className="required">*</span>
                </label>
                <select
                  className="form-input"
                  value={formData.employment}
                  onChange={(e) => handleChange('employment', e.target.value)}
                  required
                >
                  <option value="">Select status</option>
                  <option value="full-time">Full-Time Employed</option>
                  <option value="part-time">Part-Time Employed</option>
                  <option value="self-employed">Self-Employed</option>
                  <option value="contractor">Independent Contractor</option>
                  <option value="unemployed">Unemployed</option>
                  <option value="retired">Retired</option>
                </select>
              </div>
              
              <div className="form-field">
                <label className="form-label">
                  Years at Current Job
                  <span className="required">*</span>
                </label>
                <input
                  type="number"
                  className="form-input"
                  placeholder="5"
                  value={formData.employmentYears}
                  onChange={(e) => handleChange('employmentYears', e.target.value)}
                  min="0"
                  step="0.5"
                  required
                />
              </div>
              
              <div className="form-field">
                <label className="form-label">
                  Credit Score
                  <span className="tooltip" data-tooltip="FICO score range: 300-850">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                      <line x1="12" y1="17" x2="12.01" y2="17"/>
                    </svg>
                  </span>
                </label>
                <input
                  type="number"
                  className="form-input"
                  placeholder="720"
                  value={formData.creditScore}
                  onChange={(e) => handleChange('creditScore', e.target.value)}
                  min="300"
                  max="850"
                />
              </div>
              
              <div className="form-field">
                <label className="form-label">
                  Existing Loan Obligations
                </label>
                <div className="input-with-prefix">
                  <span className="input-prefix">$</span>
                  <input
                    type="number"
                    className="form-input"
                    placeholder="0"
                    value={formData.existingLoans}
                    onChange={(e) => handleChange('existingLoans', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="form-section">
            <div className="section-header">
              <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                <line x1="1" y1="10" x2="23" y2="10"/>
              </svg>
              <div>
                <h2>Loan Request Details</h2>
                <p>Specify your loan requirements</p>
              </div>
            </div>
            
            <div className="form-grid">
              <div className="form-field full-width">
                <label className="form-label">
                  Loan Amount Requested
                  <span className="required">*</span>
                </label>
                <div className="input-with-prefix">
                  <span className="input-prefix">$</span>
                  <input
                    type="number"
                    className="form-input"
                    placeholder="50,000"
                    value={formData.loanAmount}
                    onChange={(e) => handleChange('loanAmount', e.target.value)}
                    required
                  />
                </div>
                <div className="loan-calculator">
                  {formData.loanAmount && formData.loanTerm && (
                    <div className="calculation-result">
                      <span>Estimated Monthly Payment:</span>
                      <strong>
                        ${Math.round((formData.loanAmount / formData.loanTerm) * 1.05).toLocaleString()}
                      </strong>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="form-field">
                <label className="form-label">
                  Loan Term (months)
                  <span className="required">*</span>
                </label>
                <select
                  className="form-input"
                  value={formData.loanTerm}
                  onChange={(e) => handleChange('loanTerm', e.target.value)}
                  required
                >
                  <option value="">Select term</option>
                  <option value="12">12 months</option>
                  <option value="24">24 months</option>
                  <option value="36">36 months</option>
                  <option value="48">48 months</option>
                  <option value="60">60 months</option>
                  <option value="84">84 months</option>
                  <option value="120">120 months</option>
                </select>
              </div>
              
              <div className="form-field">
                <label className="form-label">
                  Loan Purpose
                  <span className="required">*</span>
                </label>
                <select
                  className="form-input"
                  value={formData.loanPurpose}
                  onChange={(e) => handleChange('loanPurpose', e.target.value)}
                  required
                >
                  <option value="">Select purpose</option>
                  {loanPurposes.map(purpose => (
                    <option key={purpose} value={purpose}>{purpose}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-field full-width">
                <label className="form-label">
                  Collateral Type
                </label>
                <select
                  className="form-input"
                  value={formData.collateral}
                  onChange={(e) => handleChange('collateral', e.target.value)}
                >
                  <option value="">Select collateral</option>
                  {collateralTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
          </section>
          <section className="form-section">
            <div className="section-header">
              <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="17 8 12 3 7 8"/>
                <line x1="12" y1="3" x2="12" y2="15"/>
              </svg>
              <div>
                <h2>Supporting Documents</h2>
                <p>Upload bank statements, IDs, proof of income (optional)</p>
              </div>
            </div>
            
            <div className="upload-area">
              <input
                type="file"
                id="document-upload"
                className="file-input"
                onChange={handleFileUpload}
                multiple
                accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
              />
              <label htmlFor="document-upload" className="upload-label">
                <svg className="upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="17 8 12 3 7 8"/>
                  <line x1="12" y1="3" x2="12" y2="15"/>
                </svg>
                <div className="upload-text">
                  <strong>Click to upload</strong> or drag and drop
                </div>
                <div className="upload-hint">
                  PDF, JPG, PNG, DOC up to 10MB
                </div>
              </label>
            </div>
            
            {uploadedDocs.length > 0 && (
              <div className="uploaded-documents">
                {uploadedDocs.map((doc, index) => (
                  <div key={index} className="document-item">
                    <div className="document-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                      </svg>
                    </div>
                    <div className="document-info">
                      <div className="document-name">{doc.name}</div>
                      <div className="document-meta">{doc.size}</div>
                    </div>
                    <button
                      type="button"
                      className="remove-doc-btn"
                      onClick={() => removeDocument(index)}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>
          <div className="form-actions">
            <button type="submit" className="btn btn-primary" disabled={processing}>
              {processing ? (
                <>
                  <span className="loading"></span>
                  Processing Application...
                </>
              ) : (
                <>
                  Submit Application
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}