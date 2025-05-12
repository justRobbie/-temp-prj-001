import { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";
import Icons from "./icons";
import Image from "next/image";
import DynamicTable from "@/components/DynamicTable";
import { PRODUCTS, VISITATIONS } from "@/constants";
import LuandaMap from "pub/images/map.png";
import LineChart from "@/components/Chart.Line";
import DoughnutChart from "@/components/Chart.Doughnut";

export const metadata: Metadata = {
    title: `Home | ${process.env.APP_NAME}`,
    description: "Onde a magia acontece.",
};

export default function Home() {
    const {
        ArrowUpIcon,
        LinkIcon,
        CloseIcon,
        StoreIcon,
        CameraIcon
    } = Icons;

    const QUICK_LINKS = [
        { id: "user", path: "#", name: "Adicionar utilizadores", description: "Adicione ou edite utilizadores para o seu ambiente." },
        { id: "team", path: "/manager", name: "Gerenciar membros", description: "Faça gestão de membros de todas equipas no seu controlo." },
        { id: "plan", path: "#", name: "Criar planos", description: "Crie, edite e publique planos para as suas equipas" },
        { id: "reports", path: "#", name: "Extrair relatórios", description: "Faça a extração de resultados dos seus relatórios" },
        { id: "campaigns", path: "#", name: "Minhas campanhas", description: "Veja a desempenho das suas campanhas" }
    ];

    const KPIS = [
        { id: "sales", title: "Vendas", value: 1200 },
        { id: "visits", title: "Visitas concluidas", value: 454 },
        { id: "increase", title: "Aumentos", value: "25%" },
        { id: "products", title: "Produtos", value: 432123 },
    ];

    const ACTIONS = [
        { id: "mv", title: "Marcar visitas", action: () => { } },
        { id: "ap", title: "Adicionar produtos", action: () => { } },
        { id: "er", title: "Extrair relatórios", action: () => { } },
        { id: "vp", title: "Ver promotores", action: () => { } },
    ];

    const VISIT_STATS = [
        { id: "stat-1", title: "Visitas feitas", value: VISITATIONS.reduce((a, b) => a + b["visitas"], 0), icon: <StoreIcon /> },
        { id: "stat-2", title: "Ruturas identificadas", value: VISITATIONS.reduce((a, b) => a + b["ruturas"], 0), icon: <CloseIcon /> },
        { id: "stat-3", title: "Fotos capturadas", value: 30, icon: <CameraIcon /> },
    ]

    return <Fragment>
        <section id="quick-links" className="border-b flex flex-col gap-3 w-full">
            <h2 className="font-bold">
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

        <section id="panel" className="w-full">
            <section id="line">
                <LineChart />
            </section>

            <section id="doughnut">
                <DoughnutChart />
            </section>

            <section id="kpis" className="flex flex-col gap-3 w-full">
                <h2 className="font-bold">
                    KPIs
                </h2>

                <ul>
                    {KPIS.map(({ id, title, value }) => <li key={id} className="flex flex-col justify-start items-start">
                        <span className="text-sm">{title}</span>

                        <span className="font-extrabold text-2xl">{value}</span>
                    </li>)}
                </ul>
            </section>
        </section>

        <section id="actions-visits" className="w-full">
            <section id="actions" >
                {ACTIONS.map(({ id, title }) => <button type="button" key={id}>
                    {title}
                </button>)}
            </section>

            <section id="visits" >
                <h2 className="font-bold">
                    Próxima visita
                </h2>

                <Image src={LuandaMap} alt="Map of the city of luanda" />

                <div className="w-full flex flex-row justify-between items-center">
                    <h1 className="font-extrabold">ANGOMART</h1>

                    <p>Segunda-Feira, Maio</p>
                </div>

                <div className="w-full flex flex-row justify-between items-center">
                    <p className="opacity-35 hover:opacity-100">Luanda, Cidade, Largo do ambiente</p>

                    <p className="opacity-35 hover:opacity-100">15h</p>
                </div>

                <hr className="w-full h-[1px] my-3 opacity-20" />

                <header className="w-full">
                    <ul>{VISIT_STATS.map(({ icon, id, title, value }) => <li key={id}>
                        {icon}

                        <span>{value}</span>

                        <span>{title}</span>
                    </li>)}</ul>
                </header>

                <DynamicTable list={VISITATIONS} />
            </section>
        </section>

        <section id="products" className="w-full">
            <h2 className="font-bold">
                Produtos mais populares
            </h2>

            <ul className="w-full flex flex-row justify-start items-center gap-2 flex-nowrap overflow-x-auto">{PRODUCTS.map(({ id, thumbnail, sold, trend, name }) => <li key={id}>
                <Image src={thumbnail} alt={name} />

                <p>{name}</p>

                <span>{sold}</span>

                <span data-trend={trend}>
                    <ArrowUpIcon />
                </span>
            </li>)}</ul>
        </section>
    </Fragment>;
}
