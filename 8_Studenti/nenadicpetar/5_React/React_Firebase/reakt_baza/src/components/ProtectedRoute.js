import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export default function ProtectedRoute({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <p>Učitavanje...</p>;

  // ako korisnik nije prijavljen → vrati ga na /login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // ako je prijavljen → prikaži djecu (zaštićenu rutu)
  return children;
}
