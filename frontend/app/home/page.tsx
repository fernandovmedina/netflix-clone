"use client";

import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Play, Plus, ThumbsUp } from "@deemlol/next-icons";

export default function Home() {
  const [selectedTitleId, setSelectedTitleId] = useState<number | null>(null);

  useEffect(() => {
    const uuid: string | null = new URLSearchParams(window.location.search).get(
      "uuid"
    );
  }, []);

  const api_data_example = [
    {
      id: 1,
      title: "Continue viewing content from Fernando",
      items: [
        {
          id: 100,
          content_type: "series",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbaL30ZRgebojoxbjew1oDMFFbUX1x7e4X0CMLCHLF8LKXBx2cyKW97dUW6idrCGk7fzgyqTdKl-gQeqsDzTKejY5nbBzTaXSdE.jpg?r=d46",
        },
        {
          id: 101,
          content_type: "movies",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47",
        },
        {
          id: 102,
          content_type: "series",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbavgnObY8DhaHwS_j1T8l-F7qdZee8LeI0wm4-9r96TX1Ob217LzCSU-BK9_N80sJ3nE3otbTiy8YLVpeS0O7ckHKOH9vHKDzQ.jpg?r=f0f",
        },
        {
          id: 103,
          content_type: "movies",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60",
        },
        {
          id: 104,
          content_type: "series",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbaL30ZRgebojoxbjew1oDMFFbUX1x7e4X0CMLCHLF8LKXBx2cyKW97dUW6idrCGk7fzgyqTdKl-gQeqsDzTKejY5nbBzTaXSdE.jpg?r=d46",
        },
        {
          id: 105,
          content_type: "movies",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60",
        },
        {
          id: 106,
          content_type: "series",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbavgnObY8DhaHwS_j1T8l-F7qdZee8LeI0wm4-9r96TX1Ob217LzCSU-BK9_N80sJ3nE3otbTiy8YLVpeS0O7ckHKOH9vHKDzQ.jpg?r=f0f",
        },
        {
          id: 107,
          content_type: "movies",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47",
        },
        {
          id: 108,
          content_type: "series",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60",
        },
        {
          id: 109,
          content_type: "movies",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47",
        },
      ],
    },
    {
      id: 2,
      title: "Binge-watchable series",
      items: [
        {
          id: 100,
          content_type: "series",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbaL30ZRgebojoxbjew1oDMFFbUX1x7e4X0CMLCHLF8LKXBx2cyKW97dUW6idrCGk7fzgyqTdKl-gQeqsDzTKejY5nbBzTaXSdE.jpg?r=d46",
        },
        {
          id: 101,
          content_type: "movies",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47",
        },
        {
          id: 102,
          content_type: "series",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbavgnObY8DhaHwS_j1T8l-F7qdZee8LeI0wm4-9r96TX1Ob217LzCSU-BK9_N80sJ3nE3otbTiy8YLVpeS0O7ckHKOH9vHKDzQ.jpg?r=f0f",
        },
        {
          id: 103,
          content_type: "movies",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60",
        },
        {
          id: 104,
          content_type: "series",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbaL30ZRgebojoxbjew1oDMFFbUX1x7e4X0CMLCHLF8LKXBx2cyKW97dUW6idrCGk7fzgyqTdKl-gQeqsDzTKejY5nbBzTaXSdE.jpg?r=d46",
        },
        {
          id: 105,
          content_type: "movies",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60",
        },
        {
          id: 106,
          content_type: "series",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbavgnObY8DhaHwS_j1T8l-F7qdZee8LeI0wm4-9r96TX1Ob217LzCSU-BK9_N80sJ3nE3otbTiy8YLVpeS0O7ckHKOH9vHKDzQ.jpg?r=f0f",
        },
        {
          id: 107,
          content_type: "movies",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47",
        },
        {
          id: 108,
          content_type: "series",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60",
        },
        {
          id: 109,
          content_type: "movies",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47",
        },
      ],
    },
    {
      id: 3,
      title: "Because you watched Baki",
      items: [
        {
          id: 100,
          content_type: "movies",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbaL30ZRgebojoxbjew1oDMFFbUX1x7e4X0CMLCHLF8LKXBx2cyKW97dUW6idrCGk7fzgyqTdKl-gQeqsDzTKejY5nbBzTaXSdE.jpg?r=d46",
        },
        {
          id: 101,
          content_type: "movies",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47",
        },
        {
          id: 102,
          content_type: "movies",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbavgnObY8DhaHwS_j1T8l-F7qdZee8LeI0wm4-9r96TX1Ob217LzCSU-BK9_N80sJ3nE3otbTiy8YLVpeS0O7ckHKOH9vHKDzQ.jpg?r=f0f",
        },
        {
          id: 103,
          content_type: "movies",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60",
        },
        {
          id: 104,
          content_type: "movies",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbaL30ZRgebojoxbjew1oDMFFbUX1x7e4X0CMLCHLF8LKXBx2cyKW97dUW6idrCGk7fzgyqTdKl-gQeqsDzTKejY5nbBzTaXSdE.jpg?r=d46",
        },
        {
          id: 105,
          content_type: "movies",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60",
        },
        {
          id: 106,
          content_type: "movies",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbavgnObY8DhaHwS_j1T8l-F7qdZee8LeI0wm4-9r96TX1Ob217LzCSU-BK9_N80sJ3nE3otbTiy8YLVpeS0O7ckHKOH9vHKDzQ.jpg?r=f0f",
        },
        {
          id: 107,
          content_type: "movies",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47",
        },
        {
          id: 108,
          content_type: "movies",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60",
        },
        {
          id: 109,
          content_type: "movies",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47",
        },
      ],
    },
    {
      id: 4,
      title: "It's better with family",
      items: [
        {
          id: 100,
          content_type: "series",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbaL30ZRgebojoxbjew1oDMFFbUX1x7e4X0CMLCHLF8LKXBx2cyKW97dUW6idrCGk7fzgyqTdKl-gQeqsDzTKejY5nbBzTaXSdE.jpg?r=d46",
        },
        {
          id: 101,
          content_type: "series",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47",
        },
        {
          id: 102,
          content_type: "series",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbavgnObY8DhaHwS_j1T8l-F7qdZee8LeI0wm4-9r96TX1Ob217LzCSU-BK9_N80sJ3nE3otbTiy8YLVpeS0O7ckHKOH9vHKDzQ.jpg?r=f0f",
        },
        {
          id: 103,
          content_type: "series",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60",
        },
        {
          id: 104,
          content_type: "series",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbaL30ZRgebojoxbjew1oDMFFbUX1x7e4X0CMLCHLF8LKXBx2cyKW97dUW6idrCGk7fzgyqTdKl-gQeqsDzTKejY5nbBzTaXSdE.jpg?r=d46",
        },
        {
          id: 105,
          content_type: "series",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60",
        },
        {
          id: 106,
          content_type: "series",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbavgnObY8DhaHwS_j1T8l-F7qdZee8LeI0wm4-9r96TX1Ob217LzCSU-BK9_N80sJ3nE3otbTiy8YLVpeS0O7ckHKOH9vHKDzQ.jpg?r=f0f",
        },
        {
          id: 107,
          content_type: "series",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47",
        },
        {
          id: 108,
          content_type: "series",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60",
        },
        {
          id: 109,
          content_type: "series",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47",
        },
      ],
    },
    {
      id: 5,
      title: "Crime drama series",
      items: [
        {
          id: 100,
          content_type: "movies",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbaL30ZRgebojoxbjew1oDMFFbUX1x7e4X0CMLCHLF8LKXBx2cyKW97dUW6idrCGk7fzgyqTdKl-gQeqsDzTKejY5nbBzTaXSdE.jpg?r=d46",
        },
        {
          id: 101,
          content_type: "movies",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47",
        },
        {
          id: 102,
          content_type: "movies",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbavgnObY8DhaHwS_j1T8l-F7qdZee8LeI0wm4-9r96TX1Ob217LzCSU-BK9_N80sJ3nE3otbTiy8YLVpeS0O7ckHKOH9vHKDzQ.jpg?r=f0f",
        },
        {
          id: 103,
          content_type: "movies",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60",
        },
        {
          id: 104,
          content_type: "movies",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbaL30ZRgebojoxbjew1oDMFFbUX1x7e4X0CMLCHLF8LKXBx2cyKW97dUW6idrCGk7fzgyqTdKl-gQeqsDzTKejY5nbBzTaXSdE.jpg?r=d46",
        },
        {
          id: 105,
          content_type: "movies",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60",
        },
        {
          id: 106,
          content_type: "movies",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbavgnObY8DhaHwS_j1T8l-F7qdZee8LeI0wm4-9r96TX1Ob217LzCSU-BK9_N80sJ3nE3otbTiy8YLVpeS0O7ckHKOH9vHKDzQ.jpg?r=f0f",
        },
        {
          id: 107,
          content_type: "movies",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47",
        },
        {
          id: 108,
          content_type: "movies",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60",
        },
        {
          id: 109,
          content_type: "movies",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47",
        },
      ],
    },
  ];

  const TitleInformation = ({ titleId }: { titleId: number }) => {
    const title_example = {
      id: 10,
      year_released: 2020,
      content_type: "series",
      categories: ["Action", "Drama", "Thriller"],
      last_season_watched: 2,
      thumbnail_url:
        "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABXqJ0n6iOgX7sO9OmXUKMKwW-eiBkDvBLHllMMxnOuR3bEs4Tbdq3lO_KFuKhgW9IfMmgSTy8uuLOqA_kgrNQbWbIHYcAIeas_Em.webp?r=c31",
      last_episode_watched: 17,
      description:
        "After a brutal attack on his wife and daughter, Dr. Paul Kersey resorts to his own brand of justice to exact violent revenge.",
      cast: ["Bruce Willis", "Vincent D'Onofrio", "Elisabeth Shue"],
      genres: ["Action", "Crime", "Drama"],
      director: "Pierre Morel",
      number_of_seasons: 3,
      number_of_episodes: 9,
      episodes: [
        {
          episode_id: 5,
          season: 2,
          episode: 1,
          title: "Pilot",
          description:
            "After a brutal attack on his wife and daughter, Dr. Paul Kersey resorts to his own brand of justice to exact violent revenge.",
          duration: "45m",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbavgnObY8DhaHwS_j1T8l-F7qdZee8LeI0wm4-9r96TX1Ob217LzCSU-BK9_N80sJ3nE3otbTiy8YLVpeS0O7ckHKOH9vHKDzQ.jpg?r=f0f",
        },
        {
          episode_id: 6,
          season: 2,
          episode: 2,
          title: "The First Case",
          description:
            "After a brutal attack on his wife and daughter, Dr. Paul Kersey resorts to his own brand of justice to exact violent revenge.",
          duration: "50m",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbavgnObY8DhaHwS_j1T8l-F7qdZee8LeI0wm4-9r96TX1Ob217LzCSU-BK9_N80sJ3nE3otbTiy8YLVpeS0O7ckHKOH9vHKDzQ.jpg?r=f0f",
        },
        {
          episode_id: 7,
          season: 2,
          episode: 3,
          title: "Revenge",
          description:
            "After a brutal attack on his wife and daughter, Dr. Paul Kersey resorts to his own brand of justice to exact violent revenge.",
          duration: "48m",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbavgnObY8DhaHwS_j1T8l-F7qdZee8LeI0wm4-9r96TX1Ob217LzCSU-BK9_N80sJ3nE3otbTiy8YLVpeS0O7ckHKOH9vHKDzQ.jpg?r=f0f",
        },
        {
          episode_id: 8,
          season: 2,
          episode: 4,
          title: "The Second Case",
          description:
            "After a brutal attack on his wife and daughter, Dr. Paul Kersey resorts to his own brand of justice to exact violent revenge.",
          duration: "52m",
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbavgnObY8DhaHwS_j1T8l-F7qdZee8LeI0wm4-9r96TX1Ob217LzCSU-BK9_N80sJ3nE3otbTiy8YLVpeS0O7ckHKOH9vHKDzQ.jpg?r=f0f",
        },
      ],
    };

    const title_example_movies = {
      id: 10,
      year_released: 2020,
      content_type: "movies",
      categories: ["Action", "Drama", "Thriller"],
      thumbnail_url:
        "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABXqJ0n6iOgX7sO9OmXUKMKwW-eiBkDvBLHllMMxnOuR3bEs4Tbdq3lO_KFuKhgW9IfMmgSTy8uuLOqA_kgrNQbWbIHYcAIeas_Em.webp?r=c31",
      description:
        "After a brutal attack on his wife and daughter, Dr. Paul Kersey resorts to his own brand of justice to exact violent revenge.",
      cast: ["Bruce Willis", "Vincent D'Onofrio", "Elisabeth Shue"],
      genres: [
        "Action and adventure movies",
        "Police movies",
        "Movies to smile",
      ],
      director: "Pierre Morel",
    };

    return (
      <div className="w-[900px] bg-gray-800/40 overflow-y-scroll scrollbar-hide">
        <div
          className="relative bg-cover bg-center w-full h-[500px] rounded"
          style={{
            backgroundImage: `url(${title_example.thumbnail_url})`,
          }}
        >
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent rounded" />
          <div className="absolute bottom-6 left-6 z-10">
            <div className="flex flex-row items-center gap-3">
              <button className="flex flex-row items-center bg-white text-black font-semibold hover:bg-gray-100/40 px-4 py-2 rounded">
                <Play size={24} color="#000000" fill="#000000" />
                <span className="ml-2">Resume</span>
              </button>
              <div className="rounded-full flex justify-center items-center w-10 h-10 border-2 hover:border-white border-gray-400">
                <Plus size={24} color="#FFFFFF" />
              </div>
              <div className="rounded-full flex justify-center items-center w-10 h-10 border-2 hover:border-white border-gray-400">
                <ThumbsUp size={20} color="#FFFFFF" fill="#FFFFFF" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full px-10 py-10">
          <div className="w-2/3">
            <div className="flex flex-row items-center gap-5 text-gray-400 text-sm">
              <h1>{title_example.year_released}</h1>
              <h1>{title_example.number_of_seasons} parts</h1>
            </div>
            <div className="flex flex-row items-center my-3">
              <div className="border-2 border-gray-100/50 px-2 py-1">
                <p className="text-sm font-bold">TV-MA</p>
              </div>
              {title_example.categories.map((category, index) => (
                <p key={index} className="text-sm ml-2 text-white">
                  {category}
                </p>
              ))}
            </div>
            {title_example.content_type === "series" && (
              <div>
                <p>
                  T{title_example.last_season_watched}:E
                  {title_example.last_episode_watched}
                </p>
              </div>
            )}
            <p className="text-white font-bold">{title_example.description}</p>
          </div>
          <div className="w-1/3">
            <div className="flex flex-row flex-wrap">
              <h1 className="text-gray-300 text-sm">Cast: </h1>
              {title_example.cast.map((actor, index) => (
                <span key={index} className="text-sm text-white mr-1">
                  {actor},
                </span>
              ))}
            </div>
            <div className="flex flex-row flex-wrap mt-3">
              <h1 className="text-gray-300 text-sm">Genres: </h1>
              {title_example.genres.map((genre, index) => (
                <span key={index} className="text-sm text-white mr-1">
                  {genre},
                </span>
              ))}
            </div>
          </div>
        </div>
        {title_example.content_type === "series" && (
          <>
            <div className="flex flex-row items-center px-10 pb-5">
              <div className="flex items-center justify-between w-full">
                <h1 className="text-white font-bold text-2xl text-left">
                  Episodes
                </h1>
                <select className="bg-black text-white border w-32 border-gray-500 rounded px-3 py-1">
                  {Array.from({ length: title_example.number_of_seasons }).map(
                    (_, index) => (
                      <option key={index} value={index + 1}>
                        Season {index + 1}
                      </option>
                    )
                  )}
                </select>
              </div>
            </div>
            <div className="px-10 pb-15">
              {title_example.episodes.map((item) => (
                <div
                  key={item.episode_id}
                  className="flex hover:cursor-pointer flex-row items-center mb-5 border-b border-gray-500 pb-5"
                >
                  <h1 className="font-bold text-2xl">{item.episode}</h1>
                  <div className="flex flex-row items-center">
                    <Image
                      src={item.thumbnail_url}
                      alt="thumbnail_url"
                      width={120}
                      height={15}
                      className="mx-5"
                    />
                    <div className="flex flex-col">
                      <div className="flex flex-row items-center justify-between">
                        <h1 className="font-bold">{item.title}</h1>
                        <h2 className="font-bold">{item.duration}</h2>
                      </div>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

  const Carrousels = () => {
    const scrollRefs = useRef<Record<number, HTMLDivElement | null>>({});

    const scrollBy = (id: number, distance: number) => {
      const el = scrollRefs.current[id];
      if (el) el.scrollBy({ left: distance, behavior: "smooth" });
    };

    return api_data_example.map((carrousel) => (
      <div key={carrousel.id} className="my-8">
        <h1 className="font-bold text-xl mb-3">{carrousel.title}</h1>
        <div className="relative">
          <button
            onClick={() => scrollBy(carrousel.id, -1200)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80"
          >
            ‹
          </button>
          <div
            ref={(el: any) => (scrollRefs.current[carrousel.id] = el)}
            className="flex overflow-x-auto scroll-smooth gap-2 px-14"
          >
            {carrousel.items.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedTitleId(item.id)}
                className="
                shrink-0
                w-[20%]
                min-w-60
                hover:scale-105
                transition-transform
                duration-300
                cursor-pointer
              "
              >
                <div className="relative aspect-video">
                  <Image
                    src={item.thumbnail_url}
                    alt={`thumbnail_${item.id}`}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => scrollBy(carrousel.id, 1200)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80"
          >
            ›
          </button>
        </div>
      </div>
    ));
  };

  return (
    <main className="text-white">
      <Navbar />
      <section className="relative bg-[url(/main_hero.webp)] bg-cover bg-center min-h-[90vh] pt-80 pl-20">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <div className="flex flex-row items-center">
            <div className="w-15 h-15 bg-red-600 rounded-lg flex items-center justify-center">
              <Image
                src="/white_top.png"
                alt="white_top10_icon"
                width={50}
                height={20}
              />
            </div>
            <h1 className="text-xl ml-5 font-bold text-white">
              Number 3 in movies today
            </h1>
          </div>
          <p className="text-white font-medium w-[400px] pt-10">
            After a brutal attack on his wife and daughter, Dr. Paul Kersey
            resorts to his own brand of justice to exact violent revenge.
          </p>
          <div className="flex flex-row items-center gap-5 mt-5">
            <button className="flex font-bold flex-row hover:bg-gray-500/60 items-center bg-white px-15 gap-3 py-2 rounded text-black">
              <Image
                src="/white_play.png"
                alt="white_play_icon"
                width={20}
                height={20}
              />
              Reproduce
            </button>
            <button className="flex flex-row items-center text-white hover:bg-gray-600/60 bg-gray-500/60 gap-3 px-15 py-2 rounded">
              <Image
                src="/white_information.png"
                alt="white_info_icon"
                width={20}
                height={20}
              />
              More information
            </button>
          </div>
        </div>
      </section>

      <div className="px-14 mt-10">
        <Carrousels />
        {selectedTitleId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-black/90"
              onClick={() => setSelectedTitleId(null)}
            />
            <div
              className="relative z-10 max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedTitleId(null)}
                className="absolute top-4 right-4 z-20 text-white text-2xl hover:scale-110"
              >
                ×
              </button>
              <TitleInformation titleId={selectedTitleId} />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
