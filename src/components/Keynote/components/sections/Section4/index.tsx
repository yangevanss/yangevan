import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";

import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartConfig = {
  origin: {
    label: "原始",
    color: "var(--muted)",
  },
  improve: {
    label: "改善",
    color: "var(--primary)",
  },
} satisfies ChartConfig;

const chartData = [
  {
    type: "origin",
    size: 700,
    fill: "var(--color-origin)",
  },
  {
    type: "improve",
    size: 350,
    fill: "var(--color-improve)",
  },
];

export function Section4({ isActive }: { isActive: boolean }) {
  return (
    <section className="flex size-full flex-col overflow-auto px-[2em] text-left">
      <div className="py-[2em]">
        <p className="text-[3em]">CATCHPLAY</p>
      </div>
      <Separator variant="gradient"></Separator>
      <ScrollArea>
        <div className="flex flex-1 gap-[2em] py-[2em]">
          <div className="flex w-1/3 shrink-0 flex-col gap-[2em]">
            <p className="text-[1.875em]">網站效能改進</p>
            <ul className="flex flex-col gap-[0.5em] text-[1.6em]">
              <li className="text-primary">整體程式碼減少大約 50%</li>
              <li>Core Web Vitals (Desktop)</li>
              <li>Core Web Vitals (Mobile)</li>
            </ul>
          </div>
          <div className="flex-1">
            {isActive && (
              <div className="flex flex-col gap-[0.5em]">
                <p className="text-[1.5em]">程式碼大小 / (kb)</p>
                <ChartContainer
                  config={chartConfig}
                  className="size-full h-[125px]"
                >
                  <BarChart
                    accessibilityLayer
                    data={chartData}
                    layout="vertical"
                    barSize="20%"
                    margin={{
                      right: 80,
                    }}
                  >
                    <YAxis
                      dataKey="type"
                      type="category"
                      tickLine={false}
                      axisLine={false}
                      fontSize="2em"
                      width={100}
                      tickMargin={30}
                      tickFormatter={(value) =>
                        chartConfig[value as keyof typeof chartConfig]?.label
                      }
                    />
                    <XAxis dataKey="size" type="number" hide />
                    <Bar dataKey="size" layout="vertical" radius={10}>
                      <LabelList
                        dataKey="size"
                        position="right"
                        offset={30}
                        className="fill-foreground"
                        fontSize="2em"
                      />
                    </Bar>
                  </BarChart>
                </ChartContainer>
              </div>
            )}
          </div>
        </div>
      </ScrollArea>
    </section>
  );
}
