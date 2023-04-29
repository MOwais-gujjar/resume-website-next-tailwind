import Image from "next/image";
import React from "react";
import heroSection from "../../assets/heroSection.png";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/Ti";
import { BsWhatsapp, BsGithub } from "react-icons/bs";
import Button from "../layout/Button";
const Section = () => {
  return (
    <>
      <div className="h-screen">
        <div className=" max-w-[1240px] flex flex-col md:flex-row">
          <div className="flex-1 mx-auto py-10 md:my-8">
            <Image
              src={heroSection}
              alt="hero Image"
              className="md:w-[477px] md:h-[492px] w-[300px] h-[308px] object-cover"
            />
          </div>
          <div className=" flex-1 md:max-w-xl max-w-xs text-center py-0 md:py-[100px] md:my-10 mx-auto ">
            <h1 className=" font-montserrat py-2">Hi! I’m Muhammad Awais</h1>
            <h2>Web developer & Designer</h2>
            <p className=" max-w-md mx-auto py-3">
              My goal to provide High-quality and cheap price to my clients. I'm
              always ready to handle different challenge's and I'm achieving the
              different projects
            </p>
            {/* Links */}
            <div className="flex justify-center item center py-3 gap-5">
              <div className=" rounded-full shadow-lg shadow-gray-500 hover:scale-105 cursor-pointer duration-500 p-4">
                <TiSocialFacebook size={20} />
              </div>
              <div className=" rounded-full shadow-lg shadow-gray-500 hover:scale-105 cursor-pointer duration-500 p-4">
                <BsWhatsapp size={20} />
              </div>
              <div className=" rounded-full shadow-lg shadow-gray-500 hover:scale-105 cursor-pointer duration-500 p-4">
                <TiSocialLinkedin size={20} />
              </div>
              <div className=" rounded-full shadow-lg shadow-gray-500 hover:scale-105 cursor-pointer duration-500 p-4">
                <BsGithub size={20} />
              </div>
            </div>
            <div className="py-4">
              <Button text={"Read more"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
