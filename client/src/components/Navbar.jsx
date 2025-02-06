import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();

  const { user, setUser } = useContext(AppContext);

  return (
    <div className="flex items-center justify-between py-4">
      <Link to="/">
        <img src={assets.logo} alt="" className="w-28 sm:w-32 lg:w-40" />
      </Link>

      <div>
        {user ? (
          <div className="flex items-center gap-5=2 sm:gap-3 ">
            <button
              onClick={() => navigate("/buy-credit")}
              className="flex cursor-pointer items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-transform duration-700"
            >
              <img className="w-5" src={assets.creditStar} alt="" />
              <p className="text-xs sm:text-sm font-medium text-gray-600">
                Credit left : 50
              </p>
            </button>
            <p className="text-gray-600 max-sm:hidden pl-4">Hi, Rajitha</p>
            <div className="relative group">
              <img
                className="w-10 drop-shadow"
                src={assets.profileIcon}
                alt=""
              />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black runded pt-12">
                <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm">
                  <li className="py-1 px-2 cursor-pointer pr-10">Logout</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-5">
            <p
              onClick={() => navigate("/buy-credit")}
              className="cursor-pointer"
            >
              Pricing
            </p>
            <div className="rounded-full p-[2px] bg-gradient-to-r from-[#bc619b] via-red-500 to-blue-600 cursor-pointer hover:scale-105 transition-transform duration-700">
              <button className="bg-gray-950 cursor-pointer text-white px-7 py-2 sm:px-10 text-sm rounded-full">
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
