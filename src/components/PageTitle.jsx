import Image from "next/image";
import wave from "@/public/waveBottom.webp";

const PageTitle = ({ image, title }) => {
  return (
    <div className="w-full relative">
      <Image
        src={image}
        alt="background image"
        className="w-screen opacity-80"
      />
      <p className="absolute top-[0%] pl-[10%] font-bold text-5xl text-white border-swim-yellow border-r-[20px] pr-[10%] py-[15%] bg-swim-blue-200/70">
        {title}
      </p>
      <Image
        src={wave}
        alt="wave bottom image"
        className="absolute top-[80%] transform -scale-x-100 w-screen"
      />
    </div>
  );
};

export default PageTitle;
