import DynamicTable from "@/components/DynamicTable";
import { USERS, VISITATIONS } from "@/constants";
import { Metadata } from "next";
import { Fragment } from "react";
import Icons from "../../icons";
import Man$1ProfilePhoto from "pub/images/man-1.jpg";
import { EBrandType } from "@/app";

export const metadata: Metadata = {
    title: `Manager | ${process.env.APP_NAME}`,
    description: "Permite o acompanhamento das atividades diárias dos promotores e supervisores.",
};

export default async function Manager({ params }: { params: Promise<{ id: EBrandType }> }) {
    const { id } = await params;

    const {
        AddIcon,
        CameraIcon,
        StoreIcon
    } = Icons;

    const PROMOTERS = USERS[id].filter(({ tipo }) => tipo === "Promotor").map(user => {
        return {
            ...user,
            thumbnail: Man$1ProfilePhoto
        }
    });

    const PROMOTERS_STATS = [
        { id: "stat-1", title: "Produtos promovidos", value: VISITATIONS[id].length, icon: <StoreIcon /> },
        { id: "stat-2", title: "Fotos capturadas", value: 30, icon: <CameraIcon /> },
    ];

    return (
        <Fragment>
            <section className="w-full flex flex-col justify-start items-start">
                <section id="users" className="w-full flex flex-col gap-2">
                    <h2>Utilizadores</h2>

                    <button type="button" data-styletype="primary" className="ml-auto">
                        <AddIcon />

                        Adicionar utilizador
                    </button>

                    <DynamicTable list={USERS[id]} className="w-full" />
                </section>
            </section>

            <section className="w-full flex flex-col justify-start items-start">
                <section id="teams" className="w-full flex flex-col gap-2">
                    <h2>Equipas</h2>

                    <button type="button" data-styletype="primary" className="ml-auto">
                        <AddIcon />

                        Criar equipa
                    </button>

                    <section id="team" data-component="team">
                        <header>
                            <h1>Promotores</h1>

                            <hr className="opacity-20" />

                            <p>Um promotor é um profissional responsável por impulsionar a divulgação e vendas de um produto, serviço ou evento. Ele atua promovendo a marca, interagindo com clientes e potenciais consumidores, além de organizar ações estratégicas para aumentar a visibilidade e aceitação do que está sendo promovido.</p>

                            <hr className="opacity-20" />

                            <ul>{PROMOTERS_STATS.map(({ id, icon, title, value }) => <li key={id}>
                                <span>
                                    {icon}

                                    {title}
                                </span>

                                <span>{value}</span>
                            </li>)}</ul>
                        </header>

                        <ul>{PROMOTERS.map(({ id, nome, ["e-mail"]: email, thumbnail }) => <li key={id}>
                            <div style={{ backgroundImage: `url(${thumbnail.src})` }}></div>

                            <span>{nome}</span>

                            <span>{email}</span>
                        </li>)}</ul>
                    </section>
                </section>
            </section>
        </Fragment>
    );
}
