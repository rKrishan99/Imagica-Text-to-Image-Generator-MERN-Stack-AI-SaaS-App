import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [isImageGenerating, setIsImageGenerating] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenSignup, setIsOpenSignup] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [credit, setCredit] = useState(0);
  const [image, setImage] = useState(null);
  const [previousGeneratedImages, setPreviousGeneratedImages] = useState([]);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const navigate = useNavigate();

  const loadCreditData = async () => {
    console.log("Token in context:", token);
    try {
      const { data } = await axios.get(backendUrl + '/api/user/credits', {
        headers: {
          Authorization: `Bearer ${token}`
        },
      });

      console.log("Full API Response:", data); // Debugging


      if(data.success) {
        setCredit(data.credits);
        setUser(data.user);
        console.log("Generated Images from API:", data.user.generatedImages);

        setPreviousGeneratedImages(data.user.generatedImages || []);
        
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const generateImage = async (prompt) => {
    try{
      console.log("Prompt in generate:", prompt);
      console.log("Token in generate:", token);
      const {data} = await axios.post(backendUrl + '/api/image/generate-image', {
        prompt
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Generated Image Data:", data);

      if(data.success){
        loadCreditData();
        return data.resultImage;
      }else{
        toast.error(data.message);
        loadCreditData();
        if(data.credits === 0){
          navigate('/buy-credits');
        }
      }

    }catch(error){
      console.log(error);
      toast.error(error.message);
    }
  }

  // const loguot = () => {
  //   console.log("Logout");
  //   localStorage.removeItem('token');
  //   setToken('');
  //   setUser(null);
  //   navigate('/');
  // }

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
    // loguot,
    generateImage,
    image,
    setImage,
    previousGeneratedImages,
    setPreviousGeneratedImages,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
