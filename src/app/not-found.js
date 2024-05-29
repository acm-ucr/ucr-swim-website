import Image from "next/image";
import fish from "@/public/fish.webp";
import Button from "@/components/Button";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-4xl font-bold">Oops!</p>
      <Image src={fish} alt="Fish image" className="w-2/5 m-7" />
      <p className="text-8xl font-bold">404</p>
      <p>Page Not Found</p>
      <p>Are you stuck? Just keep swimming!</p>
      <Button link="/" text="Back to Home" />
    </div>
  );
};

export default NotFound;
