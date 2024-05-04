import Link from "next/link";

const Button = ({ link, text, target, color = "text-black" }) => {
  return (
    <Link
      className={` ${color} my-3 md:my-6 duration-300 py-0.5 md:py-2 px-4 md:px-8 w-fit rounded-sm text-sm md:text-2xl 2xl:text-3xl bg-swim-yellow font-bold hover:opacity-50 active:opacity-40 z-10`}
      href={link}
      target={target}
    >
      {text}
    </Link>
  );
};

export default Button;
