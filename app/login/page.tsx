"use client";

import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <main>
      <div className="bg-[url('/home/hero.jpg')] bg-cover bg-center px-40 h-screen">
        <nav className="py-5">
          <Link href="/">
            <Image
              src="/netflix_logo.svg"
              alt="netflix_logo"
              width={150}
              height={60}
            />
          </Link>
        </nav>
        <div className="flex items-center justify-center">
          <div className="text-white flex flex-col bg-black/90 mt-10 px-15 py-10 w-[40%]">
            <h1 className="font-extrabold text-3xl">Sign In</h1>
            <input className="mt-5 border-2 border-gray-500 px-5 py-3 rounded placeholder:text-gray-300 bg-gray-900/50" type="email" placeholder="Email or phone number" />
            <input className="mt-5 border-2 border-gray-500 px-5 py-3 rounded placeholder:text-gray-300 bg-gray-900/50" type="password" placeholder="Password" />
            <button className="bg-red-600 my-4 py-2 font-bold rounded hover:bg-red-700">Sign In</button>
            <p className="text-center text-gray-400">OR</p>
            <button className="bg-gray-600/50 py-2 my-4 rounded">Use a Sign-In Code</button>
            <a href="/loginhelp" className="underline hover:text-gray-400 text-center">Forgot Password?</a>
            <div className="flex flex-row items-center my-4">
              <input type="checkbox" className="mr-3" />
              <p>Remember me</p>
            </div>
            <div className="flex flex-row items-center mb-4">
              <p className="text-gray-400 mr-2">New to Netflix? {' '}</p>
              <Link href="/" className="font-bold">Sign up now</Link>
            </div>
            <p className="text-xs text-gray-400">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
            <a className="text-blue-500 underline text-xs">Learn more.</a>
          </div>
        </div>
      </div>
      <footer className="text-gray-400 py-15 px-40 bg-gray-700/40">
        <a href="tel:8009539947">Questions? Call 800 953 9947 (Toll-Free)</a>
        <div className="mt-5 flex flex-row w-full mb-10 text-sm">
          <div className="w-1/4 flex flex-col underline">
            <a href="" className="mb-2 hover:text-gray-200">FAQ</a>
            <a href="" className="hover:text-gray-200">Privacy</a>
          </div>
          <div className="w-1/4 flex flex-col underline">
            <a href="" className="mb-2 hover:text-gray-200">Help Center</a>
            <a href="" className="hover:text-gray-200">Cookie Preferences</a>
          </div>
          <div className="w-1/4 flex flex-col underline">
            <a href="" className="mb-2 hover:text-gray-200">Netflix Shop</a>
            <a href="" className="hover:text-gray-200">Corporate Information</a>
          </div>
          <div className="w-1/4 underline">
            <a href="" className="hover:text-gray-200">Terms of Use</a>
          </div>
        </div>
        <div className="flex flex-row border-2 border-gray-400 bg-black/60 px-2 rounded-lg w-36">
          <Image
            src="/language.png"
            alt="language_icon"
            width={35}
            height={0}
          />
          <select className="text-white pl-2 bg-transparent font-semibold">
            <option>English</option>
            <option>Español</option>
          </select>
        </div>
      </footer>
    </main>
  );
}
