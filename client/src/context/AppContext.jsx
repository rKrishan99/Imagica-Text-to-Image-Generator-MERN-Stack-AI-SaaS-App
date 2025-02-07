import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [isImageGenerating, setIsImageGenerating] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenSignup, setIsOpenSignup] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [credit, setCredit] = useState(0);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const loadCreditData = async () => {
    console.log("Token in context:", token);
    try {
      const { data } = await axios.get(backendUrl + '/api/user/credits', {
        headers: {
          token
        },
      });

      console.log("Token", token);
      console.log("Data", data);

      if(data.success) {
        setCredit(data.credits);
        setUser(data.user);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const loguot = () => {
    localStorage.removeItem('token');
    setToken('');
    setUser(null);
  }

  useEffect(() => {
    if (token) {
      loadCreditData();
    }
  }, [token]);

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
    loadCreditData,
    loguot,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
