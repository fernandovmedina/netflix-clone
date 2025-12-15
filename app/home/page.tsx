"use client";

import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
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
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbaL30ZRgebojoxbjew1oDMFFbUX1x7e4X0CMLCHLF8LKXBx2cyKW97dUW6idrCGk7fzgyqTdKl-gQeqsDzTKejY5nbBzTaXSdE.jpg?r=d46",
        },
        {
          id: 101,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47",
        },
        {
          id: 102,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbavgnObY8DhaHwS_j1T8l-F7qdZee8LeI0wm4-9r96TX1Ob217LzCSU-BK9_N80sJ3nE3otbTiy8YLVpeS0O7ckHKOH9vHKDzQ.jpg?r=f0f",
        },
        {
          id: 103,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60",
        },
        {
          id: 104,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbaL30ZRgebojoxbjew1oDMFFbUX1x7e4X0CMLCHLF8LKXBx2cyKW97dUW6idrCGk7fzgyqTdKl-gQeqsDzTKejY5nbBzTaXSdE.jpg?r=d46",
        },
        {
          id: 105,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60",
        },
        {
          id: 106,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbavgnObY8DhaHwS_j1T8l-F7qdZee8LeI0wm4-9r96TX1Ob217LzCSU-BK9_N80sJ3nE3otbTiy8YLVpeS0O7ckHKOH9vHKDzQ.jpg?r=f0f",
        },
        {
          id: 107,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47",
        },
        {
          id: 108,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60",
        },
        {
          id: 109,
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
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbaL30ZRgebojoxbjew1oDMFFbUX1x7e4X0CMLCHLF8LKXBx2cyKW97dUW6idrCGk7fzgyqTdKl-gQeqsDzTKejY5nbBzTaXSdE.jpg?r=d46",
        },
        {
          id: 101,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47",
        },
        {
          id: 102,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbavgnObY8DhaHwS_j1T8l-F7qdZee8LeI0wm4-9r96TX1Ob217LzCSU-BK9_N80sJ3nE3otbTiy8YLVpeS0O7ckHKOH9vHKDzQ.jpg?r=f0f",
        },
        {
          id: 103,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60",
        },
        {
          id: 104,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbaL30ZRgebojoxbjew1oDMFFbUX1x7e4X0CMLCHLF8LKXBx2cyKW97dUW6idrCGk7fzgyqTdKl-gQeqsDzTKejY5nbBzTaXSdE.jpg?r=d46",
        },
        {
          id: 105,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60",
        },
        {
          id: 106,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbavgnObY8DhaHwS_j1T8l-F7qdZee8LeI0wm4-9r96TX1Ob217LzCSU-BK9_N80sJ3nE3otbTiy8YLVpeS0O7ckHKOH9vHKDzQ.jpg?r=f0f",
        },
        {
          id: 107,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47",
        },
        {
          id: 108,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60",
        },
        {
          id: 109,
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
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbaL30ZRgebojoxbjew1oDMFFbUX1x7e4X0CMLCHLF8LKXBx2cyKW97dUW6idrCGk7fzgyqTdKl-gQeqsDzTKejY5nbBzTaXSdE.jpg?r=d46",
        },
        {
          id: 101,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47",
        },
        {
          id: 102,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbavgnObY8DhaHwS_j1T8l-F7qdZee8LeI0wm4-9r96TX1Ob217LzCSU-BK9_N80sJ3nE3otbTiy8YLVpeS0O7ckHKOH9vHKDzQ.jpg?r=f0f",
        },
        {
          id: 103,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60",
        },
        {
          id: 104,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbaL30ZRgebojoxbjew1oDMFFbUX1x7e4X0CMLCHLF8LKXBx2cyKW97dUW6idrCGk7fzgyqTdKl-gQeqsDzTKejY5nbBzTaXSdE.jpg?r=d46",
        },
        {
          id: 105,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60",
        },
        {
          id: 106,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbavgnObY8DhaHwS_j1T8l-F7qdZee8LeI0wm4-9r96TX1Ob217LzCSU-BK9_N80sJ3nE3otbTiy8YLVpeS0O7ckHKOH9vHKDzQ.jpg?r=f0f",
        },
        {
          id: 107,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47",
        },
        {
          id: 108,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60",
        },
        {
          id: 109,
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
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbaL30ZRgebojoxbjew1oDMFFbUX1x7e4X0CMLCHLF8LKXBx2cyKW97dUW6idrCGk7fzgyqTdKl-gQeqsDzTKejY5nbBzTaXSdE.jpg?r=d46",
        },
        {
          id: 101,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47",
        },
        {
          id: 102,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbavgnObY8DhaHwS_j1T8l-F7qdZee8LeI0wm4-9r96TX1Ob217LzCSU-BK9_N80sJ3nE3otbTiy8YLVpeS0O7ckHKOH9vHKDzQ.jpg?r=f0f",
        },
        {
          id: 103,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60",
        },
        {
          id: 104,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbaL30ZRgebojoxbjew1oDMFFbUX1x7e4X0CMLCHLF8LKXBx2cyKW97dUW6idrCGk7fzgyqTdKl-gQeqsDzTKejY5nbBzTaXSdE.jpg?r=d46",
        },
        {
          id: 105,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60",
        },
        {
          id: 106,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbavgnObY8DhaHwS_j1T8l-F7qdZee8LeI0wm4-9r96TX1Ob217LzCSU-BK9_N80sJ3nE3otbTiy8YLVpeS0O7ckHKOH9vHKDzQ.jpg?r=f0f",
        },
        {
          id: 107,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47",
        },
        {
          id: 108,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60",
        },
        {
          id: 109,
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
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbaL30ZRgebojoxbjew1oDMFFbUX1x7e4X0CMLCHLF8LKXBx2cyKW97dUW6idrCGk7fzgyqTdKl-gQeqsDzTKejY5nbBzTaXSdE.jpg?r=d46",
        },
        {
          id: 101,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47",
        },
        {
          id: 102,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbavgnObY8DhaHwS_j1T8l-F7qdZee8LeI0wm4-9r96TX1Ob217LzCSU-BK9_N80sJ3nE3otbTiy8YLVpeS0O7ckHKOH9vHKDzQ.jpg?r=f0f",
        },
        {
          id: 103,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60",
        },
        {
          id: 104,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbaL30ZRgebojoxbjew1oDMFFbUX1x7e4X0CMLCHLF8LKXBx2cyKW97dUW6idrCGk7fzgyqTdKl-gQeqsDzTKejY5nbBzTaXSdE.jpg?r=d46",
        },
        {
          id: 105,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60",
        },
        {
          id: 106,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbavgnObY8DhaHwS_j1T8l-F7qdZee8LeI0wm4-9r96TX1Ob217LzCSU-BK9_N80sJ3nE3otbTiy8YLVpeS0O7ckHKOH9vHKDzQ.jpg?r=f0f",
        },
        {
          id: 107,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47",
        },
        {
          id: 108,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60",
        },
        {
          id: 109,
          thumbnail_url:
            "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47",
        },
      ],
    },
  ];

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
      </div>
    </main>
  );
}
