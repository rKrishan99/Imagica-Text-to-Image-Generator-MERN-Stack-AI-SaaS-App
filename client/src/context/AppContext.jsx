import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(true);
  const [isImageGenerating, setIsImageGenerating] = useState(false);

  const value = {
    user,
    setUser,
    isImageGenerating,
    setIsImageGenerating,
  };

  return (
    <AppContext.Provider value={{ value }}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
