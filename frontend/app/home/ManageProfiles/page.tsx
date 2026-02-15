import Image from "next/image";
import Link from "next/link";

export default function ManageProfiles() {
  const ProfileCard = ({
    id,
    uuid,
    name,
    profileURL,
  }: {
    id: string;
    uuid: string;
    name: string;
    profileURL: string;
  }) => {
    return (
      <div className="relative flex flex-col items-center mx-2 cursor-pointer group">
        <Link href={`/home/settings/${uuid}?referrer=ManageProfiles`}>
          <div className="relative">
            <Image
              src={profileURL}
              alt={`${name}_profile`}
              width={100}
              height={100}
              className="rounded"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition rounded" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition bg-black/70 rounded-full p-2">
              <Image
                src="/edit_white.png"
                alt="white_edit_icon"
                width={20}
                height={20}
              />
            </div>
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
        uuid: "550e8400-e29b-41d4-a716-446655440000",
        name: "Fernando",
        profileURL:
          "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABW7Wui3ZqHqBvl3R__TmY0sDZF-xBxJJinhVWRwu7OmYkF2bdwH4nqfnyT3YQ-JshQvap33bDbRLACSoadpKwbIQIBktdtHjxw.png?r=201",
      },
      {
        id: "2",
        uuid: "550e8400-e29b-41d4-a716-446655440001",
        name: "Norma",
        profileURL:
          "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTIZOev-u19Mt_7c0K1XCwCzdTwmEIeOnSktsLHUugSaqg3NEdm7_UwQT61sGtccTocB8YP980t_te4iEfcglFxEHPXxO0WGPA.png?r=7c7",
      },
      {
        id: "3",
        uuid: "550e8400-e29b-41d4-a716-446655440002",
        name: "Mariajose",
        profileURL:
          "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXFZnMq0aIUsTd1J4Zy10TaPi4Ulx3VRyT_ZN1p9XYcE1KAon0Ndskx0e2tTr9hajESYNDSnSrbDexSXvmYSBiI8gVqOF9SORA.png?r=b39",
      },
      {
        id: "4",
        uuid: "550e8400-e29b-41d4-a716-446655440003",
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
            uuid={item.uuid}
            name={item.name}
            profileURL={item.profileURL}
            key={item.id}
          />
        ))}
      </div>
    );
  };

  return (
    <main className="bg-black text-white flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-5xl">Manage profiles</h1>
        <div className="mt-5 mb-10">
          <ProfileCards />
        </div>
        <Link
          href="/home/browse"
          className="bg-white text-black px-5 py-2 font-bold hover:bg-red-600 hover:text-white"
        >
          Ready
        </Link>
      </div>
    </main>
  );
}
