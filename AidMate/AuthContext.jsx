import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, refreshSession }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
