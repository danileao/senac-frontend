import React, { createContext, useState, useCallback } from "react";

const UserContext = createContext();

// Context -> Provider
const UserProvider = ({ children }) => {
  const [usuario, setUsuario] = useState();

  const adicionaUsuario = useCallback((nomeUsuario) => {
    console.log("Nome", nomeUsuario);
    setUsuario(nomeUsuario);
  }, []);

  return (
    <UserContext.Provider value={{ usuario, adicionaUsuario }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
