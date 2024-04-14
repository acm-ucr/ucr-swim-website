"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/public/logo.webp";
import { items } from "@/data/Navigation";

const NavBar = () => {
  const [selected, setSelected] = useState("");
  return (
    <div className="px-8 fixed z-30 h-[10vh] bg-white w-screen flex justify-between items-center text-xl">
      <Link
        onClick={() => {
          setSelected("");
        }}
        href="/"
      >
        <Image
          src={logo}
          alt="Logo"
          className="h-[8vh] w-[10vh] hover:opacity-60"
        />
      </Link>
      <div className="flex justify-between w-1/2">
        {items.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            onClick={() => {
              setSelected(item.name);
            }}
            className={`hover:text-swim-blue-300 duration-300 border-solid ${
              selected === item.name
                ? "border-b-2 border-swim-yellow text-swim-blue-300"
                : "text-black"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
