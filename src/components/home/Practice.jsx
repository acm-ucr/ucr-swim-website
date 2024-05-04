import Image from "next/image";
import practice from "@/public/home/practice.webp";
import waveBottom from "@/public/waveBottom.webp";

const Practice = () => {
  return (
    <div className="flex w-full bg-gradient-to-r from-swim-blue-100 to-swim-blue-300 text-sm md:text-2xl 2xl:text-3xl relative mb-[8%]">
      <Image
        src={practice}
        alt="practice"
        className="md:w-1/2 w-[55%] object-cover"
      />

      <div className="w-1/2 md:pt-[8%] md:px-[6%] pt-4 px-3 pb-7 md:pb-0 text-white">
        <p className="text-2xl md:text-6xl 2xl:text-8xl md:mb-5 mb-2 font-semibold">
          Practices
        </p>

        <div className="md:flex md:justify-between w-full">
          <p>Tuesday and Thursday </p>
          <p className=" text-swim-yellow font-bold md:mb-5">
            7:00 pm - 8:20 pm
          </p>
        </div>

        <div className="md:flex md:justify-between w-full">
          <p>Sunday </p>
          <p className="text-swim-yellow font-bold">6:00 pm - 7:20 pm</p>
        </div>
      </div>
      <Image
        src={waveBottom}
        alt="waveBottom"
        className="absolute w-screen -bottom-[10%]"
      />
    </div>
  );
};

export default Practice;
