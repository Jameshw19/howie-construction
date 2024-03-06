import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white p-8 lg:px-48 lg:py-20">
      <div className="flex items-center justify-evenly">
        <div>
          <h2 className="text-lg lg:text-xl font-semibold text-[#225FAE]">
            HOWIES CONSTRUCTION
          </h2>
          <h1 className="text-4xl lg:text-5xl font-bold">
            Contact, Explore, or Learn <br /> about what we do.
          </h1>
          <h3 className="text-base lg:text-lg">
            Elevate your outdoors with our <br /> Landscaping{" "}
            <span className="font-bold text-[#225FAE] ">expertise</span>.
          </h3>
          <div className="py-4">
            <Button
              className="text-base bg-[#225FAE] rounded-md"
              variant="default"
              size="default"
            >
              <span className="px-4">Contact</span>
            </Button>
          </div>
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
