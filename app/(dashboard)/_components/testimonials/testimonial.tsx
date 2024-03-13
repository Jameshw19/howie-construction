import Image from "next/image";

interface TestimonialProps {
  imageUrl: string;
  name: string;
  review: string;
}

const Testimonial = ({ imageUrl, name, review }: TestimonialProps) => {
  return (
    <div className="flex items-center flex-col justify-center border rounded-3xl p-2 lg:w-[300px] lg:h-[240px]  border-slate-500">
      <div className="w-12 h-12">
        <Image
          className="rounded-3xl"
          src={imageUrl}
          alt="Client"
          width={100}
          height={100}
        />
      </div>
      <h1 className="text-xl">{name}</h1>
      <h2 className="text-base w-48 text-center">{review}</h2>
    </div>
  );
};

export default Testimonial;
