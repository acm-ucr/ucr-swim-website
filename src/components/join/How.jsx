"use client";
import Image from "next/image";
import image1 from "@/public/join/how.webp";
import Link from "next/link";
import useView from "../useView";

const How = () => {
  return (
    <div className="flex flex-col md:px-0 px-5 gap-y-2">
      <div
        className={`${
          useView && "animate-fade-right animate-delay-[100ms]"
        } md:text-4xl text-2xl text-swim-blue-400 font-bold mb-5`}
      >
        How To Practice and Officially become a member:
      </div>
      <div className="md:flex md:flex-col md:text-xl text-lg">
        <div
          className={`${
            useView && "animate-fade-right animate-delay-[150ms]"
          } md:flex md:flex-row gap-x-4`}
        >
          <Image
            src={image1}
            width={500}
            height={500}
            alt="How image instructions"
          />
          <div
            className={`${useView && "animate-fade-right animate-delay-[300ms]"}
            `}
          >
            1. Join{" "}
            <Link
              className="text-swim-blue-300 underline mr-2"
              href="https://recreation.ucr.edu/competitive-sports/do-sports-easy"
              target="_blank"
            >
              Do Sports Easy
            </Link>
            <div className="pl-4">
              <div>
                a. Click on the Link Above to be redirected to the front page
              </div>
              <div>
                b. Once you&apos;re on the front page, go ahead and click
                register under &quot;Swim Club&quot;
              </div>
              <div>c. Sign in through your UCR Login</div>
              <div>
                d. Fill out the necessary personal information and complete the
                liability waiver
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`${useView && "animate-fade-left animate-delay-150"}
             mt-10 mb-5`}
          >
            2. Register for Swim Club on{" "}
            <Link
              className="text-swim-blue-300 underline mr-2"
              href="https://highlanderlink.ucr.edu/organization/swimclubatucr"
              target="_blank"
            >
              Highlander Link
            </Link>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default How;
