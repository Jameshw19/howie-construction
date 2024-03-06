import Image from "next/image";

interface ProjectProps {
  imageUrl: string;
}

const Project = ({ imageUrl }: ProjectProps) => {
  return (
    <div className="w-96 h-96 flex p-4">
      <Image
        className="rounded-2xl"
        src={imageUrl}
        alt="Project Image"
        width={500}
        height={500}
      />
    </div>
  );
};

export default Project;
