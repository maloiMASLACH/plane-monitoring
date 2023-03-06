/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import {
  XAxis,
  Tooltip,
  CartesianGrid,
  YAxis,
  ZAxis,
  ScatterChart,
  Scatter,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { TableProps } from "./table.model";

export const Table: React.FC<TableProps> = ({ planeId, data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="x" />
        <YAxis type="number" dataKey="y" name="y" />
        <ZAxis type="number" dataKey="time" />
        <ZAxis type="number" dataKey="id" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Legend />
        <Scatter
          name={`Plane ${planeId + 1}`}
          data={data}
          fill="black"
          line
          shape="circle"
        >
          <LabelList position="top" dataKey="id" />
        </Scatter>
      </ScatterChart>
    </ResponsiveContainer>
  );
};
