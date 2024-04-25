import { iconLinks } from "../../data/iconLinks";
import JoinIcon from "./JoinIcon";
import Button from "../Button";

const Connected = () => {
  return (
    <div className="flex items-center flex-col mt-[10%] w-full">
      <p className="text-swim-blue-400 text-4xl md:text-7xl 2xl:text-8xl pt-5">
        Stay Connected
      </p>
      <p className="text-swim-yellow mb-[2%] md:text-2xl 2xl:text-3xl">
        Lorem ipsum dolor sit amet
      </p>

      <div className="flex flex-wrap justify-center w-60 sm:grid-cols-5 mt-[3%] mb-[3%] sm:w-3/4 justify-evenly ">
        {iconLinks.map((item, index) => (
          <JoinIcon
            icon={item.icon}
            text={item.label}
            link={item.link}
            key={index}
          />
        ))}
      </div>

      <Button
        link="https://docs.google.com/forms/d/1eVhGvKFBgVIQICbf83hUOcnGMz6jaWLEllglrM0l9cU/edit"
        text="Member Info Form"
        target="_blank"
      />
    </div>
  );
};

export default Connected;
