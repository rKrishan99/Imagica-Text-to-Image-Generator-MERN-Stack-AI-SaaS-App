import { createContext } from 'react';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const value = {
        user,
        setUser,
    };

  return (
    <AppContext.Provider value={{value}}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;