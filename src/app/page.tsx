import { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";
import Icons from "./icons";

export const metadata: Metadata = {
    title: `Home | ${process.env.APP_NAME}`,
    description: "Onde a magia acontece.",
};

export default function Home() {
    const {
        LinkIcon
    } = Icons;

    const QUICK_LINKS = [
        { id: "user", path: "#", name: "Adicionar utilizadores", description: "Adicione ou edite utilizadores para o seu ambiente." },
        { id: "team", path: "#", name: "Gerenciar membros", description: "Faça gestão de membros de todas equipas no seu controlo." },
        { id: "plan", path: "#", name: "Criar planos", description: "Crie, edite e publique planos para as suas equipas" },
        { id: "reports", path: "#", name: "Extrair relatórios", description: "Faça a extração de resultados dos seus relatórios" },
        { id: "campaigns", path: "#", name: "Minhas campanhas", description: "Veja a desempenho das suas campanhas" }
    ];

    const KPIS = [
        { id: "sales", title: "Vendas", value: 1200 },
        { id: "visits", title: "Visitas concluidas", value: 454 },
        { id: "increase", title: "Aumentos", value: "25%" },
    ];

    return <Fragment>
        <section id="quick-links" className="border-b flex flex-row gap-3 w-full">
            <h2 className="font-bold text-xl">
                <span className="italic opacity-30 mr-2">#</span>

                Links rápidos
            </h2>

            <ul>
                {QUICK_LINKS.map(({ id, name, path, description }) => <li key={id}>
                    <Link href={path}>{name}</Link>

                    <span>{description}</span>

                    <LinkIcon />
                </li>)}
            </ul>
        </section>

        <section id="home-panel" className="w-full">
            <section id="kpis" className="flex flex-col gap-3 w-full">
                <ul className="w-full flex flex-row justify-start items-start gap-4">
                    {KPIS.map(({ id, title, value }) => <li key={id} className="flex flex-col justify-start items-start">
                        <span className="text-sm">{title}</span>

                        <span className="font-extrabold text-2xl">{value}</span>
                    </li>)}
                </ul>
            </section>
        </section>
    </Fragment>;
}
