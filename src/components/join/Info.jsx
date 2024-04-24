import InfoCard from "./InfoCard";
import Button from "../Button";
import image2 from "@/public/join/infocard.webp";
import image1 from "@/public/join/infocard2.webp";

const Info = () => {
  return (
    <div className="w-screen flex justify-center items-center flex-col mt-[10%]">
      <div className="md:flex w-3/4 justify-between mb-[4%]">
        <div className="flex flex-col md:w-2/5">
          <p className="text-swim-yellow text-xl md:text-2xl">
            Lorem ipsum dolor sit
          </p>
          <p className="text-swim-blue-400 font-bold text-2xl md:text-4xl leading-snug">
            How to keep up with information, competitions, and socials:
          </p>
        </div>
        <div className="flex md:flex-row flex-col">
          <InfoCard
            text="Follow our Instagram for general news"
            link="https://discord.gg/3D25jBTyzk"
            image={image1}
          />
          <InfoCard
            text="Join our Discord for more indepth details about competitions"
            link="https://www.instagram.com/ucrclubswim/"
            image={image2}
          />
        </div>
      </div>
      <Button link="/join" text="Member Info Form" />
    </div>
  );
};

export default Info;
