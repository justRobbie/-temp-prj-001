import { Metadata } from "next";
import { Fragment } from "react";
import Icons from "../icons";
import POS from "./POS";
import { POS as POS_DATA } from "@/constants";

export const metadata: Metadata = {
    title: `Pontos de venda | ${process.env.APP_NAME}`,
    description: " Criação e gestão de pontos de venda personalizados para maximizar a cobertura de lojas.",
};

export default function PointsOfSale() {
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

                <POS defaultList={POS_DATA} className="w-full flex flex-col justify-start items-start gap-2"/>
            </section>
        </Fragment>
    );
}
