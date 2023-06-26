import './planeChart.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import React from 'react'




function PlaneChart() {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: false,
                text: 'Chart.js Line Chart',
            },
        },
    };

    const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    const data = {
        labels,
        datasets: [
            {
                label: "First dataset",
                data: [1, 2, 1.5, 1.9, 1.9, 3.2, 2.8, 4],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)",
                lineTension: 0.5
            },
            {
                label: "Second dataset",
                data: [2, 1, 2.5, 1.2, 1.5, 1, 1.5, 0.9],
                fill: false,
                borderColor: "#742774",
                lineTension: 0.5

            }
        ]

    }

    return (
        <div className='PlaneGraph-container'>
            <div className='ChartsContainer'>
                <div className='SubChartContainer'>
                    <h2>Productivity</h2>
                    <div className='innerChartComponents'>
                        <div className='reasearch-con'>
                            <div className='aqua-circle'></div>
                            <p>Reasearch</p>
                        </div>
                        <div className='design-con'>
                            <div className='purple-circle'></div>
                            <p>Design</p>
                        </div>
                    </div>
                </div>


                <div className='rightContainer-Chart'>
                    <div className='date-drop-down'>
                        <select>
                            <option value="volvo">01-07 May</option>
                            <option value="saab">02-07 May</option>
                            <option value="opel">03-07 May</option>
                            <option value="audi">04-07 May</option>
                        </select>
                    </div>
                    <p>Data updates every 3 hours</p>
                </div>
            </div>

            <Line className='lineChartComponent' options={options} data={data} />
        </div>
    )
}




export default PlaneChart