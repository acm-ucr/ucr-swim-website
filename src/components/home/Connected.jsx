import { iconLinks } from "../../data/iconLinks";
import Link from "next/link";
import Button from "../Button";

const Connected = () => {
  return (
    <div className="flex items-center flex-col mt-[10%]">
      <p className="text-swim-blue-400 md:text-7xl 2xl:text-8xl pt-5">
        Stay Connected
      </p>
      <p className="text-swim-yellow md:text-2xl 2xl:text-3xl">
        Lorem ipsum dolor sit amet
      </p>

      <div className="text-8xl grid grid-flow-col gap-24 justify-center items-center mt-[5%] mb-[2%]">
        {iconLinks.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <Link
              href={item.link}
              target="_blank"
              className="hover:text-swim-yellow hover:scale-95 duration-300"
            >
              {item.icon}
            </Link>
            <p className="text-lg font-semibold">{item.label}</p>
          </div>
        ))}
      </div>

      <Button link="" text="Member Info Form" target="_blank" />
    </div>
  );
};

export default Connected;
