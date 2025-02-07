import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home";
import Result from "./pages/Result";
import BuyCredit from "./pages/BuyCredit";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles.css";
import Login from "./components/Login";
import SignUp from "./components/Signup";

const App = () => {
  return (
    // <div className="px-4  sm:px-10 md:-14 lg:px-28 min-h-screen bg-gradient-to-b from-gray-950 to-purple-950">
    <div className="px-4  sm:px-10 md:-14 lg:px-28 min-h-screen gradient-bg text-white"> 
    {/* from-teal-50 to-orange-50  */}
    <ToastContainer position="bottom-right"  />
      <Navbar />
      <Login />
      <SignUp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy-credit" element={<BuyCredit />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/sign-up" element={<SignUp/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
