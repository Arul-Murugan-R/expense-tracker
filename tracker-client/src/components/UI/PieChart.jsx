import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
import { budgetList } from '../../data/content'

let label = []
let per = []
let color = []

for(let i of budgetList){
    label.push(i.category)
    per.push(i.percentage)
    color.push(i.color)
}


export const data = {
  labels: label,
  datasets: [
    {
      label: '% of ',
      data: per,
      backgroundColor: color,
      borderColor: color,
      borderWidth: 1,
    },
  ],
};



export function PieChart() {
  return <Pie data={data} />;
}
