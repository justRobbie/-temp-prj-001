"use client"

import { usePathname } from "next/navigation";
import { HTMLAttributes, useEffect, useState } from "react";
import { COMP_FOOTER_LINKS } from "./components.global";
import Link from "next/link";
import Icons from "@/app/icons";

const LayoutNavigator = (props: HTMLAttributes<HTMLElement>) => {
    const {
        DarkModeIcon,
        LightModeIcon
    } = Icons;

    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const [theme, toggle] = useState<"light" | "dark">(prefersDarkMode ? "dark" : "light");
    const pathname = usePathname();

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return <nav {...props}>
        <h1 className="font-extrabold text-2xl">
            {pathname === "/"
                ? process.env.NEXT_PUBLIC_APP_NAME
                
                : <Link href={"/"} className="opacity-50 hover:opacity-100">
                    {process.env.NEXT_PUBLIC_APP_NAME}
                </Link>
            }

            {pathname === "/" ? null : <>
                <span className="opacity-15 mx-2">&gt;</span>

                <span className="underline">
                    {COMP_FOOTER_LINKS.find(({ link }) => link === pathname)?.name}
                </span>
            </>}
        </h1>

        <button type="button" className="ml-auto" onClick={() => toggle(t => t === "dark" ? "light" : "dark")}>
            {theme === "dark" && <LightModeIcon />}
            {theme === "light" && <DarkModeIcon />}
        </button>
    </nav>
};

export default LayoutNavigator;