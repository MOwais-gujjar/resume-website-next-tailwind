"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { CiDark, CiLight } from "react-icons/ci";
import Button from "../layout/Button";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [darkLight, setDarkLight] = useState(false);

  const nav = [
    { name: "Home", ulLink: "/" },
    { name: "Projects", ulLink: "/" },
    { name: "Skills", ulLink: "/" },
    { name: "Certificates", ulLink: "/" },
  ];
  return (
    <>
      <div className="flex justify-between sticky top-0 items-center md:px-5 py-2">
        {/* Toggle Effect */}
        <div
          className="md:hidden ml-5 hover:scale-105"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? (
            <AiOutlineClose className="text-white bg-black" />
          ) : (
            <AiOutlineMenu className="text-black bg-white shadow-emerald-200" />
          )}
        </div>
        <ul
          className={`flex flex-col items-start absolute z-[-1] bg-[#0099FF]/50 w-full mr-4 p-10  gap-5 font-semibold text-white
           md:static md:flex-row md:items-center md:px-2 md:w-auto  md:z-auto md:mr-0 md:gap-10 md:bg-inherit md:p-3 md:text-black 
          ${toggle ? "top-20" : "top-[-490px]"}`}
        >
          {nav.map((m) => (
            <li
              key={m.ulLink}
              className=" cursor-pointer hover:text-black/70 scale-105 duration-300 md:hover:text-[#0099FF] "
            >
              {m.name}
            </li>
          ))}
        </ul>

        <div>
          <Image
            src={logo}
            alt={"Muhammad_Awais"}
            className=" rounded-full w-20 h-20 cursor-pointer"
          />
        </div>
        <div className="flex  gap-5 items-center">
          <div
            onClick={() => {
              setDarkLight(!darkLight);
            }}
          >
            {darkLight ? (
              <CiDark className="w-8 h-8 cursor-pointer hover:scale-105 hover:duration-300 " />
            ) : (
              <CiLight className="w-8 h-8 cursor-pointer hover:scale-105 hover:duration-300 " />
            )}
          </div>
          <div className="md:flex hidden">
            <Button text={"Resume"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
