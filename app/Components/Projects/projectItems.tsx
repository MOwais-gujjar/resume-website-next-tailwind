import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function ProjectItems({
  backgroundImage,
  title,
  imageURL,
}: any) {
  return (
    <>
      <div className="relative h-auto w-full shadow-xl shadow-gray-400 rounded-lg group hover:bg-gradient-to-b from-[#0099FF]/50 to-[#0099FF]/70 hover:h-0 hover:rounded-lg hover:pb-[75%]">
        <Image
          src={backgroundImage}
          alt="airbnb"
          width={600}
          height={600}
          className="group-hover:opacity-10 rounded-xl"
        />
        <div className=" hidden group-hover:block absolute top-0 left-0 bottom-0 right-0 translate-y-[20%] mx-10">
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-center font-body text-black/80 tracking-wider">
              {title}
            </h1>
            <h4 className="text-center font-body text-lg font-semibold text-black tracking-wider">
              fully Functional
            </h4>
            <Link href={imageURL}>
              <p className="bg-white text-[#0099FF] rounded-lg px-4 py-3 hover:scale-105 duration-500 text-center">
                Read More
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
