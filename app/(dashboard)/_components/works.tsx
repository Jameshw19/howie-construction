import Project from "./projects/project";

const Works = () => {
  return (
    <div>
      <div className="p-10 flex-col items-center flex relative ">
        <div className="underline underline-offset-[16px] decoration-[#225FAE]">
          <h1 className="text-3xl lg:text-4xl">Our Work</h1>
        </div>
        <div className="py-10 gap-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          <Project imageUrl="/decking.jpg" />
          <Project imageUrl="/decking2.jpg" />
          <Project imageUrl="/decking3.jpg" />
          <Project imageUrl="/decking4.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Works;
