import React, { PureComponent } from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";

const style = {
  top: 0,
  left: 350,
  lineHeight: "24px"
};

const RadialBarGraph = ({ data }) => {
  return (
    <RadialBarChart
      width={500}
      height={300}
      cx={150}
      cy={150}
      innerRadius={20}
      outerRadius={140}
      barSize={10}
      data={data}
    >
      <RadialBar
        minAngle={15}
        label={{ position: "insideStart", fill: "#ccc" }}
        background={true}
        clockWise
        dataKey="count"
      />
      <Legend
        iconSize={10}
        width={120}
        height={140}
        payload={data.device_name}
        layout="vertical"
        verticalAlign="middle"
        wrapperStyle={style}
      />
    </RadialBarChart>
  );
};

export default RadialBarGraph;
