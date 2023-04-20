import React from "react";

export default function Button(prop: any) {
  return (
    <div>
      <button className="w-[144px] h-[52px] bg-gradient-to-l to-[#0099FF] from-[#0099FF]/50 rounded-md shadow-xl hover:scale-105 duration-300 text-white font-bold text-[15px]">
        {prop.text}
      </button>
    </div>
  );
}
