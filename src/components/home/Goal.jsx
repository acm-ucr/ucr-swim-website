"use client";
import useView from "../useView";
import Image from "next/image";
import image1 from "@/public/home/goal.png";
import Link from "next/link";

const Goal = () => {
  const [inView, ref] = useView();
  return (
    <div className="w-full flex md:pb-[5%] pb-8">
      <div
        ref={ref}
        className="ml-[8%] mr-[8%] md:mr-0 md:ml-[8%] justify-center flex flex-col gap-3 md:gap-5"
      >
        <p
          className={`${
            inView && "animate-fade-right animate-once"
          } text-3xl md:text-7xl 2xl:text-8xl md:ml-10 text-swim-blue-400`}
        >
          Our Goal
        </p>
        <p
          className={`${
            inView && "animate-fade-right animate-once animate-duration-300"
          }
          md:my-2 border-swim-yellow border-l-[5px] md:border-l-[10px] pl-[3%] text-xs md:text-xl 2xl:text-2xl font-light w-full leading-loose md:leading-loose 2xl:leading-loose`}
        >
          Bring students together through the sport of swimming and compete in
          competitions. While also expanding our club members&apos;
          network/connections by competing against other Universities.
        </p>
        <Link
          className="text-sm md:text-xl 2xl:text-2xl ml-0 md:ml-10 md:px-3 px-1 rounded-sm text-swim-blue-400 font-bold bg-swim-yellow p-[1%] w-fit hover:opacity-70 ease-in-out transition-opacity"
          href="https://docs.google.com/document/d/1mQQaOBaAhcTjqM1Rc8hUjUvHqpX8P1nK_hGxzoBDXG4/edit?usp=sharing"
          target="_blank"
        >
          Constitution
        </Link>
      </div>
      <Image
        src={image1}
        className={`${inView && "animate-fade-up"}
        hidden lg:block mr-[5%]`}
        width={500}
        height={500}
        alt="Swim image"
      />
    </div>
  );
};

export default Goal;
