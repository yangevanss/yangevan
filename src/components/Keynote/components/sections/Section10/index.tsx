import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/utils/cn";

import bg1 from "./assets/bg-1.webp";
import bg2 from "./assets/bg-2.webp";

export function Section10({ isActive }: { isActive: boolean }) {
  return (
    <section className="flex size-full flex-col overflow-auto px-[2em] text-left">
      <div className="py-[2em]">
        <p className="text-[2.5em]">個人專案 Convertors</p>
      </div>
      <Separator variant="gradient"></Separator>
      <ScrollArea className="h-full">
        <div className="absolute top-0 left-0 h-full w-full perspective-[4000px] perspective-origin-[100%_0] transform-3d after:absolute after:inset-0 after:translate-x-0 after:translate-y-0 after:translate-z-[1000px] after:bg-[linear-gradient(to_right,transparent_80%,var(--background)_100%),linear-gradient(to_bottom,transparent_0%,var(--background)_100%)]">
          <div
            className="origin-top-left transform-3d"
            style={{
              transform:
                "translate(15%, 7em) scale(1) rotateX(45deg) rotateY(25deg) rotate(335deg)",
            }}
          >
            <div
              className={cn(
                "size-full translate-x-0 translate-y-0 translate-z-[300px] opacity-0 blur-2xl",
                {
                  "translate-z-0 opacity-100 blur-none transition-all duration-[1s]":
                    isActive,
                },
              )}
            >
              <div className="overflow-hidden rounded-[1.5em] border">
                <AspectRatio ratio={16 / 9}>
                  <img src={bg1} className="size-full object-cover" />
                </AspectRatio>
              </div>
            </div>
            <div
              className={cn(
                "absolute top-0 left-0 size-full translate-x-0 translate-y-0 translate-z-[300px] opacity-0 blur-2xl",
                {
                  "translate-z-0 opacity-100 blur-none transition-all delay-[0.3s] duration-[1s]":
                    isActive,
                },
              )}
              style={{
                clipPath: "polygon(25% 5%, 100% 5%, 100% 100%, 25% 100%)",
              }}
            >
              <img src={bg2} className="size-full object-cover" />
            </div>
          </div>
        </div>
        <div className="relative flex flex-1 gap-[2em] py-[2em]">
          <div className="flex w-1/3 shrink-0 flex-col gap-[2em]">
            <p className="text-[1.875em]">各式轉換工具</p>
            <ul className="flex flex-col gap-[0.5em] text-[1.6em]">
              <li className="text-muted-foreground">單位</li>
              <li className="text-muted-foreground">匯率</li>
              <li className="text-muted-foreground">圖片</li>
              <li className="text-primary">顏色</li>
            </ul>
          </div>
        </div>
      </ScrollArea>
    </section>
  );
}
