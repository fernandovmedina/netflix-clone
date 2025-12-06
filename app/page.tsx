"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const carrouselData = [
    { id: 1, imgSrc: "/home/stranger_things.webp" },
    { id: 2, imgSrc: "/home/frankenstin.webp" },
    { id: 3, imgSrc: "/home/kpop.webp" },
    { id: 4, imgSrc: "/home/mariposa_de_barrio.webp" },
    { id: 5, imgSrc: "/home/juan_gabriel.webp" },
    { id: 6, imgSrc: "/home/troll2.webp" },
    { id: 7, imgSrc: "/home/it.webp" },
    { id: 8, imgSrc: "/home/wednesday.webp" },
    { id: 9, imgSrc: "/home/fugue.webp" },
    { id: 10, imgSrc: "/home/the_believers.webp" },
  ];

  const Carrousel = ({ items }: any) => {
    const carouselRef: any = useRef(null);

    const scrollLeft = () => {
      if (!carouselRef.current) return;
      const width = carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({ left: -width, behavior: "smooth" });
    };

    const scrollRight = () => {
      if (!carouselRef.current) return;
      const width = carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({ left: width, behavior: "smooth" });
    };

    return (
      <div className="relative w-full pb-10">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black p-3 rounded-full"
        >
          <span className="text-white text-2xl">‹</span>
        </button>

        <div
          ref={carouselRef}
          className="flex overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          {items.map((item: any) => (
            <div key={item.id} className="w-1/5 shrink-0 px-2 snap-start">
              <Image
                src={item.imgSrc}
                alt="carousel item"
                width={220}
                height={0}
                className="rounded-xl"
              />
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black p-3 rounded-full"
        >
          <span className="text-white text-2xl">›</span>
        </button>
      </div>
    );
  };

  const SliderCards = () => {
    return (
      <div className="pb-10">
        <div className="grid grid-cols-4 gap-3">
          <div className="bg-linear-to-br from-indigo-900 px-3 py-5 to-purple-950 rounded-xl">
            <h1 className="font-extrabold text-2xl">Enjoy on your TV</h1>
            <p className="text-gray-400 mt-3">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
          <div className="bg-linear-to-br from-indigo-900 px-3 py-5 to-purple-950 rounded-xl">
            <h1 className="font-extrabold text-2xl">
              Download your shows to watch offline
            </h1>
            <p className="text-gray-400 mt-3">
              Save your favorites easily and always have something to watch.
            </p>
          </div>
          <div className="bg-linear-to-br from-indigo-900 px-3 py-5 to-purple-950 rounded-xl">
            <h1 className="font-extrabold text-2xl">Watch everywhere</h1>
            <p className="text-gray-400 mt-3">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
          <div className="bg-linear-to-br from-indigo-900 px-3 py-5 to-purple-950 rounded-xl">
            <h1 className="font-extrabold text-2xl">
              Create profiles for kids
            </h1>
            <p className="text-gray-400 mt-3">
              Send kids on adventures with their favorite characters in a space
              made just for them — free with your membership.
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="bg-black">
      <div className="relative bg-[url(/home/hero.jpg)] bg-cover bg-center px-36 py-5">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative">
          <nav className="flex flex-row w-full items-center pt-2">
            <div className="w-1/2">
              <Image
                src="/netflix_logo.svg"
                alt="netflix_logo"
                width={150}
                height={50}
              />
            </div>
            <div className="w-1/2 flex flex-row items-stretch justify-end">
              <div className="flex flex-row border-2 border-gray-400 bg-black/60 px-2 rounded-lg mr-3 h-full">
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

              <Link
                href="/login"
                className="text-white font-bold bg-red-700 rounded px-4 flex items-center"
              >
                Sign In
              </Link>
            </div>
          </nav>
          <div className="pt-40 text-white flex flex-col justify-center items-center mx-auto max-w-[800px] pb-48">
            <h1 className="text-6xl font-extrabold text-center">
              Unlimited movies, TV shows, and more
            </h1>
            <h2 className="text-xl font-extrabold mt-5 mb-7 text-center">
              Starts at MXN 119. Cancel anytime
            </h2>
            <p className="font-bold mb-3 text-center">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="flex flex-row items-stretch">
              <input
                className="bg-transparent border-2 font-bold border-gray-600 rounded px-3 h-full py-3 w-[400px] text-white placeholder:text-gray-400"
                placeholder="Email address"
              />

              <button className="flex flex-row font-extrabold items-center bg-red-700 px-4 rounded ml-3 h-full py-3">
                Get Started
                <Image
                  src="/home/greater.png"
                  alt="greater_icon"
                  width={20}
                  height={0}
                  className="ml-2"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white px-28 relative">
        <div className="flex flex-row items-center w-full pt-10 pb-16 relative z-10">
          <Image
            src="/home/popcorn.png"
            alt="popcorn_image"
            width={70}
            height={0}
          />

          <div className="flex flex-row items-center justify-between bg-linear-to-r from-purple-900 via-purple-700 to-sky-900 w-full px-10 py-4 rounded-xl ml-5">
            <div className="flex flex-col">
              <h1 className="font-extrabold text-xl">
                The Netflix you love for just MXN 119.
              </h1>
              <p className="font-bold text-sm">
                Get our most affordable, ad-supported plan.
              </p>
            </div>

            <a className="bg-gray-800 px-3 py-2 rounded-md font-semibold cursor-pointer">
              Learn More
            </a>
          </div>
        </div>

        <h2 className="font-bold text-2xl pb-7">Trending Now</h2>
        <Carrousel items={carrouselData} />

        <h2 className="font-bold text-2xl pb-7">More Reasons to Join</h2>
        <SliderCards />

        <h2 className="font-bold text-2xl pb-7">Frequently Asked Questions</h2>
      </div>
    </main>
  );
}
