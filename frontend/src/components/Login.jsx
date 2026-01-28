import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

export default function Login() {
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        navigate("/admin");
      } else if (username === "user" && password === "1234") {
        navigate("/apply");
      } else {
        alert("Invalid credentials. Try:\nAdmin: admin/1234\nUser: user/1234");
        setLoading(false);
      }
    }, 800);
  }
  
  return (
    <div className="login-container">
      <div className="login-background">
        <div className="floating-element element-1"></div>
        <div className="floating-element element-2"></div>
        <div className="floating-element element-3"></div>
      </div>
      
      <div className="login-box">
        <div className="login-header">
          <div className="logo-container">
            <svg className="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
        
        </div>
        
        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <label className="input-label">Username</label>
            <div className="input-wrapper">
              <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              <input
                className="login-input"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUser(e.target.value)}
                disabled={loading}
              />
            </div>
          </div>
          
          <div className="input-group">
            <label className="input-label">Password</label>
            <div className="input-wrapper">
              <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <input
                className="login-input"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPass(e.target.value)}
                disabled={loading}
              />
            </div>
          </div>
          
          <button 
            className="btn btn-primary w-full login-button" 
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="loading"></span>
                Authenticating...
              </>
            ) : (
              <>
                Sign In
                <svg className="button-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </>
            )}
          </button>
        </form>
        
        <div className="login-footer">
          <div className="demo-credentials">
            <div className="demo-title">Demo Credentials</div>
            <div className="demo-item">
              <span className="demo-role">Admin:</span>
              <span className="demo-cred">admin / 1234</span>
            </div>
            <div className="demo-item">
              <span className="demo-role">User:</span>
              <span className="demo-cred">user / 1234</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}