"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Card() {
  const cardInputRef = useRef<HTMLInputElement>(null);
  const cvvInputRef = useRef<HTMLInputElement>(null);

  const toggleInput = (name: string) => {
    if (name === "card") {
      cardInputRef.current?.focus();
    } else {
      cvvInputRef.current?.focus();
    }
  };

  return (
    <main className="bg-white text-black">
      <nav className="flex flex-row items-center justify-between py-7 border-b border-gray-600 w-full px-10">
        <Link href="/">
          <Image
            src="/netflix_logo.svg"
            alt="netflix_logo"
            width={160}
            height={30}
          />
        </Link>
        <Link href="/login" className="font-bold hover:underline text-xl">
          Sign Out
        </Link>
      </nav>
      <section className="flex items-center justify-center">
        <div className="w-[30%] mt-10 pb-24 flex flex-col">
          <Link
            className="flex flex-row items-center underline text-blue-700 hover:underline-offset-0"
            href="/signup/payment"
          >
            <Image
              className="mr-2"
              src="/back_arrow.png"
              alt="back_arrow_icon"
              width={10}
              height={5}
            />
            Change payment method
          </Link>
          <p className="mt-5 text-sm">
            STEP <span className="font-bold">4</span> OF{" "}
            <span className="font-bold">4</span>
          </p>
          <h1 className="font-bold text-3xl">
            Set up your credit or debit card.
          </h1>
          <form>
            <div
              onClick={() => toggleInput("card")}
              className="flex flex-row w-full items-center border my-3 border-gray-400 rounded px-5 py-2 justify-between"
            >
              <input
                ref={cardInputRef}
                id="card_input"
                type="number"
                placeholder="Card number"
                className="w-[85%] outline-none"
              />
              <Image
                src="/debit_card.png"
                width={30}
                height={5}
                alt="debit_card_icon"
                className="w-[10%]"
              />
            </div>
            <div className="mt-4 flex flex-row items-center gap-4">
              <input
                className="border border-gray-400 rounded px-5 py-4 w-1/2"
                type="text"
                placeholder="Expiration date"
              />
              <div
                onClick={() => toggleInput("cvv")}
                className="flex flex-row items-center border border-gray-400 rounded px-5 py-4 w-1/2 justify-between"
              >
                <input
                  ref={cvvInputRef}
                  id="cvv_input"
                  type="number"
                  placeholder="CVV"
                  className="w-full outline-none"
                />
                <Image
                  src="/info.png"
                  width={25}
                  height={25}
                  alt="info_icon"
                  className="ml-3"
                />
              </div>
            </div>
            <input
              className="mt-4 border border-gray-400 rounded px-5 py-4 w-full"
              type="text"
              placeholder="Name on card"
            />
          </form>
          <div>
            <div>
              <h1>MXN 119/month</h1>
              <p>Standard with ads</p>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </main>
  );
}
