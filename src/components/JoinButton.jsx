import Link from "next/link";

const JoinButton = () => {
  return (
    <Link
      href="/join"
      className="bg-yellow-300 text-black py-2.5 px-5 rounded-md hover:opacity-70"
    >
      Join
    </Link>
  );
};

export default JoinButton;
