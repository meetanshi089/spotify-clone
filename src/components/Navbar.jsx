import React from "react";
import { assets } from "../assets/frontend-assets/assets";

const Navbar = () => {
  return (
    <div className="w-full font-semibold">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            className="w-8 bg-black p-1 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
          />
          <img
            className="w-8 bg-black p-1 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl cursor-pointer">
            Explore premium
          </p>
          <p className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer">
            Install App
          </p>
          <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center cursor-pointer">
            M
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">
          All
        </p>
        <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer text-white">
          Podcasts
        </p>
      </div>
    </div>
  );
};

export default Navbar;
