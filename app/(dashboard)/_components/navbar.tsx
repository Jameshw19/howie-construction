import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-10 px-20 bg-green-500 border-b-2 border-[#225FAE]">
      <div className="flex items-center space-x-4">
        <div>
          <Image src="/logo.svg" alt="Logo" height={200} width={200} />
          <div className="text-lg">0129255402</div>
        </div>
      </div>
      <ul className="flex items-center space-x-4">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
