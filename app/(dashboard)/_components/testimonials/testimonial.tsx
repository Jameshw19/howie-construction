import Image from "next/image";

interface TestimonialProps {
  imageUrl: string;
  name: string;
  review: string;
}

const Testimonial = ({ imageUrl, name, review }: TestimonialProps) => {
  return (
    <div className="flex items-center justify-center flex-col w-80 border rounded-3xl py-6 border-slate-500">
      <div className="w-16 h-w-16 py-2">
        <Image
          className="rounded-3xl"
          src={imageUrl}
          alt="Client"
          width={100}
          height={100}
        />
      </div>
      <h1 className="text-2xl">{name}</h1>
      <div className="flex items-center justify-center px-4 ">
        <h2>{review}</h2>
      </div>
    </div>
  );
};

export default Testimonial;
