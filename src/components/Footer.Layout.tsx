"use client"

import Link from "next/link";
import { COMP_FOOTER_LINKS } from "./components.global"
import { useParams, usePathname } from "next/navigation";
import { HTMLAttributes } from "react";
import { EBrandType } from "@/app";

const LayoutFooterMenu = (props: HTMLAttributes<HTMLElement>) => {
    const pathname = usePathname();
    const params = useParams<{ id: EBrandType }>();
    const { id } = params;

    console.log({ pathname, id });

    switch (pathname) {
        case "/login": return null;

        default: return <footer {...props}>
            {COMP_FOOTER_LINKS.map(({ id:i, name, link, icon }) => <Link key={i} href={`/${id}${link}`} data-selected={(link === "/" ? `/${id}` : `/${id}${link}`) === pathname}>
                {icon}

                <span>{name}</span>
            </Link>)}
        </footer>;
    }
}

export default LayoutFooterMenu;