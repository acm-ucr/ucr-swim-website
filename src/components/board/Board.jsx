"use client";
import Image from "next/image";
import useView from "@/components/useView";
const Board = ({ picture, name, position }) => {
  const [inView, ref] = useView();

  return (
    <div className={`w-52 justify-self-center`}>
      {picture && (
        <Image
          src={picture}
          alt="picture"
          className="aspect-square"
          width={500}
          height={500}
        />
      )}
      <div
        ref={ref}
        className="w-full -translate-y-5 text-nowrap text-xl text-center"
      >
        <p
          className={`${
            inView && "animate-fade-right"
          } bg-swim-blue-100 w-11/12 p-1 `}
        >
          {position}
        </p>
        <div className="w-full justify-end flex">
          <p
            className={`${
              inView && "animate-fade-left"
            } bg-swim-blue-200 text-white p-1 -translate-y-1 w-5/6`}
          >
            {name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Board;
