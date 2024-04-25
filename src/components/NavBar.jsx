"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/public/logo.webp";
import { items } from "@/data/Navigation";
import { IoMdMenu } from "react-icons/io";

const NavBar = () => {
  const [selected, setSelected] = useState("");
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="px-8 fixed z-30 bg-white w-screen flex justify-between items-center text-3xl md:text-xl 2xl:text-2xl">
      <Link
        onClick={() => {
          setSelected("");
        }}
        href="/"
      >
        <Image
          src={logo}
          alt="Logo"
          className="left-0 w-20 md:w-16 hover:opacity-60 duration-300"
        />
      </Link>
      <div className="hidden absolute right-0 md:flex justify-evenly w-2/5">
        {items.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            onClick={() => {
              setSelected(item.name);
            }}
            className={`hover:text-swim-blue-300 duration-300 border-solid font-semibold ${
              selected === item.name
                ? "border-b-2 border-swim-yellow text-swim-blue-300"
                : "text-black"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      {/* mobile menu */}

      <div
        className={
          nav
            ? "fixed transition ease-in-out md:hidden flex flex-col items-center justify-evenly w-[100%] duration-500 bg-white top-7 left-0 right-0 -z-10"
            : "fixed hidden transition ease-in-out duration-500 top-[-100%]"
        }
      >
        {items.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            onClick={() => {
              setSelected(item.name);
            }}
            className={`hover:text-swim-blue-300 duration-300 border-solid font-semibold py-2 ${
              selected === item.name
                ? "border-b-2 border-swim-yellow text-swim-blue-300"
                : "text-black"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div onClick={handleNav}>
        <IoMdMenu className="flex md:hidden text-black hover:cursor-pointer hover:text-swim-blue-300 justify-self-end" />
      </div>
    </div>
  );
};

export default NavBar;
