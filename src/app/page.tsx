import { Metadata } from "next";
import { Fragment } from "react";
import Icons from "./icons";
import Image from "next/image";
import DynamicTable from "@/components/DynamicTable";
import { PRODUCTS, VISITATIONS } from "@/constants";
import LuandaMap from "pub/images/map.png";
import LineChart from "@/components/Chart.Line";
// import DoughnutChart from "@/components/Chart.Doughnut";
import { formatNumber } from "chart.js/helpers";

export const metadata: Metadata = {
    title: `Home | ${process.env.APP_NAME}`,
    description: "Onde a magia acontece.",
};

export default function Home() {
    const {
        ArrowUpIcon,
        CloseIcon,
        StoreIcon,
        CameraIcon,
        ShapesIcon,
        TrendArrowDownIcon,
        TrendArrowUpIcon
    } = Icons;

    const KPIS = [
        { id: "sales", title: "Vendas", value: 1200, tendency: 9, },
        { id: "visits", title: "Visitas concluidas", value: 454, tendency: 9, },
        { id: "increase", title: "Aumentos", value: 235, tendency: 9, },
        { id: "products", title: "Produtos", value: 432123, tendency: 9, },
    ];

    const VISIT_STATS = [
        { id: "stat-1", title: "Visitas feitas", value: VISITATIONS.reduce((a, b) => a + b["visitas"], 0), icon: <StoreIcon /> },
        { id: "stat-2", title: "Ruturas identificadas", value: VISITATIONS.reduce((a, b) => a + b["ruturas"], 0), icon: <CloseIcon /> },
        { id: "stat-3", title: "Fotos capturadas", value: 30, icon: <CameraIcon /> },
    ]

    return <Fragment>
        <section id="panel">
            <ul id="kpis">
                {KPIS.map(({ id, title, value, tendency }) => <li key={id}>
                    <div data-section="header">
                        <span data-text="title">{title}</span>

                        <span data-text="value">{formatNumber(value, "pt-ao", { currency: "akz" })}</span>

                        <div data-element="icon">
                            <ShapesIcon />
                        </div>
                    </div>

                    <div data-section="desc">
                        <span data-tendency={tendency > 0 ? "up" : "down"}>
                            {tendency > 0 ? <TrendArrowUpIcon /> : <TrendArrowDownIcon />}
                        </span>

                        <span>
                            {tendency}%

                            <span className="mx-1">{tendency > 0 ? "Aumentou" : "Diminuiu"}</span>

                            desde ontem
                        </span>
                    </div>
                </li>)}
            </ul>

            <section id="line">
                <LineChart />
            </section>

            {/* <section id="doughnut">
                <DoughnutChart />
            </section> */}
        </section>

        <section>
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

        <section id="products">
            <section className="w-full">
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
        </section>
    </Fragment>;
}
