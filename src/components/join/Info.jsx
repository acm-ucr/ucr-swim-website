"use client";
import InfoCard from "./InfoCard";
import Button from "../Button";
import image2 from "@/public/join/infocard.webp";
import image1 from "@/public/join/infocard2.webp";
import useView from "@/components/useView.jsx";

const Info = () => {
  const [inView, ref] = useView();
  return (
    <div
      ref={ref}
      className="w-screen flex justify-center items-center flex-col mt-[10%]"
    >
      <div className="md:flex w-3/4 justify-between mb-[4%]">
        <div className="flex flex-col md:w-2/5">
          <p
            className={`${
              inView && "animate-fade-right animate-duration-[800ms]"
            } text-swim-yellow text-lg md:text-2xl`}
          >
            Get Involved
          </p>
          <p
            className={`${
              inView &&
              "animate-fade-right animate-duration-[800ms] animate-delay-200"
            } text-swim-blue-400 font-bold text-xl md:text-4xl leading-snug`}
          >
            How to keep up with information, competitions, and socials:
          </p>
        </div>
        <div
          className={`${
            inView &&
            "animate-fade-down animate-duration-[800ms] animate-delay-400"
          } flex`}
        >
          <InfoCard
            text="Follow our Instagram for general news"
            link="https://www.instagram.com/ucrclubswim/"
            image={image1}
          />
          <InfoCard
            text="Join our Discord for more indepth details about competitions"
            link="https://discord.gg/3D25jBTyzk"
            image={image2}
          />
        </div>
      </div>
      <div
        className={`${
          inView &&
          "animate-fade-up animate-duration-[800ms] animate-ease-in-out"
        }`}
      >
        <Button
          link="https://forms.gle/yjKzaGJhLXYx9nYk6"
          text="Member Info Form"
        />
      </div>
    </div>
  );
};

export default Info;
