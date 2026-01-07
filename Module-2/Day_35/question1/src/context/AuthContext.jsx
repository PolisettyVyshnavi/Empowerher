import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";
import authService from "../services/auth.service";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
useEffect(() => {
const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
setUser(currentUser);
setLoading(false);
});
return unsubscribe;
}, []);
const login = (email, password) => authService.login(email, password);
const signup = (email, password) => authService.signup(email, password);
const logout = () => authService.logout();
return (
<AuthContext.Provider value={{ user, login, signup, logout }}>
{!loading && children}
</AuthContext.Provider>
);
};
export const useAuth = () => useContext(AuthContext);