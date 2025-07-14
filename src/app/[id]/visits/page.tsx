import { EBrandType } from "@/app";
import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
    title: `Planeamnento e Roteiros | ${process.env.APP_NAME}`,
    description: " Criação e gestão de roteiros personalizados para maximizar a cobertura de lojas.",
};

export default async function Planner({ params }: { params: Promise<{ id: EBrandType }> }) {
    const { id } = await params;

    return (
        <Fragment>
            PPPPPPPPPP {id}
        </Fragment>
    );
}
