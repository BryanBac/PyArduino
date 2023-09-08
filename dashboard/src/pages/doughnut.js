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

function DoughnutChart({valor}){
    let valores = []
    if(valor>500){ valores = [0, 100] }
    else{ valores= [100, 0] }
    const data = {
        labels: ['Húmedo', 'Seco'],
        datasets: [{
            label:'Estado Actual',
            data: valores,
            backgroundColor: ['rgb(0,255,0,0.5)', 'gray'],
            borderColor: ['rgb(0,255,0,0.5)', 'gray'],
        }]
    }
    const options = {
    }
    return(
        <div className={styles.container} style={{width: '600px', height: '250px'}}>
            <h3>Estado Actual</h3>
            <div style={{width: '600px', height: '200px'}}>
                <Doughnut
                data ={data}
                option = {options}>
                </Doughnut>
            </div>
        </div>
    )
}

export default DoughnutChart;