import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <AuthProvider>
      <Router>
        <nav>
          <div className="nav-container">
            <button
              className="nav-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              &#9776; {/* Hamburger ikona */}
            </button>
            <div className={`nav-links ${menuOpen ? "open" : ""}`}>
              <Link to="/register" onClick={() => setMenuOpen(false)}>
                Registracija
              </Link>
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                Prijava
              </Link>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Početna
              </Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
