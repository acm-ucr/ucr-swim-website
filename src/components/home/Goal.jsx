import Image from "next/image";
import image1 from "@/public/home/goal.webp";
import Link from "next/link";

const Goal = () => {
  return (
    <div className="mb-[2%] w-full flex">
      <div className="ml-[4%] justify-center flex flex-col gap-5">
        <p className="text-8xl font-normal text-swim-blue-300">Our Goal</p>
        <p className=" border-swim-yellow border-l-[10px] pl-[3%] text-2xl font-thin w-full leading-loose">
          Bring students together through the sport of swimming and compete in
          competitions. While also expanding our club members&apos;
          network/connections by competing against other Universities.
        </p>
        <Link
          className="text-2xl text-swim-blue-300 font-bold bg-swim-yellow p-[1%] w-fit"
          href=""
        >
          Constitution
        </Link>
      </div>
      <Image src={image1} className="w-full mr-[3%]" alt="Swim image" />
    </div>
  );
};

export default Goal;
