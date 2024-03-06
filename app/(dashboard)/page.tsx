import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white p-12 lg:px-40 lg:py-20">
      <div className="flex items-center justify-evenly">
        <div>
          <h2 className="text-lg lg:text-xl font-semibold text-[#225FAE]">
            HOWIES CONSTRUCTION
          </h2>
          <h1 className="text-2xl lg:text-3xl font-bold">
            Contact, Explore, or Learn <br /> about what we do.
          </h1>
          <h3 className="text-base lg:text-lg">
            Elevate your outdoors with our <br /> Landscaping{" "}
            <span className="font-bold text-[#225FAE] ">expertise</span>.
          </h3>
          <button className="py-2 text-lg">Contact</button>
        </div>
        <div className="hidden lg:block">
          <Image
            className="rounded-xl"
            src="/decking.jpg"
            alt="Decking Photo"
            width={464}
            height={464}
          />
        </div>
      </div>
    </main>
  );
}
