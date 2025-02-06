import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { motion, AnimatePresence } from "motion/react";

const SignUp = () => {
  const navigate = useNavigate();

  const { isOpenSignup, setIsOpenSignup, setIsOpenLogin } =
    useContext(AppContext);

  const handleClickLogin = () => {
    setIsOpenSignup(false);
    setIsOpenLogin(true);
  };

  return (
    <AnimatePresence>
      {isOpenSignup && (
        <motion.div
        key="login-modal"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
          className="fixed inset-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center"
        >
          <div className="rounded-lg p-[2px] bg-gradient-to-r from-[#bc619b] via-red-500 to-blue-600">
            <form className="relative flex flex-col items-center bg-black p-10 rounded-lg shadow-lg">
              <img
                onClick={() => setIsOpenSignup(false)}
                className="absolute top-5 right-5 cursor-pointer"
                src={assets.cross_icon}
                alt=""
              />
              <img className="w-44" src={assets.logo} alt="" />
              <h1 className="text-center mt-8 text-3xl text-netral-600">
                Signup
              </h1>
              <p className="text-sm mt-3">
                Wellcome! Please signup in to continue
              </p>
              <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-10">
                <img src={assets.email_icon} alt="" />
                <input
                  className="focus:outline-none"
                  type="name"
                  placeholder="Name"
                />
              </div>
              <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
                <img src={assets.email_icon} alt="" />
                <input
                  className="focus:outline-none"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
                <img src={assets.lock_icon} alt="" />
                <input
                  className="focus:outline-none"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="flex justify-start w-full mt-3">
                <span className="text-sm text-gray-300 cursor-pointer hover:text-[#bc619b] transition-colors duration-300">
                  Forgot Password?
                </span>
              </div>

              <button className="mt-8 w-full bg-gradient-to-r from-[#bc619b] via-red-500 to-blue-600 text-white cursor-pointer hover:scale-105 transition-all duration-300 px-7 py-2 rounded-full">
                Create Account
              </button>
              <div>
                <p className="text-sm mt-5">
                  Don't have an account?{" "}
                  <span
                    onClick={() => handleClickLogin()}
                    className="text-[#bc619b] cursor-pointer"
                  >
                    Login
                  </span>
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SignUp;
