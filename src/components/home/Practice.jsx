import Image from "next/image";
import practice from "@/public/home/practice.webp";
import waveBottom from "@/public/waveBottom.webp";

const Practice = () => {
  return (
    <div className="flex w-full bg-gradient-to-r from-swim-blue-100 to-swim-blue-300 text-3xl relative">
      <Image src={practice} alt="practice" className="w-1/2" />

      <div className="w-1/2 pt-[8%] px-[6%] text-white">
        <p className="text-8xl mb-5 font-semibold">Practices</p>

        <div className="flex justify-between w-full">
          <p>Tuesday and Thursday </p>
          <p className=" text-swim-yellow font-bold mb-5">7:00 pm - 8:20 pm</p>
        </div>

        <div className="flex justify-between w-full">
          <p>Sunday </p>
          <p className="text-swim-yellow font-bold">6:00 pm - 7:20 pm</p>
        </div>
      </div>
      <Image
        src={waveBottom}
        alt="waveBottom"
        className="absolute w-screen -bottom-14"
      />
    </div>
  );
};

export default Practice;
