"use client"

import Link from "next/link";
import { COMP_FOOTER_LINKS } from "./components.global"
import { usePathname } from "next/navigation";
import { HTMLAttributes } from "react";

const LayoutFooterMenu = (props: HTMLAttributes<HTMLElement>) => {
    const pathname = usePathname();

    switch (pathname) {
        case "/login": return null;

        default: return <footer {...props}>
            {COMP_FOOTER_LINKS.map(({ id, name, link, icon }) => <Link key={id} href={link} data-selected={link === pathname}>
                {icon}

                <span>{name}</span>
            </Link>)}
        </footer>;
    }
}

export default LayoutFooterMenu;