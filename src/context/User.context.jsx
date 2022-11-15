import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext({});

export const UserContextProvider = (props) => {
  const { children } = props;
  const [user, setUser] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.userName) {
      navigate("/");
    } else {
      navigate("/main");
    }
  }, [user]);

  const contextValue = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
