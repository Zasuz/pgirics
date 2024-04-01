"use client"
import { useEffect, useRef } from 'react';
import { Doughnut} from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {Chart,ArcElement} from "chart.js";
import 'chartjs-plugin-gradient';


const DonutChart = ({ data }) => {
    const chartRef = useRef(null);
    Chart.register(ArcElement);
    useEffect(() => {
        if (chartRef && chartRef.current) {
            const chart = chartRef.current.chartInstance;
            if (chart) {
                chart.addPlugin(ChartDataLabels);
            }
        }
    }, [data]);

    return <Doughnut data={data} options={{ plugins: { gradient: true } }} ref={chartRef} />;
};

export default DonutChart;