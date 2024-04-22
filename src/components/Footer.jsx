import img1 from "@/public/footer.webp";
import wavetop from "@/public/waveTop.webp";
import { footerLinks } from "../data/footerLinks";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col relative w-full items-center mt-[10%]">
      <div className="bg-gradient-to-b from-white to-swim-blue-300 h-full">
        <Image alt="img1" src={img1} className="flex w-screen opacity-60" />
      </div>
      <Image
        alt="wavetop"
        src={wavetop}
        className="w-screen absolute -top-[20%] h-1/3"
      />
      <div className="flex text-white w-11/12 justify-between items-end absolute bottom-0 pb-[4%]">
        <Link
          href="/"
          className="hover:opacity-80 md:text-5xl text-xl font-bold pb-[3%] duration-300 ease-in-out"
        >
          UCR CLUB SWIM
        </Link>
        <div className="flex font-bold items-end">
          <div className="flex flex-col items-end border-r-white md:border-r-[10px] border-r-[6px] md:pr-5 pr-3 mr-5">
            <p className="md:text-2xl text-sm font-bold pb-2 w-fit">
              Contact Us
            </p>
            <p className="md:text-xl text-[10px] text-end">
              900 University Ave,<br></br>
              Riverside, California 92521
            </p>
          </div>
          <div className="md:text-5xl 2xl:text-6xl flex flex-col justify-between md:-ml-0 -ml-2 ">
            {footerLinks.map((item, index) => (
              <Link
                href={item.link}
                target="_blank"
                key={index}
                className="hover:text-swim-yellow hover:scale-95 duration-300 md:p-0 p-[1px] text-2xl md:text-6xl"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
