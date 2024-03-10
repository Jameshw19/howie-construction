import { Button } from "@/components/ui/button";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center justify-between p-5 lg:px-40 border-b-[1px] bg-white border-[#225FAE] ">
        <div className="flex items-center space-x-4">
          <div className="flex items-center flex-col">
            <Image src="/logo.svg" alt="Logo" height={134} width={134} />
            <div className="text-lg p-2">0129255402</div>
          </div>
        </div>
        <ul className="flex items-center space-x-4 lg:space-x-10">
          <li className="relative group">
            Home
            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent transition-all group-hover:bg-[#225FAE]"></div>
          </li>
          <li className="relative group">
            About
            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent transition-all group-hover:bg-[#225FAE]"></div>
          </li>
          <Button
            className="relative group bg-[#225FAE]"
            size="default"
            variant="default"
          >
            Contact
            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent transition-all"></div>
          </Button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
