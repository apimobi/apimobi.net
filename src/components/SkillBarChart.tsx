'use client'

import React, { useEffect, useMemo, useState } from "react";
import dynamic from 'next/dynamic'
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
  ["#66101F"],
  ["#855A5C", "#8A8E91"],
  ["#264F73", "#457AA6", "#E3EBF2"],
  ["#264F73", "#457AA6", "#A2BBD2", "#E3EBF2"],
  ["#66101F", "#855A5C", "#8A8E91", "#B8D4E3", "#EEFFDB"],
  ["#360568", "#5B2A86", "#7785AC", "#9AC6C5", "#A0D6C0", "#A5E6BA"],
  ["#360568", "#5B2A86", "#7785AC", "#9AC6C5", "#A0D6C0", "#A5E6BA", "#D7F171"],
  ["#360568", "#5B2A86", "#7785AC", "#9AC6C5", "#A0D6C0", "#A5E6BA", "#C1EED0", "#F2B880"],
  ["#360568", "#5B2A86", "#7785AC", "#9AC6C5", "#A0D6C0", "#A5E6BA", "#C1EED0", "#F2B880", "#D7F171"]
];

const getColor = (length: number, index: number) => {
  if (length <= blues.length) {
    return blues[length - 1][index];
  }

  return blues[blues.length - 1][index % blues.length];
};


const YAxisLeftTick = ({ y, payload: { value } }: { y: number, payload: { value: string } }) => {
  console.log('YAxisLeftTick', y, value);
  return (
    <Text x={0} y={y} textAnchor="start" verticalAnchor="middle" scaleToFit className="text-red-600 bg-indigo-500 w-80">
      {value}
    </Text>
  );
};

let ctx: CanvasRenderingContext2D | null;

const measureText14HelveticaNeue = (text: string) => {
  if (!ctx && typeof document !== "undefined") {
    ctx = document.createElement("canvas").getContext("2d");
  }
  if (ctx) {
    ctx.font = "14px 'Helvetica Neue";
    return ctx.measureText(text).width;
  }
};

const BAR_AXIS_SPACE = 10;


interface SkillProps {
  skills: Array<data>
}

type data = {
  name: string,
  value: number
}


export default function SkillBarChart({ skills }: SkillProps) {

  const yKey = 'value';
  const xKey = 'name';
  const [maxTextWidth, setMaxTextWidth] = useState(0);

  const cachedMaxTextWidth = useMemo(
      () => {
        const tmp = skills.reduce((acc, cur) => {
          const value = cur[yKey];
          const width = measureText14HelveticaNeue(value.toLocaleString()) || 0;
          if (width > acc) {
            return width;
          }
          return acc;
        }, 0)
        setMaxTextWidth(tmp);
      },
      [skills]
  );

  useEffect(() => {
    cachedMaxTextWidth;
  }, []);

  return (
    <ResponsiveContainer width={"100%"} height={30 * skills.length} debounce={50}>

      <BarChart
        data={skills}
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
          {skills.map((d, idx) => {
            return <Cell key={d[xKey]} fill={getColor(skills.length, idx)} />;
          })}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
