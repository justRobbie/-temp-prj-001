import { EBrandType } from "@/app";
import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
    title: `Visitas | ${process.env.APP_NAME}`,
    description: "Marcação de visitas para lojas.",
};

export default async function Visits({ params }: { params: Promise<{ id: EBrandType }> }) {
    const { id } = await params;

    return (
        <Fragment>
            PPPPPPPPPP {id}
        </Fragment>
    );
}
