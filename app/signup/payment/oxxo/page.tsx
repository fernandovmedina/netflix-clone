import Image from "next/image";
import Link from "next/link";

export default function Oxxo() {
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
        <div className="w-[30%] mt-20 pb-24 flex flex-col">
          <Image src="/lock.png" alt="lock_image" width={50} height={20} />
          <p className="mt-5 text-sm">
            STEP <span className="font-bold">4</span> OF{" "}
            <span className="font-bold">4</span>
          </p>
          <h1 className="font-bold text-3xl">Choose how to pay.</h1>
          <p className="text-sm">
            Your payment is encrypted and you can change how you pay anytime.
          </p>
        </div>
      </section>
      <footer className="text-gray-800 py-15 px-40 bg-gray-400/40">
        <a href="tel:8009539947">Questions? Call 800 953 9947 (Toll-Free)</a>
        <div className="mt-5 flex flex-row w-full mb-10 text-sm">
          <div className="w-1/4 flex flex-col underline">
            <a href="" className="mb-2 hover:text-gray-200">
              FAQ
            </a>
            <a href="" className="hover:text-gray-200">
              Privacy
            </a>
          </div>
          <div className="w-1/4 flex flex-col underline">
            <a href="" className="mb-2 hover:text-gray-200">
              Help Center
            </a>
            <a href="" className="hover:text-gray-200">
              Cookie Preferences
            </a>
          </div>
          <div className="w-1/4 flex flex-col underline">
            <a href="" className="mb-2 hover:text-gray-200">
              Netflix Shop
            </a>
            <a href="" className="hover:text-gray-200">
              Corporate Information
            </a>
          </div>
          <div className="w-1/4 underline">
            <a href="" className="hover:text-gray-200">
              Terms of Use
            </a>
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
