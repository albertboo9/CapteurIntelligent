import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale, Legend, Tooltip } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Legend, Tooltip);

function TemperatureVisualiser() {
  const [chartData, setChartData] = useState({
  "labels": ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
  "datasets": [
    {
      "label": "Température (°C)",
      "data": [25, 27, 23, 28, 26, 29, 24],
      "fill": false,
      "borderColor": "rgb(75, 192, 192)",
      "tension": 0.1
    },
    {
      "label": "Température ressentie (°C)",
      "data": [26, 28, 24, 30, 27, 31, 25],
      "fill": false,
      "borderColor": "rgb(255, 99, 132)",
      "tension": 0.1
    }
  ]
});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('../../database/temperature.json');
        const data = await response.json();
        setChartData(data);
      } catch (error) {
        console.error("Erreur lors du chargement des données:", error);
        // Ici, vous pourriez gérer l'erreur et afficher un message à l'utilisateur
      }
    }

    fetchData();
  }, []);

  if (!chartData) {
    return <div>Chargement des données...</div>;
  }

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Température (°C)'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Jours'
        }
      }
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Variation de Température Hebdomadaire',
      },
    },
  };

  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
}

export default TemperatureVisualiser;