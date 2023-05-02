"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Button from "../layout/Button";
const Navbar = (prop: any) => {
  const [toggle, setToggle] = useState(false);
  const nav = [
    { name: "Home", ulLink: "/" },
    { name: "Projects", ulLink: "/" },
    { name: "Skills", ulLink: "/" },
    { name: "Certificates", ulLink: "/" },
  ];
  return (
    <>
      <div className={`flex justify-between items-center py-2`}>
        <Image
          src={logo}
          alt={"Muhammad_Awais"}
          width={100}
          height={100}
          className=" ml-3 rounded-full shadow-lg cursor-pointer"
        />
        {/* Toggle Effect */}
        <div
          className="md:hidden mr-3 hover:scale-105"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? (
            <div className="shadow-lg p-2 rounded-full">
              <AiOutlineClose />
            </div>
          ) : (
            <div className=" shadow-lg p-2 rounded-full">
              <AiOutlineMenu />
            </div>
          )}
        </div>
        <ul
          className={`flex flex-col items-start absolute z-[-1] bg-white/60 w-full mr-4 p-20 tracking-wide ease-in duration-105 mt-5 gap-5 font-semibold
           md:static md:flex-row md:ml-auto md:items-center uppercase md:mr-[60px] md:w-auto md:z-auto md:gap-10 md:mb-1 md:p-0
          ${toggle ? "top-[95px]" : "top-[-490px]"}`}
        >
          {nav.map((m) => (
            <li
              key={m.ulLink}
              className=" cursor-pointer hover:border-b-4 hover:rounded-full border-[#0099FF] ease-in duration-300 "
            >
              {m.name}
            </li>
          ))}
        </ul>

        <div className="md:flex hidden mr-3">
          <Button text={"Resume"} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
