import Image from "next/image";
import wave from "@/public/waveBottom.webp";

const PageTitle = ({ image, title }) => {
  return (
    <div className="w-full relative mt-12 md:mt-0 ">
      <Image
        src={image}
        alt="background image"
        className="w-screen h-40 md:h-auto opacity-80"
      />
      <p className="flex items-center justify-center absolute top-0 font-bold text-2xl md:text-5xl text-white border-swim-yellow border-r-[20px] w-1/3 h-full bg-swim-blue-200/70">
        {title}
      </p>
      <Image
        src={wave}
        alt="wave bottom image"
        className="absolute bottom-0 transform -scale-x-100 w-screen md:w-auto "
      />
    </div>
  );
};

export default PageTitle;
