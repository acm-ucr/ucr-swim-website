"use client";
import Image from "next/image";
import image1 from "@/public/join/how.webp";
import Link from "next/link";
import useView from "../useView";

const How = () => {
  return (
    <div className="ml-5">
      <p
        className={`${
          useView && "animate-fade-right animate-delay-[100ms]"
        } text-4xl text-swim-blue-400 font-bold`}
      >
        How To Practice and Officially become a member:
      </p>
      <div className="md:flex md:flex-col">
        <div
          className={`${
            useView && "animate-fade-right animate-delay-[150ms]"
          } md:flex md:flex-row items-center`}
        >
          <Image
            src={image1}
            width={300}
            height={300}
            alt="How image instructions"
          />
          <p
            className={`${useView && "animate-fade-right animate-delay-[300ms]"}
            text-1.5xl mt-5 mb-5 ml-10`}
          >
            1. Join{" "}
            <Link
              className="text-swim-blue-300 underline mr-2"
              href="https://recreation.ucr.edu/competitive-sports/do-sports-easy"
              target="_blank"
            >
              Do Sports Easy
            </Link>
            <br />
            <div className="pl-4">
              a. Click on the Link Above to be redirected to the front page
              <div />
              b. Once you&apos;re on the front page, go ahead and click register
              under &quot;Swim Club&quot;
              <div />
              c. Sign in through your UCR Login
              <div />
              d. Fill out the necessary personal information and complete the
              liability waiver
            </div>
          </p>
        </div>
        <div>
          <p
            className={`${useView && "animate-fade-left animate-delay-150"}
            text-1.5xl mt-10 mb-5`}
          >
            2. Register for Swim Club on{" "}
            <Link
              className="text-swim-blue-300 underline mr-2"
              href="https://highlanderlink.ucr.edu/organization/swimclubatucr"
              target="_blank"
            >
              Highlander Link
            </Link>
            <br />
            <div className="pl-4">
              a. Click on the link above
              <div />
              b. Sign in through your UCR Login
              <div />
              c. Send a request to join &quot;Club Swim at UCR&quot;
              <div />
              d. You will not be approved until we see you&apos;re on our roster
              on Do Easy Sports
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default How;
