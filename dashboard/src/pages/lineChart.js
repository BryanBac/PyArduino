import {Line} from 'react-chartjs-2';
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

function LineChart() {
    const data = {
        labels: ['18:00', '19:00', '20:00', '21:00'],
        datasets: [
            {
                label: 'Húmedad detectada',
                data: [3, 8 , -1, 2],
                backgroundColor: 'rgb(0,255,0,0.3)',
                borderColor: 'rgb(0,255,0,0.3)',
                pointCoderColor: 'rgb(0,255,0,0.3)',
                fill: true,
                tension: 0.4
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
    return(
        <div className={styles.container} style={{width: '600px', height: '230px'}}>
            <Line
            data= {data}
            options = {options}
            ></Line>
        </div>

    )
}

export default LineChart;