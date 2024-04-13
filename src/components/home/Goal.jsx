import Image from "next/image";
import image1 from "@/public/home/goal.webp";
import Link from "next/link";
const Goal = () => {
  return (
    <div className="w-full flex pb-[5%]">
      <div className="ml-[8%] justify-center flex flex-col gap-5">
        <p className=" md:text-7xl 2xl:text-8xl ml-10 text-swim-blue-400">
          Our Goal
        </p>
        <p className=" my-2 border-swim-yellow border-l-[10px] pl-[3%] md:text-xl 2xl:text-2xl font-light w-full leading-loose md:leading-loose 2xl:leading-loose">
          Bring students together through the sport of swimming and compete in
          competitions. While also expanding our club members&apos;
          network/connections by competing against other Universities.
        </p>
        <Link
          className="md:text-xl 2xl:text-2xl ml-10 px-3 rounded-sm text-swim-blue-400 font-bold bg-swim-yellow p-[1%] w-fit hover:opacity-70 ease-in-out transition-opacity"
          href=""
          target="_blank"
        >
          Constitution
        </Link>
      </div>
      <Image src={image1} className=" w-2/5 mr-[5%]" alt="Swim image" />
    </div>
  );
};

export default Goal;
