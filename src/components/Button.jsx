import Link from "next/link";

const Button = ({ link, text, target }) => {
  return (
    <Link
      className="h-15 w-fit text-2xl text-swim-black bg-swim-yellow px-10 py-3 font-bold text-center hover:opacity-50 active:opacity-40 z-10"
      href={link}
      target={target}
    >
      {text}
    </Link>
  );
};

export default Button;
