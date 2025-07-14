import { EBrandType } from "@/app";
import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
    title: `Inventário | ${process.env.APP_NAME}`,
    description: " Gestão de itens do inventário.",
};

export default async function Stock({ params }: { params: Promise<{ id: EBrandType }> }) {
    const { id } = await params;

    return (
        <Fragment>
            PPPPPPPPPP {id}
        </Fragment>
    );
}
