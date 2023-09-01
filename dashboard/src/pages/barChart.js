import {Chart as ChartJS, BarElement, Title, CategoryScale, LinearScale, Tooltip, Legend} from 'chart.js'
import { useEffect, useState } from 'react'
import {Bar} from 'react-chartjs-2'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
import styles from '@/styles/chart.module.css'
export default function BarChart() {
  const [chartData, setChartData ] = useState({
    datasets: []
  })

  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
    setChartData({
      labels: ['Seco', 'Húmedo'],
      datasets: [
        {
          label: 'Número de lecturas',
          data: [14, 25],
          borderColor: 'rgb(119,221,119)',
          backgroundColor: 'rgb(119,221,119)'
        }
      ]
    })
    setChartOptions({
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'Incidencia diaria'
        }
      },
      maintainAspectRatio: false,
      responsive: true
    })
  })
  return (
    <>        
    <div className={styles.container} style={{width: '600px', height: '230px'}}>
        <Bar data={chartData} options={chartOptions}></Bar>
    </div>
    </>
  )
}