import React from "react";

export default function Button(prop: any) {
  return (
    <div>
      <button className="w-[144px] h-[52px] uppercase bg-gradient-to-l to-[#0099FF]/90 from-[#0099FF]/50 rounded-md shadow-xl hover:scale-105 duration-300 text-white font-bold text-[15px]">
        {prop.text}
      </button>
    </div>
  );
}
