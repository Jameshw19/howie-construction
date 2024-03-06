import Board from "./projects/project";

const Works = () => {
  return (
    <div className="p-12 lg:px-48 lg:py-20 relative bg-white">
      <div>
        <h1 className="text-3xl lg:text-4xl">Our Work</h1>
      </div>

      <div className="py-12">
        <Board />
      </div>
    </div>
  );
};

export default Works;
