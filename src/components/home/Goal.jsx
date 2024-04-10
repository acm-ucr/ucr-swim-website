import Image from "next/image";
import image1 from "@/public/home/goal.webp";
import Link from "next/link";

const Goal = () => {
  return (
    <div className="mb-[2%] w-full flex">
      <div className="ml-[4%]">
        <p className="pt-[9%] pl-[5%] p-[5%] text-8xl font-normal text-swim-blue-300">
          Our Goal
        </p>
        <p className=" border-swim-yellow border-l-[10px] pl-[3%] text-2xl font-thin w-full leading-[230%]">
          Bring students together through the sport of swimming and compete in
          competitions. While also expanding our club members&apos;
          network/connections by competing against other Universities.
        </p>
        <div className="pl-[7%] pt-[5%]">
          <Link
            className="text-2xl text-swim-blue-300 font-bold bg-swim-yellow border-swim-yellow border-[10px]"
            href=""
          >
            Constitution
          </Link>
        </div>
      </div>
      <Image src={image1} className="w-full mr-[3%]" alt="Swim image" />
    </div>
  );
};

export default Goal;
