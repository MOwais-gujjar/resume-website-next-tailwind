import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsWhatsapp, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="container flex justify-between items-center mx-auto bg-slate-300 px-10">
        <div>
          <p>Copyright &copy; Muhammad Owais PIAIC Student </p>
        </div>
        <div className="flex justify-center item-center py-3 gap-5">
          <div className=" rounded-full shadow-lg shadow-gray-500 hover:scale-105 cursor-pointer duration-500 p-2">
            <FaFacebookF size={15} />
          </div>
          <div className=" rounded-full shadow-lg shadow-gray-500 hover:scale-105 cursor-pointer duration-500 p-2">
            <BsWhatsapp size={15} />
          </div>
          <div className=" rounded-full shadow-lg shadow-gray-500 hover:scale-105 cursor-pointer duration-500 p-2">
            <FaLinkedinIn size={15} />
          </div>
          <div className=" rounded-full shadow-lg shadow-gray-500 hover:scale-105 cursor-pointer duration-500 p-2">
            <BsGithub size={15} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
