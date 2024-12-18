
'use client'

import { PieChart, Pie, Cell } from 'recharts';
import { ChartContainer, ChartConfig } from "@/components/ui/chart"

// const data = [
//     { name: 'php', value: 9 },
//     { name: 'python', value: 6 },
//     { name: 'javascript', value: 6 },
//     { name: 'react', value: 5 },
//     { name: 'next', value: 5 },
//   ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  } satisfies ChartConfig

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#00FF00'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: { cx: number, cy: number, midAngle: number, innerRadius: number, outerRadius: number, percent: number, index: number }) => {
const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
const x = cx + radius * Math.cos(-midAngle * RADIAN);
const y = cy + radius * Math.sin(-midAngle * RADIAN);

return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
    {`${(percent * 100).toFixed(0)}%`}
    </text>
);
};

interface SkillProps {
  skills: Array<data>
}

type data = {
    name: string,
    value: number
}

export default function SkillPieChart({skills}: SkillProps) {
    return (
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <PieChart width={50} height={50}>
                <Pie
                    data={skills}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {skills.map((value: data, index: number) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ChartContainer>
    );
}
