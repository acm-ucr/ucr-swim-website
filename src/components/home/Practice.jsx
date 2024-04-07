import Image from "next/image";
import practice from "@/public/home/practice.webp";
import waveBottom from "@/public/waveBottom.webp";

const Practice = () => {
  return (
    <div className="h-[550px] bg-gradient-to-r from-swim-blue-200 to-swim-blue-300">
      <div className="container grid grid-cols-2 gap-20">
        <Image src={practice} alt="practice" className="" />
        <div className="mt-24 font-urbanist text-white ">
          <div className="text-8xl mb-10 font-semibold">Practices</div>
          <div className="container grid grid-cols-2 grid-rows-2 text-3xl">
            <div className="mb-3">Tuesday and Thursday </div>
            <div className=" text-swim-yellow font-bold">7:00 pm - 8:20 pm</div>
            <div>Sunday </div>
            <div className="text-swim-yellow font-bold">6:00 pm - 7:20 pm</div>
          </div>
        </div>
      </div>
      <Image
        src={waveBottom}
        alt="waveBottom"
        className="relative w-screen h-36 bottom-20"
      />
    </div>
  );
};

export default Practice;
