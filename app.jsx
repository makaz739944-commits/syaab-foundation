import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import Login from './auth/Login.jsx';
import Dashboard from './internal/Dashboard.jsx';
import ProtectedRoute from './internal/ProtectedRoute.jsx';
import FormsPortal from './components/FormsPortal.jsx';

export default function App() {
  return (
    <>
      <header>
        <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div><strong>سياب للتنمية المستدامة | Syaab Sustainable Development</strong></div>
          <nav>
            <Link to="/">الرئيسية</Link>
            <Link to="/forms">الاستمارات</Link>
            <Link to="/privacy">سياسة الخصوصية</Link>
            <Link to="/login">تسجيل الدخول</Link>
          </nav>
        </div>
      </header>

      <main className="container" style={{minHeight:'70vh'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/forms" element={<FormsPortal />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      <footer>
        <div className="container">
          <small>
            © {new Date().getFullYear()} سياب للتنمية المستدامة — Syaab Sustainable Development — 
            <a href="https://USERNAME.github.io/syaab-sustainable-development-website/#/privacy" style={{marginInlineStart:8}}>سياسة الخصوصية</a>
          </small>
        </div>
      </footer>
    </>
  );
}
