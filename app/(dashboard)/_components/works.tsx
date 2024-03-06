import Project from "./projects/project";

const Works = () => {
  return (
    <div className="p-12 lg:px-48 lg:py-20 relative">
      <div className="flex items-center flex-col underline underline-offset-[16px] decoration-[#225FAE]">
        <h1 className="text-3xl lg:text-4xl">Our Work</h1>
      </div>

      <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-4">
          <Project imageUrl="/decking.jpg" />
          <Project imageUrl="/decking2.jpg" />
          <Project imageUrl="/decking3.jpg" />
          <Project imageUrl="/decking4.jpg" />
        </div>
    </div>
  );
};

export default Works;
