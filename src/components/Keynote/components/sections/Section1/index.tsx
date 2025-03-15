import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

import bg from "./assets/bg.webm";

export function Section1({ isActive }: { isActive: boolean }) {
  return (
    <section className="flex size-full flex-col overflow-auto px-[2em] text-left">
      <div className="py-[2em]">
        <p className="text-[2.5em]">CATCHPLAY</p>
      </div>
      <Separator variant="gradient"></Separator>
      <ScrollArea>
        <div className="flex flex-1 gap-[2em] py-[2em]">
          <div className="flex w-1/3 shrink-0 flex-col gap-[2em]">
            <p className="text-[1.875em]">網站開發、維護</p>
            <ul className="flex flex-col gap-[0.5em] text-[1.6em]">
              <li className="text-primary">播放器</li>
              <li className="text-muted-foreground">CATCHPLAY 網站</li>
              <li className="text-muted-foreground">Fanloop 網站</li>
            </ul>
          </div>
          <div className="flex-1">
            <div className="w-full overflow-hidden rounded-[1.5em]">
              <video
                autoPlay
                loop
                muted
                playsInline
                controls={isActive}
                className="w-full object-cover"
              >
                <source src={bg} type="video/webm" />
              </video>
            </div>
          </div>
        </div>
      </ScrollArea>
    </section>
  );
}
