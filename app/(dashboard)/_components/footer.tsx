import { FaMapPin } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-[#225FAE] h-full text-white p-10">
      <div className="flex items-center justify-evenly">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-2xl">Contact</h1>
          <div className="flex items-center justify-center">
            <FaMapPin className="h-5 w-5" />
            <h1>Ayr, Scotland</h1>
          </div>
          <div className="flex items-center justify-center">
            <FaPhone className="h-5 w-5" />
            <h1>012991290</h1>
          </div>
          <div className="flex items-center justify-center">
            <IoMdMail className="h-5 w-5" />
            <h1>Kris@kris.com</h1>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-2xl">Locations</h1>
          <h1>Ayrshire</h1>
          <h1>Glasgow</h1>
          <h1>Renfrewshire</h1>
        </div>
      </div>
      <div className="flex items-center justify-center mt-8 text-base">
        Copyright &copy; 2024 Howies Construction
      </div>
    </div>
  );
};

export default Footer;
