import { Metadata } from "next";
import { Fragment } from "react";
import Icons from "../icons";
import POS from "@/components/POS";
import { POSType } from "@/constants";
import { APIResponseType } from "@/types";

export const metadata: Metadata = {
    title: `Pontos de venda | ${process.env.APP_NAME}`,
    description: " Criação e gestão de pontos de venda personalizados para maximizar a cobertura de lojas.",
};

export default async function PointsOfSale() {
    const { data: fetchedPOS } = (await (await fetch(`${process.env.API_URL}/pos`)).json()) as APIResponseType<POSType[]>;

    const {
        PointOfSaleIcon
    } = Icons;

    return (
        <Fragment>
            <section className="w-full flex flex-col justify-start items-start gap-2">
                <header className="w-full flex flex-row justify-start items-center gap-2">
                    <h2>Pontos de venda</h2>

                    <PointOfSaleIcon />
                </header>

                <POS defaultList={fetchedPOS ?? []} className="w-full flex flex-col justify-start items-start gap-2"/>
            </section>
        </Fragment>
    );
}
