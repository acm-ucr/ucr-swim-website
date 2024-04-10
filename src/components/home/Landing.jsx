import Image from "next/image";
import image1 from "@/public/home/landing.webp";
import image2 from "@/public/waveBottom.webp";
import Button from "../Button";

const Landing = () => {
  return (
    <div className="w-screen relative -translate-y-5">
      <Image src={image1} alt="Background image 1" className="w-screen" />
      <div className="flex justify-center flex-col w-1/2 h-full bg-swim-blue-200/60 top-0 absolute pl-12">
        <p className="font-bold text-white text-6xl font-urbanist mb-4">
          UCR Club Swim
        </p>
        <p className="font-semibold text-white text-3xl font-urbanist ml-10 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </p>
        <Button link="/join" text="Join" />
      </div>
      <div className="w-screen h-full bg-swim-blue-200/15 top-0 absolute" />
      <Image
        src={image2}
        alt="Background image 2"
        className="w-screen top-[85%] absolute"
      />
    </div>
  );
};

export default Landing;
