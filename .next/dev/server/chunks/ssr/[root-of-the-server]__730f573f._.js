module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deemlol$2f$next$2d$icons$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@deemlol/next-icons/build/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
;
const Navbar = ()=>{
    const [uuid, setUuid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setUuid(new URLSearchParams(window.location.search).get("uuid"));
    }, []);
    const ProfileView = ({ url, name })=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-row items-center mb-3 gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: url,
                    alt: name,
                    width: 30,
                    height: 15
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm hover:underline",
                    children: name
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Navbar.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    const ProfileDropdown = ()=>{
        const api_example = {
            profiles: [
                {
                    id: 1,
                    name: "Fernando",
                    url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABW7Wui3ZqHqBvl3R__TmY0sDZF-xBxJJinhVWRwu7OmYkF2bdwH4nqfnyT3YQ-JshQvap33bDbRLACSoadpKwbIQIBktdtHjxw.png?r=201"
                },
                {
                    id: 2,
                    name: "Mariajose",
                    url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABW7Wui3ZqHqBvl3R__TmY0sDZF-xBxJJinhVWRwu7OmYkF2bdwH4nqfnyT3YQ-JshQvap33bDbRLACSoadpKwbIQIBktdtHjxw.png?r=201"
                },
                {
                    id: 3,
                    name: "Norma",
                    url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABW7Wui3ZqHqBvl3R__TmY0sDZF-xBxJJinhVWRwu7OmYkF2bdwH4nqfnyT3YQ-JshQvap33bDbRLACSoadpKwbIQIBktdtHjxw.png?r=201"
                }
            ]
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                api_example.profiles.map((profile)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileView, {
                        url: profile.url,
                        name: profile.name
                    }, profile.id, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-row items-center my-3 gap-3 text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deemlol$2f$next$2d$icons$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Edit2"], {
                            size: 24,
                            color: "#FFFFFF"
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "",
                            className: "hover:cursor-pointer hover:underline",
                            children: "Manage profiles"
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-row items-center mb-3 gap-3 text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deemlol$2f$next$2d$icons$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowRightCircle"], {
                            size: 24,
                            color: "#FFFFFF"
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "",
                            className: "hover:cursor-pointer hover:underline",
                            children: "Transfer profile"
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-row items-center mb-3 gap-3 text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deemlol$2f$next$2d$icons$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["User"], {
                            size: 24,
                            color: "#FFFFFF"
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "",
                            className: "hover:cursor-pointer hover:underline",
                            children: "Account"
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-row items-center pb-3 gap-3 text-sm border-b border-gray-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deemlol$2f$next$2d$icons$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Info"], {
                            size: 24,
                            color: "#FFFFFF"
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "",
                            className: "hover:cursor-pointer hover:underline",
                            children: "Help center"
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-row items-center hover:font-bold text-sm",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "",
                        className: "hover:cursor-pointer hover:underline",
                        children: "Log out"
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Navbar.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "text-white flex flex-row items-center px-14 py-4 w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-1/12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: `/home?uuid=${uuid}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/netflix_logo.svg",
                        alt: "netflix_logo",
                        width: 100,
                        height: 15
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-row items-center w-9/12 justify-start px-7 gap-5 text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `/home?uuid=${uuid}`,
                        className: "hover:text-gray-400/90",
                        children: "Home"
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `/home/series?uuid=${uuid}`,
                        className: "hover:text-gray-400/90",
                        children: "Series"
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `/home/movies?uuid=${uuid}`,
                        className: "hover:text-gray-400/90",
                        children: "Movies"
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `/home/new_arrivals?uuid=${uuid}`,
                        className: "hover:text-gray-400/90",
                        children: "Popular new arrivals"
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `/home/my_list?uuid=${uuid}`,
                        className: "hover:text-gray-400/90",
                        children: "My List"
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-row items-center w-2/12 gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/white_search.png",
                        alt: "white_search_icon",
                        width: 30,
                        height: 15
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "",
                        className: "text-sm",
                        children: "Children"
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/white_notifications.png",
                        alt: "white_notifications",
                        width: 30,
                        height: 15
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative group flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABW7Wui3ZqHqBvl3R__TmY0sDZF-xBxJJinhVWRwu7OmYkF2bdwH4nqfnyT3YQ-JshQvap33bDbRLACSoadpKwbIQIBktdtHjxw.png?r=201",
                                        alt: "profile_image",
                                        width: 30,
                                        height: 15
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/white_dropdown.png",
                                        alt: "white_dropdown_icon",
                                        width: 15,
                                        height: 15
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-0 right-0 top-full h-3"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-0 top-full mt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-150 bg-black/90 rounded shadow-lg p-3 min-w-[200px] z-50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileDropdown, {}, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navbar.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/home/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deemlol$2f$next$2d$icons$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@deemlol/next-icons/build/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Home() {
    const [selectedTitleId, setSelectedTitleId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const uuid = new URLSearchParams(window.location.search).get("uuid");
    }, []);
    const api_data_example = [
        {
            id: 1,
            title: "Continue viewing content from Fernando",
            items: [
                {
                    id: 100,
                    content_type: "series",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbaL30ZRgebojoxbjew1oDMFFbUX1x7e4X0CMLCHLF8LKXBx2cyKW97dUW6idrCGk7fzgyqTdKl-gQeqsDzTKejY5nbBzTaXSdE.jpg?r=d46"
                },
                {
                    id: 101,
                    content_type: "movies",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47"
                },
                {
                    id: 102,
                    content_type: "series",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbavgnObY8DhaHwS_j1T8l-F7qdZee8LeI0wm4-9r96TX1Ob217LzCSU-BK9_N80sJ3nE3otbTiy8YLVpeS0O7ckHKOH9vHKDzQ.jpg?r=f0f"
                },
                {
                    id: 103,
                    content_type: "movies",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60"
                },
                {
                    id: 104,
                    content_type: "series",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbaL30ZRgebojoxbjew1oDMFFbUX1x7e4X0CMLCHLF8LKXBx2cyKW97dUW6idrCGk7fzgyqTdKl-gQeqsDzTKejY5nbBzTaXSdE.jpg?r=d46"
                },
                {
                    id: 105,
                    content_type: "movies",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60"
                },
                {
                    id: 106,
                    content_type: "series",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbavgnObY8DhaHwS_j1T8l-F7qdZee8LeI0wm4-9r96TX1Ob217LzCSU-BK9_N80sJ3nE3otbTiy8YLVpeS0O7ckHKOH9vHKDzQ.jpg?r=f0f"
                },
                {
                    id: 107,
                    content_type: "movies",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47"
                },
                {
                    id: 108,
                    content_type: "series",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60"
                },
                {
                    id: 109,
                    content_type: "movies",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47"
                }
            ]
        },
        {
            id: 2,
            title: "Binge-watchable series",
            items: [
                {
                    id: 100,
                    content_type: "series",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbaL30ZRgebojoxbjew1oDMFFbUX1x7e4X0CMLCHLF8LKXBx2cyKW97dUW6idrCGk7fzgyqTdKl-gQeqsDzTKejY5nbBzTaXSdE.jpg?r=d46"
                },
                {
                    id: 101,
                    content_type: "movies",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47"
                },
                {
                    id: 102,
                    content_type: "series",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbavgnObY8DhaHwS_j1T8l-F7qdZee8LeI0wm4-9r96TX1Ob217LzCSU-BK9_N80sJ3nE3otbTiy8YLVpeS0O7ckHKOH9vHKDzQ.jpg?r=f0f"
                },
                {
                    id: 103,
                    content_type: "movies",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60"
                },
                {
                    id: 104,
                    content_type: "series",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbaL30ZRgebojoxbjew1oDMFFbUX1x7e4X0CMLCHLF8LKXBx2cyKW97dUW6idrCGk7fzgyqTdKl-gQeqsDzTKejY5nbBzTaXSdE.jpg?r=d46"
                },
                {
                    id: 105,
                    content_type: "movies",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60"
                },
                {
                    id: 106,
                    content_type: "series",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbavgnObY8DhaHwS_j1T8l-F7qdZee8LeI0wm4-9r96TX1Ob217LzCSU-BK9_N80sJ3nE3otbTiy8YLVpeS0O7ckHKOH9vHKDzQ.jpg?r=f0f"
                },
                {
                    id: 107,
                    content_type: "movies",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47"
                },
                {
                    id: 108,
                    content_type: "series",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60"
                },
                {
                    id: 109,
                    content_type: "movies",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47"
                }
            ]
        },
        {
            id: 3,
            title: "Because you watched Baki",
            items: [
                {
                    id: 100,
                    content_type: "movies",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbaL30ZRgebojoxbjew1oDMFFbUX1x7e4X0CMLCHLF8LKXBx2cyKW97dUW6idrCGk7fzgyqTdKl-gQeqsDzTKejY5nbBzTaXSdE.jpg?r=d46"
                },
                {
                    id: 101,
                    content_type: "movies",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47"
                },
                {
                    id: 102,
                    content_type: "movies",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbavgnObY8DhaHwS_j1T8l-F7qdZee8LeI0wm4-9r96TX1Ob217LzCSU-BK9_N80sJ3nE3otbTiy8YLVpeS0O7ckHKOH9vHKDzQ.jpg?r=f0f"
                },
                {
                    id: 103,
                    content_type: "movies",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60"
                },
                {
                    id: 104,
                    content_type: "movies",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbaL30ZRgebojoxbjew1oDMFFbUX1x7e4X0CMLCHLF8LKXBx2cyKW97dUW6idrCGk7fzgyqTdKl-gQeqsDzTKejY5nbBzTaXSdE.jpg?r=d46"
                },
                {
                    id: 105,
                    content_type: "movies",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60"
                },
                {
                    id: 106,
                    content_type: "movies",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbavgnObY8DhaHwS_j1T8l-F7qdZee8LeI0wm4-9r96TX1Ob217LzCSU-BK9_N80sJ3nE3otbTiy8YLVpeS0O7ckHKOH9vHKDzQ.jpg?r=f0f"
                },
                {
                    id: 107,
                    content_type: "movies",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47"
                },
                {
                    id: 108,
                    content_type: "movies",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60"
                },
                {
                    id: 109,
                    content_type: "movies",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47"
                }
            ]
        },
        {
            id: 4,
            title: "It's better with family",
            items: [
                {
                    id: 100,
                    content_type: "series",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbaL30ZRgebojoxbjew1oDMFFbUX1x7e4X0CMLCHLF8LKXBx2cyKW97dUW6idrCGk7fzgyqTdKl-gQeqsDzTKejY5nbBzTaXSdE.jpg?r=d46"
                },
                {
                    id: 101,
                    content_type: "series",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47"
                },
                {
                    id: 102,
                    content_type: "series",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbavgnObY8DhaHwS_j1T8l-F7qdZee8LeI0wm4-9r96TX1Ob217LzCSU-BK9_N80sJ3nE3otbTiy8YLVpeS0O7ckHKOH9vHKDzQ.jpg?r=f0f"
                },
                {
                    id: 103,
                    content_type: "series",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60"
                },
                {
                    id: 104,
                    content_type: "series",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbaL30ZRgebojoxbjew1oDMFFbUX1x7e4X0CMLCHLF8LKXBx2cyKW97dUW6idrCGk7fzgyqTdKl-gQeqsDzTKejY5nbBzTaXSdE.jpg?r=d46"
                },
                {
                    id: 105,
                    content_type: "series",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60"
                },
                {
                    id: 106,
                    content_type: "series",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbavgnObY8DhaHwS_j1T8l-F7qdZee8LeI0wm4-9r96TX1Ob217LzCSU-BK9_N80sJ3nE3otbTiy8YLVpeS0O7ckHKOH9vHKDzQ.jpg?r=f0f"
                },
                {
                    id: 107,
                    content_type: "series",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47"
                },
                {
                    id: 108,
                    content_type: "series",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60"
                },
                {
                    id: 109,
                    content_type: "series",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47"
                }
            ]
        },
        {
            id: 5,
            title: "Crime drama series",
            items: [
                {
                    id: 100,
                    content_type: "movies",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbaL30ZRgebojoxbjew1oDMFFbUX1x7e4X0CMLCHLF8LKXBx2cyKW97dUW6idrCGk7fzgyqTdKl-gQeqsDzTKejY5nbBzTaXSdE.jpg?r=d46"
                },
                {
                    id: 101,
                    content_type: "movies",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47"
                },
                {
                    id: 102,
                    content_type: "movies",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbavgnObY8DhaHwS_j1T8l-F7qdZee8LeI0wm4-9r96TX1Ob217LzCSU-BK9_N80sJ3nE3otbTiy8YLVpeS0O7ckHKOH9vHKDzQ.jpg?r=f0f"
                },
                {
                    id: 103,
                    content_type: "movies",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60"
                },
                {
                    id: 104,
                    content_type: "movies",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbaL30ZRgebojoxbjew1oDMFFbUX1x7e4X0CMLCHLF8LKXBx2cyKW97dUW6idrCGk7fzgyqTdKl-gQeqsDzTKejY5nbBzTaXSdE.jpg?r=d46"
                },
                {
                    id: 105,
                    content_type: "movies",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60"
                },
                {
                    id: 106,
                    content_type: "movies",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbavgnObY8DhaHwS_j1T8l-F7qdZee8LeI0wm4-9r96TX1Ob217LzCSU-BK9_N80sJ3nE3otbTiy8YLVpeS0O7ckHKOH9vHKDzQ.jpg?r=f0f"
                },
                {
                    id: 107,
                    content_type: "movies",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47"
                },
                {
                    id: 108,
                    content_type: "movies",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb-SnQmFzQ2iEeDStNYu_l2zAvCnb34eIAI-S4405CMAkxlMORYCeaMt7KNIi1PWJtY1cwhGMmMCHBMRJTvssr-IzsWpXRYSn8M.jpg?r=f60"
                },
                {
                    id: 109,
                    content_type: "movies",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47"
                }
            ]
        }
    ];
    const TitleInformation = ({ titleId })=>{
        const title_example = {
            id: 10,
            year_released: 2020,
            content_type: "series",
            categories: [
                "Action",
                "Drama",
                "Thriller"
            ],
            last_season_watched: 2,
            thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABXqJ0n6iOgX7sO9OmXUKMKwW-eiBkDvBLHllMMxnOuR3bEs4Tbdq3lO_KFuKhgW9IfMmgSTy8uuLOqA_kgrNQbWbIHYcAIeas_Em.webp?r=c31",
            last_episode_watched: 17,
            description: "After a brutal attack on his wife and daughter, Dr. Paul Kersey resorts to his own brand of justice to exact violent revenge.",
            cast: [
                "Bruce Willis",
                "Vincent D'Onofrio",
                "Elisabeth Shue"
            ],
            genres: [
                "Action",
                "Crime",
                "Drama"
            ],
            director: "Pierre Morel",
            number_of_seasons: 3,
            number_of_episodes: 9,
            episodes: [
                {
                    episode_id: 5,
                    season: 2,
                    episode: 1,
                    title: "Pilot",
                    description: "After a brutal attack on his wife and daughter, Dr. Paul Kersey resorts to his own brand of justice to exact violent revenge.",
                    duration: "45m",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbavgnObY8DhaHwS_j1T8l-F7qdZee8LeI0wm4-9r96TX1Ob217LzCSU-BK9_N80sJ3nE3otbTiy8YLVpeS0O7ckHKOH9vHKDzQ.jpg?r=f0f"
                },
                {
                    episode_id: 6,
                    season: 2,
                    episode: 2,
                    title: "The First Case",
                    description: "After a brutal attack on his wife and daughter, Dr. Paul Kersey resorts to his own brand of justice to exact violent revenge.",
                    duration: "50m",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbavgnObY8DhaHwS_j1T8l-F7qdZee8LeI0wm4-9r96TX1Ob217LzCSU-BK9_N80sJ3nE3otbTiy8YLVpeS0O7ckHKOH9vHKDzQ.jpg?r=f0f"
                },
                {
                    episode_id: 7,
                    season: 2,
                    episode: 3,
                    title: "Revenge",
                    description: "After a brutal attack on his wife and daughter, Dr. Paul Kersey resorts to his own brand of justice to exact violent revenge.",
                    duration: "48m",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbavgnObY8DhaHwS_j1T8l-F7qdZee8LeI0wm4-9r96TX1Ob217LzCSU-BK9_N80sJ3nE3otbTiy8YLVpeS0O7ckHKOH9vHKDzQ.jpg?r=f0f"
                },
                {
                    episode_id: 8,
                    season: 2,
                    episode: 4,
                    title: "The Second Case",
                    description: "After a brutal attack on his wife and daughter, Dr. Paul Kersey resorts to his own brand of justice to exact violent revenge.",
                    duration: "52m",
                    thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbavgnObY8DhaHwS_j1T8l-F7qdZee8LeI0wm4-9r96TX1Ob217LzCSU-BK9_N80sJ3nE3otbTiy8YLVpeS0O7ckHKOH9vHKDzQ.jpg?r=f0f"
                }
            ]
        };
        const title_example_movies = {
            id: 10,
            year_released: 2020,
            content_type: "movies",
            categories: [
                "Action",
                "Drama",
                "Thriller"
            ],
            thumbnail_url: "https://occ-0-7553-114.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABXqJ0n6iOgX7sO9OmXUKMKwW-eiBkDvBLHllMMxnOuR3bEs4Tbdq3lO_KFuKhgW9IfMmgSTy8uuLOqA_kgrNQbWbIHYcAIeas_Em.webp?r=c31",
            description: "After a brutal attack on his wife and daughter, Dr. Paul Kersey resorts to his own brand of justice to exact violent revenge.",
            cast: [
                "Bruce Willis",
                "Vincent D'Onofrio",
                "Elisabeth Shue"
            ],
            genres: [
                "Action and adventure movies",
                "Police movies",
                "Movies to smile"
            ],
            director: "Pierre Morel"
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[900px] bg-gray-800/40 overflow-y-scroll scrollbar-hide",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative bg-cover bg-center w-full h-[500px] rounded",
                    style: {
                        backgroundImage: `url(${title_example.thumbnail_url})`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent rounded"
                        }, void 0, false, {
                            fileName: "[project]/app/home/page.tsx",
                            lineNumber: 441,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-6 left-6 z-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-row items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flex flex-row items-center bg-white text-black font-semibold hover:bg-gray-100/40 px-4 py-2 rounded",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deemlol$2f$next$2d$icons$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Play"], {
                                                size: 24,
                                                color: "#000000",
                                                fill: "#000000"
                                            }, void 0, false, {
                                                fileName: "[project]/app/home/page.tsx",
                                                lineNumber: 445,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2",
                                                children: "Resume"
                                            }, void 0, false, {
                                                fileName: "[project]/app/home/page.tsx",
                                                lineNumber: 446,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/home/page.tsx",
                                        lineNumber: 444,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-full flex justify-center items-center w-10 h-10 border-2 hover:border-white border-gray-400",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deemlol$2f$next$2d$icons$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Plus"], {
                                            size: 24,
                                            color: "#FFFFFF"
                                        }, void 0, false, {
                                            fileName: "[project]/app/home/page.tsx",
                                            lineNumber: 449,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/home/page.tsx",
                                        lineNumber: 448,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-full flex justify-center items-center w-10 h-10 border-2 hover:border-white border-gray-400",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deemlol$2f$next$2d$icons$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThumbsUp"], {
                                            size: 20,
                                            color: "#FFFFFF",
                                            fill: "#FFFFFF"
                                        }, void 0, false, {
                                            fileName: "[project]/app/home/page.tsx",
                                            lineNumber: 452,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/home/page.tsx",
                                        lineNumber: 451,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/home/page.tsx",
                                lineNumber: 443,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/home/page.tsx",
                            lineNumber: 442,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/home/page.tsx",
                    lineNumber: 435,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-row w-full px-10 py-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-2/3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-row items-center gap-5 text-gray-400 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            children: title_example.year_released
                                        }, void 0, false, {
                                            fileName: "[project]/app/home/page.tsx",
                                            lineNumber: 460,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            children: [
                                                title_example.number_of_seasons,
                                                " parts"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/home/page.tsx",
                                            lineNumber: 461,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/home/page.tsx",
                                    lineNumber: 459,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-row items-center my-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-2 border-gray-100/50 px-2 py-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-bold",
                                                children: "TV-MA"
                                            }, void 0, false, {
                                                fileName: "[project]/app/home/page.tsx",
                                                lineNumber: 465,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/home/page.tsx",
                                            lineNumber: 464,
                                            columnNumber: 15
                                        }, this),
                                        title_example.categories.map((category, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm ml-2 text-white",
                                                children: category
                                            }, index, false, {
                                                fileName: "[project]/app/home/page.tsx",
                                                lineNumber: 468,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/home/page.tsx",
                                    lineNumber: 463,
                                    columnNumber: 13
                                }, this),
                                title_example.content_type === "series" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "T",
                                            title_example.last_season_watched,
                                            ":E",
                                            title_example.last_episode_watched
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/home/page.tsx",
                                        lineNumber: 475,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/home/page.tsx",
                                    lineNumber: 474,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white font-bold",
                                    children: title_example.description
                                }, void 0, false, {
                                    fileName: "[project]/app/home/page.tsx",
                                    lineNumber: 481,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/home/page.tsx",
                            lineNumber: 458,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-1/3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-row flex-wrap",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-gray-300 text-sm",
                                            children: "Cast: "
                                        }, void 0, false, {
                                            fileName: "[project]/app/home/page.tsx",
                                            lineNumber: 485,
                                            columnNumber: 15
                                        }, this),
                                        title_example.cast.map((actor, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-white mr-1",
                                                children: [
                                                    actor,
                                                    ","
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/app/home/page.tsx",
                                                lineNumber: 487,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/home/page.tsx",
                                    lineNumber: 484,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-row flex-wrap mt-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-gray-300 text-sm",
                                            children: "Genres: "
                                        }, void 0, false, {
                                            fileName: "[project]/app/home/page.tsx",
                                            lineNumber: 493,
                                            columnNumber: 15
                                        }, this),
                                        title_example.genres.map((genre, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-white mr-1",
                                                children: [
                                                    genre,
                                                    ","
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/app/home/page.tsx",
                                                lineNumber: 495,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/home/page.tsx",
                                    lineNumber: 492,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/home/page.tsx",
                            lineNumber: 483,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/home/page.tsx",
                    lineNumber: 457,
                    columnNumber: 9
                }, this),
                title_example.content_type === "series" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-row items-center px-10 pb-5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-white font-bold text-2xl text-left",
                                        children: "Episodes"
                                    }, void 0, false, {
                                        fileName: "[project]/app/home/page.tsx",
                                        lineNumber: 506,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "bg-black text-white border w-32 border-gray-500 rounded px-3 py-1",
                                        children: Array.from({
                                            length: title_example.number_of_seasons
                                        }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: index + 1,
                                                children: [
                                                    "Season ",
                                                    index + 1
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/app/home/page.tsx",
                                                lineNumber: 512,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/home/page.tsx",
                                        lineNumber: 509,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/home/page.tsx",
                                lineNumber: 505,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/home/page.tsx",
                            lineNumber: 504,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-10 pb-15",
                            children: title_example.episodes.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex hover:cursor-pointer flex-row items-center mb-5 border-b border-gray-500 pb-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "font-bold text-2xl",
                                            children: item.episode
                                        }, void 0, false, {
                                            fileName: "[project]/app/home/page.tsx",
                                            lineNumber: 526,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-row items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: item.thumbnail_url,
                                                    alt: "thumbnail_url",
                                                    width: 120,
                                                    height: 15,
                                                    className: "mx-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/home/page.tsx",
                                                    lineNumber: 528,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-row items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                    className: "font-bold",
                                                                    children: item.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/home/page.tsx",
                                                                    lineNumber: 537,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                    className: "font-bold",
                                                                    children: item.duration
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/home/page.tsx",
                                                                    lineNumber: 538,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/home/page.tsx",
                                                            lineNumber: 536,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm",
                                                            children: item.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/home/page.tsx",
                                                            lineNumber: 540,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/home/page.tsx",
                                                    lineNumber: 535,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/home/page.tsx",
                                            lineNumber: 527,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.episode_id, true, {
                                    fileName: "[project]/app/home/page.tsx",
                                    lineNumber: 522,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/home/page.tsx",
                            lineNumber: 520,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/app/home/page.tsx",
            lineNumber: 434,
            columnNumber: 7
        }, this);
    };
    const Carrousels = ()=>{
        const scrollRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
        const scrollBy = (id, distance)=>{
            const el = scrollRefs.current[id];
            if (el) el.scrollBy({
                left: distance,
                behavior: "smooth"
            });
        };
        return api_data_example.map((carrousel)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "my-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-bold text-xl mb-3",
                        children: carrousel.title
                    }, void 0, false, {
                        fileName: "[project]/app/home/page.tsx",
                        lineNumber: 562,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>scrollBy(carrousel.id, -1200),
                                className: "absolute left-0 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80",
                                children: "‹"
                            }, void 0, false, {
                                fileName: "[project]/app/home/page.tsx",
                                lineNumber: 564,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: (el)=>scrollRefs.current[carrousel.id] = el,
                                className: "flex overflow-x-auto scroll-smooth gap-2 px-14",
                                children: carrousel.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>setSelectedTitleId(item.id),
                                        className: " shrink-0 w-[20%] min-w-60 hover:scale-105 transition-transform duration-300 cursor-pointer ",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative aspect-video",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: item.thumbnail_url,
                                                alt: `thumbnail_${item.id}`,
                                                fill: true,
                                                className: "rounded-lg object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/app/home/page.tsx",
                                                lineNumber: 589,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/home/page.tsx",
                                            lineNumber: 588,
                                            columnNumber: 17
                                        }, this)
                                    }, item.id, false, {
                                        fileName: "[project]/app/home/page.tsx",
                                        lineNumber: 575,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/home/page.tsx",
                                lineNumber: 570,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>scrollBy(carrousel.id, 1200),
                                className: "absolute right-0 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80",
                                children: "›"
                            }, void 0, false, {
                                fileName: "[project]/app/home/page.tsx",
                                lineNumber: 599,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/home/page.tsx",
                        lineNumber: 563,
                        columnNumber: 9
                    }, this)
                ]
            }, carrousel.id, true, {
                fileName: "[project]/app/home/page.tsx",
                lineNumber: 561,
                columnNumber: 7
            }, this));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Navbar"], {}, void 0, false, {
                fileName: "[project]/app/home/page.tsx",
                lineNumber: 612,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative bg-[url(/main_hero.webp)] bg-cover bg-center min-h-[90vh] pt-80 pl-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/60"
                    }, void 0, false, {
                        fileName: "[project]/app/home/page.tsx",
                        lineNumber: 614,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-row items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-15 h-15 bg-red-600 rounded-lg flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/white_top.png",
                                            alt: "white_top10_icon",
                                            width: 50,
                                            height: 20
                                        }, void 0, false, {
                                            fileName: "[project]/app/home/page.tsx",
                                            lineNumber: 618,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/home/page.tsx",
                                        lineNumber: 617,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-xl ml-5 font-bold text-white",
                                        children: "Number 3 in movies today"
                                    }, void 0, false, {
                                        fileName: "[project]/app/home/page.tsx",
                                        lineNumber: 625,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/home/page.tsx",
                                lineNumber: 616,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white font-medium w-[400px] pt-10",
                                children: "After a brutal attack on his wife and daughter, Dr. Paul Kersey resorts to his own brand of justice to exact violent revenge."
                            }, void 0, false, {
                                fileName: "[project]/app/home/page.tsx",
                                lineNumber: 629,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-row items-center gap-5 mt-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flex font-bold flex-row hover:bg-gray-500/60 items-center bg-white px-15 gap-3 py-2 rounded text-black",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/white_play.png",
                                                alt: "white_play_icon",
                                                width: 20,
                                                height: 20
                                            }, void 0, false, {
                                                fileName: "[project]/app/home/page.tsx",
                                                lineNumber: 635,
                                                columnNumber: 15
                                            }, this),
                                            "Reproduce"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/home/page.tsx",
                                        lineNumber: 634,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flex flex-row items-center text-white hover:bg-gray-600/60 bg-gray-500/60 gap-3 px-15 py-2 rounded",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/white_information.png",
                                                alt: "white_info_icon",
                                                width: 20,
                                                height: 20
                                            }, void 0, false, {
                                                fileName: "[project]/app/home/page.tsx",
                                                lineNumber: 644,
                                                columnNumber: 15
                                            }, this),
                                            "More information"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/home/page.tsx",
                                        lineNumber: 643,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/home/page.tsx",
                                lineNumber: 633,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/home/page.tsx",
                        lineNumber: 615,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/home/page.tsx",
                lineNumber: 613,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-14 mt-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Carrousels, {}, void 0, false, {
                        fileName: "[project]/app/home/page.tsx",
                        lineNumber: 657,
                        columnNumber: 9
                    }, this),
                    selectedTitleId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-50 flex items-center justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-black/90",
                                onClick: ()=>setSelectedTitleId(null)
                            }, void 0, false, {
                                fileName: "[project]/app/home/page.tsx",
                                lineNumber: 660,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl",
                                onClick: (e)=>e.stopPropagation(),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSelectedTitleId(null),
                                        className: "absolute top-4 right-4 z-20 text-white text-2xl hover:scale-110",
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/app/home/page.tsx",
                                        lineNumber: 668,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TitleInformation, {
                                        titleId: selectedTitleId
                                    }, void 0, false, {
                                        fileName: "[project]/app/home/page.tsx",
                                        lineNumber: 674,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/home/page.tsx",
                                lineNumber: 664,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/home/page.tsx",
                        lineNumber: 659,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/home/page.tsx",
                lineNumber: 656,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/home/page.tsx",
        lineNumber: 611,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__730f573f._.js.map