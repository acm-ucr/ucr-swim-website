import img1 from "@/public/footer.webp";
import wavetop from "@/public/waveTop.webp";
import { footerLinks } from "../data/footerLinks";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col relative w-page h-auto">
      <Image alt="img1" src={img1} className=" flex w-screen h-full mt-28" />
      <Image
        alt="wavetop"
        src={wavetop}
        className="w-screen h-full flex absolute top-0 pb-[37.2%] bg-gradient-to-b from-white/90 to-swim-blue-300/30 bg-origin-padding"
      />
      <div className="flex justify-between text-white">
        <Link
          href="/"
          className="hover:opacity-80 text-5xl font-bold ml-10 mb-32 self-end justify-self-start absolute bottom-0 left-0"
        >
          UCR CLUB SWIM
        </Link>
        <div className="flex items-end font-bold absolute bottom-0 right-0 pb-10">
          <div className="flex-col justify-end items-end text-right mb-10 pr-8 pb-8 border-r-white border-r-[14px] mr-5 pt-80">
            <div className="text-5xl font-bold pb-4">Contact Us</div>
            <div className="text-3xl">
              900 University Ave,<br></br>
              Riverside, California 92521
            </div>
          </div>
          <div className="text-8xl flex flex-col mr-7 mb-10 justify-between">
            {footerLinks.map((item, index) => (
              <Link
                href={item.link}
                target="_blank"
                key={index}
                className="hover:text-swim-yellow hover:scale-75 duration-300"
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
