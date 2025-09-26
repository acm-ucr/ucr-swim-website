"use client";
import useView from "../useView";
import { iconLinks } from "../../data/iconLinks";
import JoinIcon from "./JoinIcon";
import Button from "../Button";

const Connected = () => {
  const [inView, ref] = useView();
  return (
    <div ref={ref} className="flex items-center flex-col mt-[10%] w-full">
      <p
        className={`${
          inView && "animate-fade-up"
        } text-swim-blue-400 text-3xl md:text-7xl 2xl:text-8xl pt-5`}
      >
        Stay Connected
      </p>
      <p
        className={`${
          inView && "animate-fade-down animate-delay-200"
        } text-swim-yellow mb-[2%] text-sm md:text-2xl 2xl:text-3xl`}
      >
        Get involved with UCR Swim Club!
      </p>

      <div
        className={`${
          inView && "animate-shake animate-delay-500"
        } md:grid md:grid-cols-5 md:my-[3%] my-5 w-3/4 flex flex-wrap justify-center`}
      >
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
        link="https://forms.gle/yjKzaGJhLXYx9nYk6"
        text="Member Info Form"
        target="_blank"
      />
    </div>
  );
};

export default Connected;
