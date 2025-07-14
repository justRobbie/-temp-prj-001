import { EBrandType } from "@/app";
import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
    title: `Definições | ${process.env.APP_NAME}`,
    description: " Configurações do espaço da loja.",
};

export default async function Settings({ params }: { params: Promise<{ id: EBrandType }> }) {
    const { id } = await params;

    return (
        <Fragment>
            PPPPPPPPPP {id}
        </Fragment>
    );
}
