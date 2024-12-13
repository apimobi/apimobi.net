
'use client'

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { ChartContainer, ChartConfig } from "@/components/ui/chart"


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

const data = [
  {
    subject: 'PHP',
    A: 120,
    fullMark: 150,
  },
  {
    subject: 'Symfony',
    A: 120,
    fullMark: 150,
  },
  {
    subject: 'Python',
    A: 90,
    fullMark: 150,
  },
  {
    subject: 'Javascript',
    A: 90,
    fullMark: 150,
  },
  {
    subject: 'React',
    A: 80,
    fullMark: 150,
  },
  {
    subject: 'Next',
    A: 80,
    fullMark: 150,
  },
];

export default function SkillRadarChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[100px] w-full">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
    </ChartContainer>
  );
}
