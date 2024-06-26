import Image from "next/image";
import wave from "@/public/waveBottom.webp";

const PageTitle = ({ image, title }) => {
  return (
    <div className="w-full relative ">
      <Image
        src={image}
        alt="background image"
        className="w-screen opacity-80 h-[23vh] md:h-auto object-cover animate-fade-right animate-once animate-delay-300"
      />
      <p className="flex text-justify items-center justify-center absolute top-0 font-bold text-2xl md:text-5xl text-white border-swim-yellow border-r-[20px] w-1/3 h-full bg-swim-blue-200/70">
        {title}
      </p>
      <Image
        src={wave}
        alt="wave bottom image"
        className="absolute -bottom-1 transform -scale-x-100 w-screen"
      />
    </div>
  );
};

export default PageTitle;
