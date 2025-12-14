"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Browse() {
  const [isAddProfileModalOpen, setIsAddProfileModalOpen] =
    useState<boolean>(false);

  const setModalOpen = () => {
    setIsAddProfileModalOpen(!isAddProfileModalOpen);
  };

  const ProfileCard = ({
    id,
    name,
    profileURL,
  }: {
    id: string;
    name: string;
    profileURL: string;
  }) => {
    return (
      <div className="relative flex flex-col items-center mx-2 cursor-pointer group">
        <Link href={`/ManageProfiles/EditProfile/${id}`}>
          <div className="relative">
            <Image
              src={profileURL}
              alt={`${name}_profile`}
              width={100}
              height={100}
              className="rounded"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition rounded" />
          </div>
          <p className="text-gray-400 mt-2 group-hover:text-white transition">
            {name}
          </p>
        </Link>
      </div>
    );
  };

  const ProfileCards = () => {
    const profilesData = [
      {
        id: "1",
        name: "Fernando",
        profileURL:
          "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABW7Wui3ZqHqBvl3R__TmY0sDZF-xBxJJinhVWRwu7OmYkF2bdwH4nqfnyT3YQ-JshQvap33bDbRLACSoadpKwbIQIBktdtHjxw.png?r=201",
      },
      {
        id: "2",
        name: "Norma",
        profileURL:
          "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTIZOev-u19Mt_7c0K1XCwCzdTwmEIeOnSktsLHUugSaqg3NEdm7_UwQT61sGtccTocB8YP980t_te4iEfcglFxEHPXxO0WGPA.png?r=7c7",
      },
      {
        id: "3",
        name: "Mariajose",
        profileURL:
          "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXFZnMq0aIUsTd1J4Zy10TaPi4Ulx3VRyT_ZN1p9XYcE1KAon0Ndskx0e2tTr9hajESYNDSnSrbDexSXvmYSBiI8gVqOF9SORA.png?r=b39",
      },
      {
        id: "4",
        name: "Alejandro",
        profileURL:
          "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABctYlCzOlqC1hdCkR_KU5IQx82pDkgFTrIrCcmcwE_Bnxjnbt8YdgfiASj0RhaTddAo0oIItoLHO-DXJK3teuJKhvILRhpJVVg.png?r=6a6",
      },
    ];

    return (
      <div className="flex flex-row justify-center items-center">
        {profilesData.map((item) => (
          <ProfileCard
            id={item.id}
            name={item.name}
            profileURL={item.profileURL}
            key={item.id}
          />
        ))}
        <div
          onClick={setModalOpen}
          className="relative flex flex-col items-center mx-2 cursor-pointer group"
        >
          <div className="w-[100px] h-[100px] flex items-center justify-center rounded border border-dashed border-gray-400 group-hover:border-white group-hover:bg-black/40 transition">
            <Image
              src="/add_white.png"
              alt="add_profile_icon"
              width={30}
              height={30}
            />
          </div>
          <span className="mt-2 text-sm text-gray-400 group-hover:text-white transition">
            Añadir perfil
          </span>
        </div>
      </div>
    );
  };

  return (
    <main className="bg-black text-white flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-5xl">Who's watching now?</h1>
        <div className="mt-5 mb-10">
          <ProfileCards />
        </div>
        <Link
          href="/ManageProfiles"
          className="border-2 border-gray-500/70 text-gray-500/70 hover:text-white hover:border-white px-5 py-2"
        >
          Manage Profiles
        </Link>
      </div>
      {isAddProfileModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="relative bg-[#141414] rounded-lg w-[600px] p-10 text-white">
            <button
              onClick={setModalOpen}
              className="absolute top-5 right-5 text-white hover:text-gray-500 text-xl"
            >
              ✕
            </button>
            <h1 className="text-2xl font-semibold text-center mt-10 mb-2">
              Add a profile
            </h1>
            <p className="text-center text-sm">
              Add a profile for another person who is going to watch netflix.
            </p>
            <div className="my-5 flex flex-row items-center">
              <Image
                src="https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABYo85Lg8Qn22cahF2sIw7K_gDo3cGpvw3Gt5xl7FIazw864EYeVkm71Qvrlz0HP2fU4n26AVq15v5t8T4lVBpBcqqZbmRHHsMefk.png?r=1d4"
                alt="add_profile"
                width={70}
                height={70}
                className="rounded"
              />
              <input className="ml-5 outline-0 border border-gray-500/70 px-5 py-3 rounded w-full" type="text" placeholder="Name" />
            </div>
            <div className="flex items-center justify-between w-full max-w-xl bg-neutral-800 px-6 py-4 rounded">
              <div>
                <h1 className="text-white text-lg font-semibold">
                  Profile for kids
                </h1>
                <p className="text-neutral-400 text-sm">
                  See only children's titles
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-12 h-7 bg-neutral-600 rounded-full peer peer-checked:bg-neutral-500 after:content-[''] after:absolute after:top-1 after:left-1 after:bg-neutral-900 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-5"></div>
              </label>
            </div>
            <div className="flex flex-col mt-10">
              <button className="bg-white text-black hover:bg-gray-100/80 font-bold w-full py-3 rounded">Save</button>
              <button onClick={setModalOpen} className="mt-2 w-full font-bold hover:bg-gray-200/70 py-3 rounded">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
