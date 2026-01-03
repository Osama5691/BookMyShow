import { createContext, useContext, useState, useEffect } from "react";
import { account } from "./appWrite";
import { toast } from "react-toastify";


const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [showSignup, setShowSignup] = useState(false);

  // ✅ User fetch
  useEffect(() => {
    account
      .get()
      .then((res) => setUser(res))
      .catch(() => {
        const guest = localStorage.getItem("guestUser");
        if (guest) {
          setUser(JSON.parse(guest));
        } else {
          setUser(null);
        }
      });
  }, []);

  // ✅ Sign out
async function signOut() {
  try {
    await account.deleteSession("current").catch(() => {});
    localStorage.removeItem("guestUser");
    setUser(null);
    setShowSignup(false);

    toast.success("You have been signed out!", {
      position: "top-center",
      autoClose: 2000,
    });
    window.location.reload();


  } catch (err) {
    console.error("Sign out failed:", err);
    toast.error("Failed to sign out. Try again.", {
      position: "top-center",
      autoClose: 2500,
    });
  }
}


  return (
    <AuthContext.Provider value={{ user, setUser, signOut, showSignup, setShowSignup }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
