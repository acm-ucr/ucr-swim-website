import { iconLinks } from "../../data/iconLinks";
import JoinIcon from "./JoinIcon";
import Button from "../Button";

const Connected = () => {
  return (
    <div className="flex items-center flex-col mt-[10%] w-full">
      <p className="text-swim-blue-400 text-3xl md:text-7xl 2xl:text-8xl pt-5">
        Stay Connected
      </p>
      <p className="text-swim-yellow mb-[2%] text-sm md:text-2xl 2xl:text-3xl">
        Lorem ipsum dolor sit amet
      </p>

      <div className="md:grid md:grid-cols-5 md:my-[3%] my-5 w-3/4 flex flex-wrap justify-center ">
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
