import { createContext,useEffect, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("accessToken");

      if (token) {
        try {
          const response = await fetch(
            "https://morentb.vercel.app/api/cars",
            { method: "GET", headers: { token: `Bearer ${token}` } }
          );

          if (response.ok) {
            const userData = await response.json();
            setUser(userData);
          } else {
            localStorage.removeItem("accessToken");
          }
        } catch (error) {
          console.log("Error verifying user", error);
        }
      }
      setLoading(false);
    };

    verifyToken();
  }, []);

  const register = (userData) => {
    setUser(userData);
    localStorage.setItem("accessToken", userData.accessToken);
  };

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("accessToken", userData.accessToken);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("accessToken");
  };

  const updateProfileImage = (imageUrl) => {
    setUser((prevUser) => ({
      ...prevUser,
      profileImage: imageUrl,
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen mt-2">
        Loading...
      </div>
    );
  }

  return (
    <AuthContext.Provider
      value={{ user, register, login, logout, loading, updateProfileImage }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);