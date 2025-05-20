"use client"

import { usePathname, useRouter } from "next/navigation";
import { HTMLAttributes, useEffect, useState } from "react";
import { COMP_FOOTER_LINKS } from "./components.global";
import Link from "next/link";
import Icons from "@/app/icons";

type themeType = "light" | "dark";

const LayoutNavigator = (props: HTMLAttributes<HTMLElement>) => {
    const {
        DarkModeIcon,
        LightModeIcon,
        LoadingIcon,
        LogoutIcon
    } = Icons;

    const router = useRouter()
    const [loading, setLoading] = useState(false);
    const [theme, toggle] = useState<themeType>("light");
    const pathname = usePathname();

    async function logout() {
        setLoading(true);

        const response = await fetch('/api/auth/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        })

        if (response.ok) router.push('/login');

        setLoading(false);
    }

    useEffect(() => {
        if (!window) return;

        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

        toggle(localStorage.getItem("theme") as themeType ?? prefersDarkMode ? "dark" : "light");
    }, []);

    useEffect(() => {
        if (!document.documentElement) return;

        document.documentElement.setAttribute("data-theme", theme);

        localStorage.setItem("theme", theme);
    }, [theme]);

    return <nav {...props}>
        <h1 className="font-extrabold text-2xl mr-auto" data-state={loading ? "disabled" : ""}>
            {["/", "/login"].includes(pathname)
                ? process.env.NEXT_PUBLIC_APP_NAME

                : <Link href={"/"} className="opacity-50 hover:opacity-100">
                    {process.env.NEXT_PUBLIC_APP_NAME}
                </Link>
            }

            {["/", "/login"].includes(pathname) ? null : <>
                <span className="opacity-15 mx-2">&gt;</span>

                <span className="underline">
                    {COMP_FOOTER_LINKS.find(({ link }) => link === pathname)?.name}
                </span>
            </>}
        </h1>

        <button type="button" onClick={() => toggle(t => t === "dark" ? "light" : "dark")}>
            {theme === "dark" && <LightModeIcon />}
            {theme === "light" && <DarkModeIcon />}
        </button>

        {!["/login"].includes(pathname) && <button title="Completar logout" type="button" onClick={logout} disabled={loading}>
            {loading ? <LoadingIcon className='animate-spin' /> : <LogoutIcon />}
        </button>}
    </nav>
};

export default LayoutNavigator;