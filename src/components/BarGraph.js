import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer,
  Text
} from "recharts";

const colors = [
  "#dddddd",
  "#7fe5f0",
  "#133337",
  "#666666",
  " #dcedc1",
  "#d3ffce",
  "#ffc3a0",
  "#cccccc",
  "#c39797",
  "#c0d6e4",
  "#cbbeb5",
  "#66cccc",
  "#335a87"
];

const BarGraph = ({ data, labelKey, dataKey, hide }) => {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 40
      }}
      padding={{
        top: 20,
        right: 0,
        left: 0,
        bottom: 0
      }}
    >
      <XAxis
        hide={hide}
        // label={{ value: "Total Devices", position: "insideBottom" }}
        dataKey={labelKey}
        angle="90"
      >
        <Label value="any" position="top" />
      </XAxis>
      <YAxis />
      <Tooltip />

      <Bar dataKey={dataKey} fill="#8884d8">
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={colors[index]}
            // strokeWidth={index === 2 ? 4 : 1}
          />
        ))}
      </Bar>

      {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
    </BarChart>
  );
};

export default BarGraph;
