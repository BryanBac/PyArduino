import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale, //x
    LinearScale, //y
    PointElement
} from 'chart.js';
import styles from '@/styles/chart.module.css';
ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
);

function LineChart(props) {
    const { datos } = props
    var horas = []
    var humedades = []
    for (let i = 0; i < datos.length; i++) {
        horas.push(datos[i].hora)
        humedades.push(datos[i].humedad)
    }
    
    const data = {
        labels: horas,
        datasets: [
            {
                label: 'Húmedad detectada',
                data: humedades,
                backgroundColor: 'rgb(0,255,0,0.3)',
                borderColor: 'rgb(0,255,0,0.3)',
                pointCoderColor: 'rgb(0,255,0,0.3)',
                fill: true,
                tension: 0.8
            }
        ]
    }

    const options = {
        plugins: {
            legend: true,
            title: {
                display: true,
                text: 'Comportamiento'
            }
        }
    }
    return (
        <div className={styles.container}>
            <Line
                data={data}
                options={options}
            ></Line>
        </div>

    )
}

export default LineChart;