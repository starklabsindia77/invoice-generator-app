"use client";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import ThemeLink from "./ThemeLink";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
export default function Navbar() {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <>
      <header className="bg-violet-700 fixed top-0 right-0 w-full left-0 h-16 flex items-center justify-between px-16 text-slate-50">
        <Link className="font-bold text-2xl md:text-4xl" href="/">
          Invoicer
        </Link>

        <nav className="hidden sm:flex items-center gap-3">
          <Link href="/">Features</Link>
          <Link href="/">Pricing</Link>
          <Link href="/">Free Tools</Link>
        </nav>
        <div className="hidden sm:flex items-center gap-4">
          <Link href="/login">Login</Link>
          <ThemeLink
            className="bg-rose-600 hover:bg-rose-700 focus:ring-rose-300"
            title="Register"
            href="/register"
          />
        </div>
        {/* Humberg menu */}
        <button onClick={() => setShow(true)} className="sm:hidden">
          <BiMenu className="text-3xl" />
        </button>
      </header>
      <div
        className={
          show
            ? "sm:hidden fixed w-36 bg-slate-800 bg-opacity-90 h-screen right-0  z-50 top-0 p-4 text-slate-50"
            : "hidden sm:hidden fixed w-36 bg-slate-800 bg-opacity-90 h-screen right-0  z-50 top-0 p-4 text-slate-50"
        }
      >
        <div className="flex justify-between items-center mb-10">
          <h2 className="font-bold">Invoicer</h2>
          <button onClick={() => setShow(false)}>
            <AiOutlineClose className="text-2xl" />
          </button>
        </div>
        <nav className="flex flex-col items-start gap-3 mb-10">
          <Link href="/">Features</Link>
          <Link href="/">Pricing</Link>
          <Link href="/">Free Tools</Link>
        </nav>
        <div className="flex flex-col items-start gap-4">
          <Link href="/login">Login</Link>
          <ThemeLink
            className="bg-rose-600 hover:bg-rose-700 focus:ring-rose-300"
            title="Register"
            href="/register"
          />
        </div>
      </div>
    </>
  );
}
