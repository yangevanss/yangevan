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

const fcpData = [
  {
    type: "origin",
    size: 2.5,
    fill: "var(--color-origin)",
  },
  {
    type: "improve",
    size: 1.4,
    fill: "var(--color-improve)",
  },
];

const lcpData = [
  {
    type: "origin",
    size: 13.1,
    fill: "var(--color-origin)",
  },
  {
    type: "improve",
    size: 6.4,
    fill: "var(--color-improve)",
  },
];

const tbtData = [
  {
    type: "origin",
    size: 2530,
    fill: "var(--color-origin)",
  },
  {
    type: "improve",
    size: 710,
    fill: "var(--color-improve)",
  },
];

export function Section6({ isActive }: { isActive: boolean }) {
  return (
    <section className="flex size-full flex-col overflow-auto px-[2em] text-left">
      <div className="py-[2em]">
        <p className="text-[2.5em]">CATCHPLAY</p>
      </div>
      <Separator variant="gradient"></Separator>
      <ScrollArea>
        <div className="flex flex-1 gap-[2em] py-[2em]">
          <div className="flex w-1/3 shrink-0 flex-col gap-[2em]">
            <p className="text-[1.875em]">網站效能改進</p>
            <ul className="flex flex-col gap-[0.5em] text-[1.6em]">
              <li className="text-muted-foreground">整體程式碼減少大約 50%</li>
              <li className="text-muted-foreground">
                Core Web Vitals (Desktop)
              </li>
              <li className="text-primary">Core Web Vitals (Mobile)</li>
            </ul>
          </div>
          <div className="flex w-full flex-col gap-[2em]">
            {isActive && (
              <>
                <div className="flex flex-col gap-[0.5em]">
                  <p className="text-[1.5em]">首次內容繪製 FCP / 秒(s)</p>
                  <ChartContainer
                    config={chartConfig}
                    className="h-[125px] w-full"
                  >
                    <BarChart
                      accessibilityLayer
                      data={fcpData}
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
                <div className="flex flex-col gap-[0.5em]">
                  <p className="text-[1.5em]">最大內容繪製 LCP / 秒(s)</p>
                  <ChartContainer
                    config={chartConfig}
                    className="h-[125px] w-full"
                  >
                    <BarChart
                      accessibilityLayer
                      data={lcpData}
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
                <div className="flex flex-col gap-[0.5em]">
                  <p className="text-[1.5em]">總封鎖時間 (TBT) / 毫秒(ms)</p>
                  <ChartContainer
                    config={chartConfig}
                    className="h-[125px] w-full"
                  >
                    <BarChart
                      accessibilityLayer
                      data={tbtData}
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
              </>
            )}
          </div>
        </div>
      </ScrollArea>
    </section>
  );
}
