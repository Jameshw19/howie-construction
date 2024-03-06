import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-10 px-40 border-b-2 bg-white border-[#225FAE]">
      <div className="flex items-center space-x-4">
        <div className="flex items-center flex-col">
          <Image src="/logo.svg" alt="Logo" height={200} width={200} />
          <div className="text-xl p-2">0129255402</div>
        </div>
      </div>
      <ul className="flex items-center space-x-10">
        <li className="relative group">
          Home
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent transition-all group-hover:bg-[#225FAE]"></div>
        </li>
        <li className="relative group">
          About
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent transition-all group-hover:bg-[#225FAE]"></div>
        </li>
        <li className="relative group">
          Contact
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent transition-all group-hover:bg-[#225FAE]"></div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
