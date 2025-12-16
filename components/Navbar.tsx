import Image from "next/image"

export const Navbar = () => {
    return (
      <nav className="text-white flex flex-row items-center px-14 py-4 w-full">
        <div className="w-1/12">
          <Image src="netflix_logo.svg" alt="netflix_logo" width={100} height={15} />
        </div>
        <div className="flex flex-row items-center w-9/12 justify-start px-7 gap-5 text-sm">
          <a href="" className="hover:text-gray-400/90">Home</a>
          <a href="" className="hover:text-gray-400/90">Series</a>
          <a href="" className="hover:text-gray-400/90">Movies</a>
          <a href="" className="hover:text-gray-400/90">Popular new arrivals</a>
          <a href="" className="hover:text-gray-400/90">My List</a>
          <a href="" className="hover:text-gray-400/90">Explore by language</a>
        </div>
        <div className="flex flex-row items-center w-2/12 gap-3 hover:cursor-pointer">
          <Image src="/white_search.png" alt="white_search_icon" width={30} height={15} />
          <a href="" className="text-sm">Children</a>
          <Image src="/white_notifications.png" alt="white_notifications" width={30} height={15} />
          <div className="flex flex-row items-center gap-1">
            <Image src="https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABW7Wui3ZqHqBvl3R__TmY0sDZF-xBxJJinhVWRwu7OmYkF2bdwH4nqfnyT3YQ-JshQvap33bDbRLACSoadpKwbIQIBktdtHjxw.png?r=201" alt="profile_image" width={30} height={15} />
            <Image src="/white_dropdown.png" alt="white_dropdown_icon" width={15} height={15} />
          </div>
        </div>
      </nav>
    )
}