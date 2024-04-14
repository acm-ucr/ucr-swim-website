"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Picture = ({ text, link, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={link} target="_blank">
      <div className="relative flex justify-center items-center">
        {isHovered && <p className="absolute">{text}</p>}
        <Image
          src={image}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
    </Link>
  );
};

export default Picture;
