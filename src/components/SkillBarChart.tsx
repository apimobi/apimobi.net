
'use client'

import React, { useMemo } from "react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  Text
} from "recharts";
import { ChartConfig } from "@/components/ui/chart"


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

const blues = [
  ["#457AA6"],
  ["#457AA6", "#E3EBF2"],
  ["#264F73", "#457AA6", "#E3EBF2"],
  ["#264F73", "#457AA6", "#A2BBD2", "#E3EBF2"],
  ["#1A334A", "#264F73", "#457AA6", "#A2BBD2", "#E3EBF2"]
];

const getColor = (length, index) => {
  if (length <= blues.length) {
    return blues[length - 1][index];
  }

  return blues[blues.length - 1][index % blues.length];
};

const data = [
  { name: "PHP", pv: 90 },
  { name: "Python", pv: 65 },
  { name: "Javascript", pv: 70 },
  { name: "SQL", pv: 70 },
  { name: "Symfony", pv: 90 },
  { name: "React", pv: 65 },
  { name: "Nextjs", pv: 60 }
];

const YAxisLeftTick = ({ y, payload: { value } }) => {
  console.log('YAxisLeftTick', y, value);
  return (
    <Text x={0} y={y} textAnchor="start" verticalAnchor="middle" scaleToFit className="text-red-600 bg-indigo-500 w-80">
      {value}
    </Text>
  );
};

let ctx;

const measureText14HelveticaNeue = (text) => {
  if (!ctx) {
    ctx = document.createElement("canvas").getContext("2d");
    ctx.font = "14px 'Helvetica Neue";
  }

  return ctx.measureText(text).width;
};

const BAR_AXIS_SPACE = 10;


export default function SkillBarChart() {

  const yKey = 'pv';
  const xKey = 'name';

  const maxTextWidth = useMemo(
    () =>
      data.reduce((acc, cur) => {
        const value = cur[yKey];
        const width = measureText14HelveticaNeue(value.toLocaleString());
        if (width > acc) {
          return width;
        }
        return acc;
      }, 0),
    [data, yKey]
  );

  return (
    <ResponsiveContainer width={"100%"} height={30 * data.length} debounce={50}>

      <BarChart
        data={data}
        layout="vertical"
        margin={{ left: 10, right: maxTextWidth + (BAR_AXIS_SPACE - 8) }}
        className="text-sm"
      >
        <XAxis hide axisLine={false} type="number" />
        <YAxis
          yAxisId={0}
          dataKey={xKey}
          type="category"
          axisLine={false}
          tickLine={false}
        // tick={YAxisLeftTick}
        />
        <YAxis
          orientation="right"
          yAxisId={1}
          dataKey={yKey}
          type="category"
          axisLine={false}
          tickLine={false}
          tickFormatter={value => value.toLocaleString()}
          mirror
          tick={{
            transform: `translate(${maxTextWidth + BAR_AXIS_SPACE}, 0)`
          }}
        />
        <Bar dataKey={yKey} minPointSize={2} barSize={32}>
          {data.map((d, idx) => {
            return <Cell key={d[xKey]} fill={getColor(data.length, idx)} />;
          })}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
