import Testimonial from "./testimonials/testimonial";

const Testimonials = () => {
  return (
    <div className="p-10 flex-col items-center flex relative ">
      <div className="underline underline-offset-[16px] decoration-[#225FAE]">
        <h1 className="text-3xl lg:text-4xl">
          What our <span className="text-[#225FAE] font-bold">clients</span> say
        </h1>
      </div>
      <div className="py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-10">
        <Testimonial
          imageUrl="/client.webp"
          name="John Doe"
          review="Very friendly and hard working people and did a 10/10 job, will be contacting again for more jobs in the future"
        />
        <Testimonial
          imageUrl="/client.webp"
          name="John Doe"
          review="Very friendly and hard working people and did a 10/10 job, will be contacting again for more jobs in the future"
        />
        <Testimonial
          imageUrl="/client.webp"
          name="John Doe"
          review="Very friendly and hard working people and did a 10/10 job, will be contacting again for more jobs in the future"
        />
      </div>
    </div>
  );
};

export default Testimonials;
