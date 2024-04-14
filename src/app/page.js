import Landing from "@/components/home/Landing";
import Goal from "@/components/home/Goal";
import Practice from "@/components/home/Practice";
import SwimOutlet from "@/components/home/SwimOutlet";
import Connected from "@/components/home/Connected";
import Image from "next/image";
import divers from "@/public/home/divers.webp";
import wave from "@/public/waveTop.webp";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Landing />
      <Goal />
      <Practice />
      <SwimOutlet />
      <div className="relative mb-[10%]">
        <Image
          src={divers}
          alt="divers"
          className="w-screen absolute top-[50%]"
        />
        <Image
          src={wave}
          alt="top wave"
          className="w-screen transform -scale-x-100"
        />
      </div>

      <Connected />
    </div>
  );
};

export default Home;
