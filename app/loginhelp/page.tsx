"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginHelp() {
  const [emailPressed, setEmailPressed] = useState<boolean>(true);
  const [smsPressed, setSmsPressed] = useState<boolean>(false);

  const toggle = () => {
    emailPressed ? setSmsPressed(!smsPressed) : setSmsPressed(!smsPressed);
    smsPressed ? setEmailPressed(!emailPressed) : setEmailPressed(!emailPressed);
  }

  return (
    <main>
      <div className="bg-[url(/home/hero_login.jpg)] bg-cover bg-center h-screen">
        <nav className="flex flex-row items-center justify-between text-white px-40 py-5 border-b border-gray-400">
          <Link href="/">
            <Image src="/netflix_logo.svg" width={150} height={20} alt="netflix_logo" />
          </Link>
          <Link href="/login" className="bg-red-600 rounded px-5 py-2 font-bold hover:bg-red-700">Sign In</Link>
        </nav>
        <div className="text-black flex items-center justify-center">
          <div className="bg-white mt-20 px-10 py-15 w-[35%]">
            <h1 className="font-extrabold text-3xl">Update password, email or phone</h1>
            <p className="my-3 font-medium">How would you like to reset your password?</p>
            <div className="flex flex-row items-center pl-5">
              <input type="checkbox" checked={emailPressed} onClick={toggle} />
              <p onClick={toggle} className="hover:cursor-pointer ml-3 font-medium">Email</p>
            </div>
            <div className="flex flex-row items-center pl-5">
              <input type="checkbox" checked={smsPressed} onClick={toggle} />
              <p onClick={toggle} className="hover:cursor-pointer ml-3 font-medium">Text Message (SMS)</p>
            </div>
            {
              emailPressed ?
              (
                <div className="mt-4">
                  <p>We will send you an email with instructions on how to reset your password.</p>
                  <input type="email" placeholder="Email" className="mt-3 mb-5 border border-black rounded px-5 py-2 w-full text-left" />
                  <button className="bg-red-600 hover:bg-red-700 w-full text-center py-2 rounded text-white font-bold mb-5">Email Me</button>
                </div>
              ) : (
                <div className="mt-4">
                  <p>We will text you a verification code to reset your password. Message and data rates may apply.</p>
                  <input type="number" placeholder="Mobile number" className="mt-2 mb-5 w-full border border-black rounded px-5 py-2 text-left" />
                  <button className="bg-red-600 hover:bg-red-700 w-full text-center text-white py-2 rounded font-bold mb-5">Text Me</button>
                </div>
              )
            }
            <a href="" className="underline">I don't remember my email or phone.</a>
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
