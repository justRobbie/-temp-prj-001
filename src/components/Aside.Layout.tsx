"use client"

import Link from "next/link";
import { COMP_FOOTER_LINKS } from "./components.global"
import { useParams, usePathname } from "next/navigation";
import { HTMLAttributes } from "react";
import Icons from "@/app/icons";
import { EBrandType } from "@/app";

const LayoutAsideMenu = (props: HTMLAttributes<HTMLElement>) => {
    const pathname = usePathname();
    const params = useParams<{ id: EBrandType }>();
    const { id } = params;

    const {
        LinkIcon,
    } = Icons;

    // const ACTIONS = [
    //     { id: "mv", title: "Marcar visitas", action: () => { } },
    //     { id: "ap", title: "Adicionar produtos", action: () => { } },
    //     { id: "er", title: "Extrair relatórios", action: () => { } },
    //     { id: "vp", title: "Ver promotores", action: () => { } },
    // ];

    const QUICK_LINKS = [
        { id: "user", path: "#", name: "Adicionar utilizadores", description: "Adicione ou edite utilizadores para o seu ambiente." },
        { id: "team", path: "/manager", name: "Gerenciar membros", description: "Faça gestão de membros de todas equipas no seu controlo." },
        { id: "plan", path: "#", name: "Criar planos", description: "Crie, edite e publique planos para as suas equipas" },
        { id: "reports", path: "#", name: "Extrair relatórios", description: "Faça a extração de resultados dos seus relatórios" },
        { id: "campaigns", path: "#", name: "Minhas campanhas", description: "Veja a desempenho das suas campanhas" }
    ];

    return <aside {...props}>
        <ul id="navigation-links">
            {pathname !== "/login" && COMP_FOOTER_LINKS.map(({ id:i, name, link, icon }) =>
                <li key={i}>
                    <Link href={`/${id}${link}`} data-selected={(link === "/" ? `/${id}` : `/${id}${link}`) === pathname}>
                        {icon}

                        <span>{name}</span>
                    </Link>
                </li>
            )}
        </ul>

        <hr />

        <section id="quick-links" className="flex flex-col gap-3 w-full">
            <h4 className="font-extrabold">
                <span className="italic opacity-30 mr-2">#</span>

                Links rápidos
            </h4>

            <ul>
                {QUICK_LINKS.map(({ id, name, path, description }) => <li key={id}>
                    <Link href={path}>{name}</Link>

                    <span>{description}</span>

                    <LinkIcon />
                </li>)}
            </ul>
        </section>

        {/* <hr />

        <section id="actions" >
            {ACTIONS.map(({ id, title }) => <button type="button" key={id}>
                {title}
            </button>)}
        </section> */}
    </aside>
}

export default LayoutAsideMenu;