import React, { useEffect, useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineChart = () => {
    let timer;
    const [height, setHeight] = useState([]);
    const [index, setIndex] = useState({ start: 0, end: 28 });

    const fetchData = async () => {
        const res = await fetch(`http://localhost:5000/data`);
        const data = await res.json();
        setHeight(data);
        //ie: data [{id:"1", value:2}]
    };

    useEffect(() => {
        // setInterval(() => {
        //     fetchData();
        // }, 2000);
        fetchData();
        const interval = setInterval(() => {
            setIndex((prevState) => ({
                start: index.start + 1,
                end: index.end + 1,
            }));
        }, 500);
        return () => clearInterval(interval);
    }, [index]);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Distance Readout",
            },
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: "Distance in cm",
                },
            },
            x: {
                title: {
                    display: true,
                    text: "Time",
                },
            },
        },
    };

    const labels = height.map((item, index) => index); //array of string
    const heightValues = height.map((d) => d.value);

    const currentLabels = (labels) => {
        let cLabels = [];
        for (let item of labels) {
            cLabels.push(item);
        }
        if (cLabels.length >= 12) {
            return cLabels.slice(cLabels.length - 12, cLabels.length + 1);
        }
        return cLabels;
    };
    const currentHeightValues = (heightValues) => {
        let chValues = [];
        for (let item of heightValues) {
            chValues.push(item);
        }
        if (chValues.length >= 12) {
            const newValues = chValues.slice(
                chValues.length - 12,
                chValues.length + 1
            );
            return newValues;
        }
        return chValues;
    };

    const data = {
        labels: labels.slice(index.start, index.end),
        datasets: [
            //line 1
            {
                label: "Raw Output",
                data: heightValues.slice(index.start, index.end),
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
        ],
    };

    return (
        <>
            <Line options={options} data={data} />
        </>
    );
};

export default LineChart;
