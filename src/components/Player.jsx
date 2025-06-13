import React from "react";
import { assets } from "../assets/frontend-assets/assets";
import { songsData } from "../assets/frontend-assets/assets";
const Player = () => {
  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={songsData[0].image} />
        <div>
          <p>{songsData[0].name}</p>
          <p className="text-gray-400 text-sm">
            {songsData[0].desc.slice(0, 12)}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img className="w-4 cursor-pointer" src={assets.shuffle_icon} />
          <img className="w-4 cursor-pointer" src={assets.prev_icon} />
          <img className="w-4 cursor-pointer" src={assets.play_icon} />
          <img className="w-4 cursor-pointer" src={assets.next_icon} />
          <img className="w-4 cursor-pointer" src={assets.loop_icon} />
        </div>
      </div>
    </div>
  );
};

export default Player;
