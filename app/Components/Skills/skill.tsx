import Image from "next/image";
import React from "react";
import html1 from "../../assets/skills/html.png";
import css1 from "../../assets/skills/css.png";
import javascript1 from "../../assets/skills/javascript.png";
import react1 from "../../assets/skills/react.png";
import next1 from "../../assets/skills/next.png";
import tailwind1 from "../../assets/skills/tailwind.png";
import firebase1 from "../../assets/skills/firebase.png";
import sql1 from "../../assets/skills/sql.png";
import node1 from "../../assets/skills/node.png";

const Skill = () => {
  return (
    <>
      <div className="h-screen md:mt-0 mt-40">
        <div className="mx-auto my-10 text-center ">
          <h1>Skills</h1>
          <h2 className="max-w-3xl mx-auto py-4 font-light tracking-widest">
            CMS and React skills are crucial for next developers to build
            interactive web applications with effective content management.
          </h2>
        </div>
        {/* cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 md:gap-14 gap-5 max-w-3xl mx-5 md:mx-auto">
          {/* HTML */}
          <div className="flex justify-center items-center rounded-lg shadow-lg hover:scale-110 cursor-pointer duration-500 py-4 text-center">
            <div className="py-auto">
              <Image src={html1} alt="html" width={50} height={50} />
            </div>
            <h2 className="font-normal md:ml-10 ml-2 my-auto">HTML</h2>
          </div>
          {/* CSS */}
          <div className="flex justify-center items-center rounded-lg shadow-lg hover:scale-110 cursor-pointer duration-500 py-4 text-center">
            <div className="py-auto">
              <Image src={css1} alt="css" width={50} height={50} />
            </div>
            <h2 className="font-normal my-auto md:ml-10 ml-2">CSS</h2>
          </div>
          {/* Javascript */}
          <div className="flex justify-center items-center rounded-lg shadow-lg hover:scale-110 cursor-pointer duration-500 py-4 text-center">
            <div className="py-auto">
              <Image src={javascript1} alt="js" width={50} height={50} />
            </div>
            <h2 className="font-normal my-auto md:ml-10 ml-2">Javascript</h2>
          </div>
          {/* React */}
          <div className="flex justify-center items-center rounded-lg shadow-lg hover:scale-110 cursor-pointer duration-500 py-4 text-center">
            <div className="py-auto">
              <Image src={react1} alt="react" width={50} height={50} />
            </div>
            <h2 className="font-normal my-auto md:ml-10 ml-2">REACT</h2>
          </div>
          {/* Tailwind */}
          <div className="flex justify-center items-center rounded-lg shadow-lg hover:scale-110 cursor-pointer duration-500 py-4 text-center">
            <div className="py-auto">
              <Image src={tailwind1} alt="tailwind" width={50} height={50} />
            </div>
            <h2 className="font-normal my-auto md:ml-10 ml-2">Tailwind</h2>
          </div>
          {/* Next */}
          <div className="flex justify-center items-center rounded-lg shadow-lg hover:scale-110 cursor-pointer duration-500 py-4 text-center">
            <div className="py-auto">
              <Image src={next1} alt="next" width={50} height={50} />
            </div>
            <h2 className="font-normal my-auto md:ml-10 ml-2">Next</h2>
          </div>
          {/* Node */}
          <div className="flex justify-center items-center rounded-lg shadow-lg hover:scale-110 cursor-pointer duration-500 py-4 text-center">
            <div className="py-auto">
              <Image src={node1} alt="node" width={50} height={50} />
            </div>
            <h2 className="font-normal my-auto md:ml-10 ml-2">NODE</h2>
          </div>
          {/* Firebase */}
          <div className="flex justify-center items-center rounded-lg shadow-lg hover:scale-110 cursor-pointer duration-500 py-4 text-center">
            <div className="py-auto">
              <Image src={firebase1} alt="firebase" width={50} height={50} />
            </div>
            <h2 className="font-normal my-auto md:ml-10 ml-2">Firebase</h2>
          </div>
          {/* SQL */}
          <div className="flex justify-center items-center rounded-lg shadow-lg hover:scale-110 cursor-pointer duration-500 py-4 text-center">
            <div className="py-auto">
              <Image src={sql1} alt="sql" width={50} height={50} />
            </div>
            <h2 className="font-normal my-auto md:ml-10 ml-2">SQL</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
