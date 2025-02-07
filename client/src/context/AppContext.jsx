import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [isImageGenerating, setIsImageGenerating] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenSignup, setIsOpenSignup] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [credit, setCredit] = useState(false);


  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const value = {
    user,
    setUser,
    isImageGenerating,
    setIsImageGenerating,
    isOpenLogin,
    setIsOpenLogin,
    isOpenSignup,
    setIsOpenSignup,
    backendUrl,
    token,
    setToken,
    credit,
    setCredit,
  };

  return (
    <AppContext.Provider value={ value }>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
