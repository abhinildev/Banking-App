import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BudgetChart = () => {
  const labels = ['Jun 25', 'Jul 25', 'Aug 25', 'Sep 25(*)', 'Oct 25(*)', 'Nov 25(*)'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Budget (USD)',
        data: [3200, 3100, 2950, 3300, 3400, 3250],
        backgroundColor: labels.map(label =>
          label.includes('(*)') ? 'rgba(99,102,241,0.7)' : 'rgba(34,197,94,0.7)'
        ),
        borderRadius: 6,
        maxBarThickness: 40,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: '#fff' },
      },
    },
    scales: {
      x: {
        ticks: { color: '#ccc' },
        grid: { color: 'rgba(255,255,255,0.05)' },
        barPercentage: 0.7,
        categoryPercentage: 0.6,
      },
      y: {
        ticks: { color: '#ccc' },
        grid: { color: 'rgba(255,255,255,0.05)' },
      },
    },
  };

  return (
    <div style={{ height: '260px', width: '100%', maxWidth: '768px', margin: '0 auto' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BudgetChart;
