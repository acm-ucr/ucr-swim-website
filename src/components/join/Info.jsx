import InfoCard from "./InfoCard";
import Button from "../Button";

const Info = () => {
  return (
    <div className="w-screen flex justify-center items-center flex-col">
      <div className="flex flex-row justify-evenly">
        <div className="flex flex-col w-1/3">
          <p className="text-swim-yellow text-2xl">Lorem ipsum dolor sit</p>
          <p className="text-swim-blue-400 font-bold text-4xl leading-snug">
            How to keep up with information, competitions, and socials:
          </p>
        </div>
        <InfoCard
          text="Follow us on Instagram for general news"
          link="https://www.instagram.com/"
        />
      </div>
      <Button link="/join" text="Member Info Form" />
    </div>
  );
};

export default Info;
