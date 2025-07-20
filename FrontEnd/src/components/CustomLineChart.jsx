import React from "react";
import {
  CartesianGrid,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Line,
} from "recharts";

const data = [
  { month: "JAN ", amount: 400 },
  { month: "Feb", amount: 300 },
  { month: "Mar", amount: 500 },
  { month: "Apr", amount: 700 },
  { month: "May", amount: 600 },
  { month: "Jun", amount: 800 },
];

const CustomLineChart = () => {
  return (
    <ResponsiveContainer width="50%" height="100%">
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="amount"
          stroke="#ff6b6b"
          strokeWidth={3}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CustomLineChart;
