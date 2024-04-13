import Link from "next/link";

const Button = ({ link, text, target }) => {
  return (
    <Link
      className=" my-6 ease-in-out transition-opacity w-fit rounded-sm md:text-2xl 2xl:text-3xl text-swim-blue-400 bg-swim-yellow px-8 py-2 font-bold hover:opacity-50 active:opacity-40 z-10"
      href={link}
      target={target}
    >
      {text}
    </Link>
  );
};

export default Button;
