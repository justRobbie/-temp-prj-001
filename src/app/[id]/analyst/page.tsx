import { EBrandType } from "@/app";
import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
    title: `Análise e visualização de dados | ${process.env.APP_NAME}`,
    description: "Ferramentas de reporting e dashboards para análise dos dados recolhidos.",
};

export default async function Analyst({ params }: { params: Promise<{ id: EBrandType }> }) {
    const { id } = await params;

    return (
        <Fragment>
            AAAAAAAAAAAAA {id}
        </Fragment>
    );
}
