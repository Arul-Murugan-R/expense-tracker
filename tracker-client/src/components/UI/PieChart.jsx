import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
import { budgetList } from "../../data/content";

export function PieChart(props) {
  let label = [];
  let per = [];
  let color = [];

  for (let i of budgetList) {
    label.push(i.category);
    per.push(props.budget[i.category.toLowerCase()=='healthcare'?'healthCare':i.category.toLowerCase()]);
    color.push(i.color);
  }

  const data = {
    labels: label,
    datasets: [
      {
        label: "% of ",
        data: per,
        backgroundColor: color,
        borderColor: color,
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={data} />;
}
