"use client";
import dynamic from 'next/dynamic';
import 'chart.js/auto';

const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
    ssr: false,
});

const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
        {
            label: 'Vendas mensais',
            data: [65, 59, 80, 81, 56],
            fill: false,
            borderColor: '#3c71dc',
            tension: 0.1,
        },
    ],
};

const LineChart = () => {
    return (<Line data={data} options={{
        maintainAspectRatio: false
    }} />);
};

export default LineChart;