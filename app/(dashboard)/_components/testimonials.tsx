import Testimonial from "./testimonials/testimonial";

const Testimonials = () => {
  return (
    <div className="p-10 flex-col items-center flex relative ">
      <div className="underline underline-offset-[16px] decoration-[#225FAE]">
        <h1 className="text-3xl lg:text-4xl">
          What our <span className="text-[#225FAE] font-bold">clients</span> say
        </h1>
      </div>
      <div className="p-10 flex items-center justify-evenly w-full flex-row">
        <Testimonial
          imageUrl="/client.webp"
          name="John Doe"
          review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it to make a type
            specimen book."
        />
        <Testimonial
          imageUrl="/client.webp"
          name="John Doe"
          review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it to make a type
            specimen book."
        />
        <Testimonial
          imageUrl="/client.webp"
          name="John Doe"
          review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it to make a type
            specimen book."
        />
      </div>
    </div>
  );
};

export default Testimonials;
