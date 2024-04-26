import Link from "next/link";

const Button = ({ link, text, target, color = "text-black" }) => {
  return (
    <Link
      className={` ${color} my-3 md:my-6 duration-300 py-[1%] md:py-[2%] px-[6%] md:px-[7.5%] w-fit rounded-sm text-md md:text-2xl 2xl:text-3xl bg-swim-yellow px-8 py-2 font-bold hover:opacity-50 active:opacity-40 z-10`}
      href={link}
      target={target}
    >
      {text}
    </Link>
  );
};

export default Button;
