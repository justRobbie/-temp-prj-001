"use client"

import dynamic from 'next/dynamic';
import 'chart.js/auto';

const Doughnut = dynamic(() => import('react-chartjs-2').then((mod) => mod.Doughnut), {
    ssr: false,
});

const data = {
    labels: [
        'Red',
        'Blue',
        'Yellow'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
            '#231e78',
            '#3c71dc',
            '#18153e'
        ],
        hoverOffset: 4
    }]
};

const DoughnutChart = () => {
    return (<Doughnut data={data} options={{
        responsive: true,
        borderColor: "transparent",
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Distribuição de lojas'
            }
        }
    }} />);
};

export default DoughnutChart;