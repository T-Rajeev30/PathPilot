import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const pieData = [
  { name: "Food", value: 400 },
  { name: "Travel", value: 300 },
  { name: "Savings", value: 300 },
  { name: "Others", value: 200 },
];

const COLORS = ["#FF8042", "#FFBB28", "#00C49F", "#0088FE"];

const ExpensePieChart = () => (
  <ResponsiveContainer width="50%" height={250}>
    <PieChart>
      <Pie
        data={pieData}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        label
      >
        {pieData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  </ResponsiveContainer>
);

export default ExpensePieChart;
