import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import ApplicationPage from "./components/ApplicationPage";
import ResultPage from "./components/ResultPage";
import History from "./components/History";
import AnomalyDetection from "./components/AnomalyDetection";
import AuditTrail from "./components/AuditTrail";
import ViewApplication from "./components/ViewApplication";
import "./styles/global.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/apply" element={<ApplicationPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/cases" element={<History />} />
        <Route path="/anomalies" element={<AnomalyDetection />} />
        <Route path="/audit" element={<AuditTrail />} />
        <Route path="/application" element={<ViewApplication />} />
      </Routes>
    </Router>
  );
}