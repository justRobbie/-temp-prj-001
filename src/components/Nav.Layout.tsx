"use client"

import { usePathname } from "next/navigation";
import { HTMLAttributes } from "react";
import { COMP_FOOTER_LINKS } from "./components.global";
import Link from "next/link";

const LayoutNavigator = (props: HTMLAttributes<HTMLElement>) => {
    const pathname = usePathname();

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
    </nav>
};

export default LayoutNavigator;