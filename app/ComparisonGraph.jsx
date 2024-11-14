import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function ComparisonGraph({ percentile }) {
  const averagePercentile = 72;

  const data = {
    labels: ['Your Score', 'Average Score'],
    datasets: [
      {
        label: 'your Percentile',
        data: [percentile, averagePercentile],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className="bg-white p-6 shadow rounded">
      <h2 className="text-md lg:text-xl font-semibold mb-4">Comparison Graph</h2>
      <div className="flex items-center justify-between">
        <p className="text-xs lg:text-lg">
          You scored {percentile}% which is {percentile > averagePercentile ? 'higher' : 'lower'} than the average
          percentile of {averagePercentile}% of all the engineers who took this assessment.
        </p>
        <div className="bg-gray-200 p-3 rounded-full">
          <FontAwesomeIcon icon={faChartLine} className="text-blue-500" size="2x" />
        </div>
      </div>
      <Bar data={data} options={options} className="mt-4" />
    </div>
  );
}

