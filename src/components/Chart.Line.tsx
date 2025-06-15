"use client";
import dynamic from 'next/dynamic';
import 'chart.js/auto';
import { useState } from 'react';
import Icons from '@/app/icons';

const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
    ssr: false,
});

const data = {
    "col": {
        labels: ['Cidade', 'Kilamba', 'Talatona'],
        datasets: [
            {
                label: 'Movimentação por localização (Colaborador)',
                data: [65, 59, 80],
                fill: false,
                borderColor: '#3c71dc',
                tension: 0.09,
            },
        ],
    },
    "pos": {
        labels: ['Viana', 'Morro-Bento', 'Golf 2', 'São Paulo', 'Mutamba'],
        datasets: [
            {
                label: 'Movimentação por localização (Ponto de venda)',
                data: [65, 59, 80, 81, 56],
                fill: false,
                borderColor: '#3c71dc',
                tension: 0.09,
            },
        ],
    },
    "brd": {
        labels: ['Viana', 'Morro-Bento', 'Golf 2', 'São Paulo', 'Mutamba', 'Zango 2', 'Ramiros', 'Quifica', 'Patriota', 'Belas'],
        datasets: [
            {
                label: 'Movimentação por localização (Marca)',
                data: [65, 59, 80, 81, 56, 1, 43, 99, 23, 6, 10],
                fill: false,
                borderColor: '#3c71dc',
                tension: 0.09,
            },
        ],
    }
};

const LineChart = () => {
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

        <Line data={data[filter]} options={{
            maintainAspectRatio: false
        }} />
    </>
};

export default LineChart;