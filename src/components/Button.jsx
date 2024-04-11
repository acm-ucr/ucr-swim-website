import Link from "next/link";

const Button = ({ link, target }) => {
  return (
    <Link
      className="h-20 w-13 text-4xl text-swim-black bg-swim-yellow px-10 py-5 font-bold text-xl text-center hover:opacity-50 active:opacity-40 z-10"
      href="https://acm.cs.ucr.edu/"
      target="_blank"
    >
      <p className="align-middle"> Member Info Form</p>
    </Link>
    //
  );
};

export default Button;
