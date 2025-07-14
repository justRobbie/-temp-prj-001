import { Metadata } from "next";
import { Fragment } from "react";
import Icons from "../../icons";
import POS from "./POS";
import { POSType } from "@/constants";
import { APIResponseType } from "@/types";
import { EBrandType } from "@/app";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: `Pontos de venda | ${process.env.APP_NAME}`,
    description: " Criação e gestão de pontos de venda personalizados para maximizar a cobertura de lojas.",
};

export default async function PointsOfSale({ params }: { params: Promise<{ id: EBrandType }> }) {
    const { id } = await params;

    let fetchedPOS: POSType[] = [];
    
    try {
        const data = await fetch(`${process.env.API_URL ?? process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000/api"}/pos/${id}`);
        if (data.ok) {
            const response = ((await data.json()) as APIResponseType<POSType[]>);
            fetchedPOS = response.data ?? [];
        }
    } catch (error) {
        console.error('Failed to fetch POS data during build:', error);
        // Fallback to empty array or default data
        fetchedPOS = [];
    }

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

                <POS defaultList={fetchedPOS} className="w-full flex flex-col justify-start items-start gap-2"/>
            </section>
        </Fragment>
    );
}
