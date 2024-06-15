const ProfileCards = () => {
    const users = {
        fernando: {
            id: 0,
            name: "Fernando",
            url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXvVyCx2Q3r81aOiULncxEmHA6y2KBK_fmzUkfKlL8_omrt91fpObdoJVbPsP1rayoYL10ibSfsYCL91p9JulRwbaM_8SQjRhQyg.png?r=660",
        },
        mariajose: {
            id: 1,
            name: "Mariajose",
            url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABZumJ3wvSKM7od-r3UjhVF9j3yteWlQYA-51F3SNoI682llhul1Xf_CUkMnfP_17Md2lpOOhbwHeGufvo8kOTjptoS_bcwtniHKz.png?r=e6e",
        },
        norma: {
            id: 2,
            name: "Norma",
            url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABYo85Lg8Qn22cahF2sIw7K_gDo3cGpvw3Gt5xl7FIazw864EYeVkm71Qvrlz0HP2fU4n26AVq15v5t8T4lVBpBcqqZbmRHHsMefk.png?r=1d4",
        },
        children: {
            id: 3,
            name: "Children",
            url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABQ2L2FczTt0lom-DU1nnFyFd_7w5xD0i3yzly2R0qQG3Qn7iNHWv-Gsa-8WHghCLeP5MyGhTsNOspcwoYAqR5x5VwuB972e7PFO-.png?r=25d",
        },
    };
    
    return (
        <div className="my-5 flex">
            {Object.values(users).map(user => (
                <div key={user.id}>
                    <Card name={user.name} url={user.url} />
                </div>
            ))}
            <a href="/addProfile" className="my-auto text-gray-400 hover:text-white" id="addDIV">
                <img src="/add_gray_icon.png" alt="add_gray_icon" />
                <h5 className="mt-3 text-center font-semibold">Add profile</h5>
            </a>
        </div>
    );
};

const Card = ({name, url}) => {
    return (
        <div className="mx-3 text-gray-400 hover:text-white">
            <img className="w-36 rounded hover:border-2 hover:border-white" src={url} alt="image_url" />
            <h5 className="mt-3 text-center font-semibold">{name}</h5>
        </div>
    );
};

export default ProfileCards;
