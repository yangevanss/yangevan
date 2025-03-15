import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

import bg from "./assets/bg.webm";

export function Section11({ isActive }: { isActive: boolean }) {
  return (
    <section className="flex size-full flex-col overflow-auto px-[2em] text-left">
      <div className="py-[2em]">
        <p className="text-[2.5em]">個人專案 Translate Audio</p>
      </div>
      <Separator variant="gradient"></Separator>
      <ScrollArea>
        <div className="flex flex-1 gap-[2em] py-[2em]">
          <div className="flex w-1/3 shrink-0 flex-col gap-[2em]">
            <p className="text-[1.875em]">即時翻譯網站音訊</p>
          </div>
          <div className="relative flex-1">
            <div className="w-full overflow-hidden rounded-[1.5em] after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(to_right,var(--background)_0%,var(--background)_20%,transparent_60%,transparent)]">
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
