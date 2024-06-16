import Image from "next/image";
import image1 from "@/public/home/landing.webp";
import image2 from "@/public/waveBottom.webp";
import Button from "../Button";

const Landing = () => {
  return (
    <div className="w-full relative mb-[3%] animate-fade-right">
      <Image
        src={image1}
        alt="Background image 1"
        className="md:w-screen h-[30vh] md:h-auto"
      />
      <div className="flex justify-center flex-col w-1/2 h-full bg-swim-blue-200/70 top-0 absolute pl-[5%] gap-y-0.2 md:gap-y-0">
        <p className="font-bold text-white text-xl md:text-6xl mb-4">
          UCR Club Swim
        </p>
        <p className="font-semibold text-white text-xs md:text-2xl">
          Uniting swimmers together here at UC Riverside and competing in
          competitions.
        </p>
        <Button link="/join" text="Join" color="text-swim-blue-400" />
      </div>

      <Image
        src={image2}
        alt="Background image 2"
        className="w-screen -bottom-1 absolute transform -scale-x-100"
      />
    </div>
  );
};

export default Landing;
