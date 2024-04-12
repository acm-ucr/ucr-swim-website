import Link from "next/link";

const JoinButton = () => {
  return (
    <Link
      href="/join" // Link to the join page
      className="bg-yellow-300 text-black py-2.5 px-5 border-none rounded-md cursor-pointer no-underline hover:opacity-70"
    >
      Join
    </Link>
  );
};

export default JoinButton;
