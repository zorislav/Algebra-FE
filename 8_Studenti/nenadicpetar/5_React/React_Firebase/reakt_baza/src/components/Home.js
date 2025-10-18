import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function Home() {
  const { user } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h2>Dobrodošao!</h2>
      {user ? (
        <>
          <p>
            Prijavljen si kao: <strong>{user.email}</strong>
          </p>
          <button onClick={handleLogout}>Odjavi se</button>
        </>
      ) : (
        <p>Nisi prijavljen.</p>
      )}
    </div>
  );
}
