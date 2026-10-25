import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { InventorAndInventionCount } from '@/types';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type Props = {
    inventorAndCounts: InventorAndInventionCount[]
};

export default function InventorsWithInventionsCount({ inventorAndCounts }: Props) {
    const inventors: string[] = inventorAndCounts.map( inventor => inventor.name);
    const counts: number[] = inventorAndCounts.map(inventor => inventor.count);

    const data = {
        labels: inventors,
        datasets: [
            {
                label: 'Inventions count',
                data: counts,
                backgroundColor: '#36A2EB',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
        },
    };

    return <Bar data={data} options={options} />;
}
