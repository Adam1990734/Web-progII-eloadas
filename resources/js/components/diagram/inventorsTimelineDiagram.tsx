import { Bar } from 'react-chartjs-2';
import { InventorTimeLine } from '@/types';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

type Props = {
    timeline: InventorTimeLine[]
}
export default function InventorsTimeLine({ timeline } : Props) {
    const currentYear = new Date().getFullYear();

    const data = {
        labels: timeline.map((item) => item.name),
        datasets: [
            {
                label: 'Ages',
                data: timeline.map((item) => ({
                    x: [item.birthYear, item.deathYear || currentYear],
                    y: item.name,
                })),
                backgroundColor: '#4BC0C0',
            },
        ],
    };

    const options = {
        responsive: true,
        indexAxis: 'y' as const,
        scales: {
            x: {
                min: 1700,
                max: currentYear,
                title: {
                    display: true,
                    text: 'Age',
                },
            },
        },
    };

    return <Bar data={data} options={options} />;
}
