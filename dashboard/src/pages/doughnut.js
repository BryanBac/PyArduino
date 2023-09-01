import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);
import styles from '@/styles/chart.module.css'

function DoughnutChart(){
    const data = {
        labels: ['Húmedo', 'Seco'],
        datasets: [{
            label:'Pool',
            data: [3,6],
            backgroundColor: ['rgb(0,255,0,0.5)', 'gray'],
            borderColor: ['rgb(0,255,0,0.5)', 'gray'],
        }]
    }
    const options = {
    }
    return(
        <div className={styles.container} style={{width: '600px', height: '200px'}}>
                <Doughnut
                data ={data}
                option = {options}>
                </Doughnut>
        </div>
    )
}

export default DoughnutChart;