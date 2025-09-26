"use client";
import Image from "next/image";
import practice from "@/public/home/practice.webp";
import waveBottom from "@/public/waveBottom.webp";
import useView from "@/components/useView";

const Practice = () => {
  const [inView, ref] = useView();

  return (
    <div
      ref={ref}
      className="flex w-full bg-gradient-to-r from-swim-blue-100 to-swim-blue-300 text-sm md:text-2xl 2xl:text-3xl relative mb-[8%]"
    >
      <Image
        src={practice}
        alt="practice"
        className="md:w-1/2 w-[55%] object-cover"
      />

      <div
        className={`${
          inView && "animate-fade-up animate-delay-150"
        } w-1/2 md:pt-[8%] md:px-[6%] pt-4 px-3 pb-7 md:pb-0 text-white`}
      >
        <p className="text-2xl md:text-6xl 2xl:text-8xl md:mb-5 mb-2 font-semibold">
          Practices
        </p>

        <div className="md:flex md:justify-between w-full">
          <p>Mondays, Wednesdays, & Thursdays </p>
          <p className=" text-swim-yellow font-bold md:mb-5">6:30pm - 8:00pm</p>
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
