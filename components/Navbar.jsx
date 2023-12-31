"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AboutImg from "@/public/images/navLogo.png";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src={AboutImg} width={70} height={70} alt="/" />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:text-[#5651e5]">Home</li>
            </Link>
            <Link href="/about">
              <li className="ml-10 text-sm uppercase hover:text-[#5651e5]">About</li>
            </Link>
            <Link href="/skills">
              <li className="ml-10 text-sm uppercase  hover:text-[#5651e5]">Skills</li>
            </Link>
            <Link href="/projects">
              <li className="ml-10 text-sm uppercase  hover:text-[#5651e5]">
                Projects
              </li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 text-sm uppercase  hover:text-[#5651e5]">
                Contact
              </li>
            </Link>
          </ul>
          <div className="md:hidden cursor-pointer" onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* hamburger icon icindeki menuler */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 h-screen w-[75%] sm:w-[60%] md:w-[45%] bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 duration-500"
          }
        >
          <div className="flex w-full items-center justify-between">
            <Image src={AboutImg} width={70} height={70} alt="/" />
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <AiOutlineClose size={25} />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="w-[85%] md:w-[90%] py-4">
              Let{"'"}s build something legendary together
            </p>
          </div>
          <div className="flex flex-col py-4">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/about">
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="/skills">
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/projects">
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="/contact">
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let{"'"}s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
