import { createContext, useContext, useState, type ReactNode } from "react";
import { clearStorage, setStorage } from "../helpers/localStorage";
import type { User } from "../interfaces/userInterface";

// Crear la estructura del contexto

interface AuthContextType {
  user: User;
  isAuth: boolean;
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

// el hook useContext necesita el nombre del contexto
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({} as User);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const login = (user: User) => {
    setStorage("user", user);
    setStorage("token", user.token);

    setUser(user);
    setIsAuth(true);
  };

  const logout = () => {
    clearStorage();
    setUser({} as User);
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
