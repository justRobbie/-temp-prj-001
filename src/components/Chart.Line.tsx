"use client";
import dynamic from 'next/dynamic';
import 'chart.js/auto';
import { useState } from 'react';
import Icons from '@/app/icons';
import { EBrandType } from '@/app';
import { LINE_GRAPH_DATA } from '@/mock';

const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
    ssr: false,
});

const data = (id: EBrandType) => ({
    "col": {
        labels: LINE_GRAPH_DATA[id].col.labels,
        datasets: [
            {
                label: 'Movimentação por localização (Colaborador)',
                data: LINE_GRAPH_DATA[id].col.data,
                fill: false,
                borderColor: '#3c71dc',
                tension: 0.09,
            },
        ],
    },
    "pos": {
        labels: LINE_GRAPH_DATA[id].pos.labels,
        datasets: [
            {
                label: 'Movimentação por localização (Ponto de venda)',
                data: LINE_GRAPH_DATA[id].pos.data,
                fill: false,
                borderColor: '#3c71dc',
                tension: 0.09,
            },
        ],
    },
    "brd": {
        labels: LINE_GRAPH_DATA[id].brd.labels,
        datasets: [
            {
                label: 'Movimentação por localização (Marca)',
                data: LINE_GRAPH_DATA[id].brd.data,
                fill: false,
                borderColor: '#3c71dc',
                tension: 0.09,
            },
        ],
    }
});

const LineChart = ({ id }: { id: EBrandType }) => {
    const [filter, setFilter] = useState<"col" | "pos" | "brd">("col");

    const {
        PointOfInterestIcon,
        PointOfSaleIcon,
        UserIcon
    } = Icons;

    return <>
        <div className='absolute top-[10px] left-full translate-x-[-105%] flex flex-col justify-start items-start gap-2 opacity-10 hover:opacity-100'>
            <button type="button" className='whitespace-nowrap w-[200px]' data-styletype={filter === "col" ? "primary" : "secondary"} onClick={() => setFilter("col")}>
                <UserIcon />

                Por colaborador
            </button>

            <button type="button" className='whitespace-nowrap w-[200px]' data-styletype={filter === "pos" ? "primary" : "secondary"} onClick={() => setFilter("pos")}>
                <PointOfSaleIcon />

                Por de venda
            </button>

            <button type="button" className='whitespace-nowrap w-[200px]' data-styletype={filter === "brd" ? "primary" : "secondary"} onClick={() => setFilter("brd")}>
                <PointOfInterestIcon />

                Marca
            </button>
        </div>

        <Line data={data(id)[filter]} options={{
            maintainAspectRatio: false
        }} />
    </>
};

export default LineChart;