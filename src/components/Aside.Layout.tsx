"use client"

import Link from "next/link";
import { COMP_FOOTER_LINKS } from "./components.global"
import { usePathname } from "next/navigation";
import { HTMLAttributes } from "react";

const LayoutAsideMenu = (props: HTMLAttributes<HTMLElement>) => {
    const pathname = usePathname();

    return <aside {...props}>
        <ul>
            {pathname !== "/login" && COMP_FOOTER_LINKS.map(({ id, name, link, icon }) =>
                <li key={id}>
                    <Link href={link} data-selected={link === pathname}>
                        {icon}

                        <span>{name}</span>
                    </Link>
                </li>
            )}
        </ul>
    </aside>
}

export default LayoutAsideMenu;