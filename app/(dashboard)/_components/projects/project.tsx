import Image from "next/image";

interface ProjectProps {
  imageUrl: string;
}

const Project = ({ imageUrl }: ProjectProps) => {
  return (
    <div className="flex p-2 ">
      <Image
        className="rounded-2xl object-cover"
        src={imageUrl}
        alt="Project Image"
        width={334}
        height={334}
      />
    </div>
  );
};

export default Project;
