import { Metadata } from "next";
import { Fragment } from "react";
import Icons from "../../icons";
import { CAMPAIGNS, PRODUCTS, VISITATIONS } from "@/mock";
import DynamicTable from "@/components/DynamicTable";
import Image from "next/image";
import { EBrandType } from "@/app";

export const metadata: Metadata = {
    title: `Campanhas de incentivo | ${process.env.APP_NAME}`,
    description: "Criação e gestão de programas de motivação e performance para promotores.",
};

export default async function Campaigns({ params }: { params: Promise<{ id: EBrandType }> }) {
    const { id } = await params;

    const {
        AddIcon,
        ArrowUpIcon
    } = Icons;

    return (
        <Fragment>
            <section id="campaigns" className="w-full flex flex-col justify-start items-start gap-2">
                <button type="button" data-styletype="primary" className="ml-auto">
                    <AddIcon />

                    Criar campanha
                </button>

                {CAMPAIGNS[id].map(({ id: campaignId, description, name, startDate, endDate, thumbnails }) => <section key={campaignId} data-component="campaign">
                    <header style={{ backgroundImage: `url(${thumbnails[0].src})` }}></header>

                    <h1>{name}</h1>

                    <div className="w-full flex flex-row justify-between items-center">
                        <p>
                            <span>Início</span> <br />
                            <span>{startDate.toLocaleString()}</span>
                        </p>

                        <p className="text-right">
                            <span>Fim</span> <br />
                            <span>{endDate.toLocaleString()}</span>
                        </p>
                    </div>

                    <p className="my-3">{description}</p>

                    <section className="w-full">
                        <h2>Lojas</h2>

                        <DynamicTable list={VISITATIONS[id]} />
                    </section>

                    <section id="products" className="w-full">
                        <h2 className="font-bold">
                            Produtos
                        </h2>

                        <ul className="w-full flex flex-row justify-start items-center gap-2 flex-nowrap overflow-x-auto">{PRODUCTS[id].map(({ id, thumbnail, sold, trend, name }) => <li key={id}>
                            <Image src={thumbnail} alt={name} />

                            <p>{name}</p>

                            <span>{sold}</span>

                            <span data-trend={trend}>
                                <ArrowUpIcon />
                            </span>
                        </li>)}</ul>
                    </section>
                </section>)}
            </section>
        </Fragment>
    );
}
