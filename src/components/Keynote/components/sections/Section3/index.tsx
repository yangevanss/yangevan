import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

import bg1 from "./assets/bg-1.webm";
import bg2 from "./assets/bg-2.webm";

export function Section3({ isActive }: { isActive: boolean }) {
  return (
    <section className="flex size-full flex-col overflow-auto px-[2em] text-left">
      <div className="py-[2em]">
        <p className="text-[2.5em]">CATCHPLAY</p>
      </div>
      <Separator variant="gradient"></Separator>
      <ScrollArea className="h-full [&>[data-radix-scroll-area-viewport]>*]:h-full">
        <div className="flex h-full flex-1 gap-[2em] py-[2em]">
          <div className="flex w-1/3 shrink-0 flex-col gap-[2em]">
            <p className="text-[1.875em]">網站開發、維護</p>
            <ul className="flex flex-col gap-[0.5em] text-[1.6em]">
              <li className="text-muted-foreground">播放器</li>
              <li className="text-muted-foreground">CATCHPLAY 網站</li>
              <li className="text-primary">Fanloop 網站</li>
            </ul>
          </div>
          <div className="flex h-full flex-1 justify-end">
            <div className="relative h-full w-1/2">
              <video
                autoPlay
                loop
                muted
                playsInline
                controls={isActive}
                className="absolute top-0 left-0 h-full w-full object-contain"
              >
                <source src={bg1} type="video/webm" />
              </video>
            </div>
            <div className="relative h-full w-1/2">
              <video
                autoPlay
                loop
                muted
                playsInline
                controls={isActive}
                className="absolute top-0 left-0 h-full w-full object-contain"
              >
                <source src={bg2} type="video/webm" />
              </video>
            </div>
          </div>
        </div>
      </ScrollArea>
    </section>
  );
}
