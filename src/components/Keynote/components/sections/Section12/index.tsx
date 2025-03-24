import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

import bg from "./assets/bg.png";

export function Section12({ isActive }: { isActive: boolean }) {
  return (
    <section className="flex size-full flex-col overflow-auto px-[2em] text-left">
      <div className="py-[2em]">
        <p className="text-[2.5em]">CATCHPLAY</p>
      </div>
      <Separator variant="gradient"></Separator>
      <ScrollArea className="h-full [&>[data-radix-scroll-area-viewport]>*]:h-full">
        <div className="flex h-full flex-1 gap-[2em] py-[2em]">
          <div className="flex w-1/3 shrink-0 flex-col gap-[2em]">
            <p className="text-[1.875em]">其他</p>
            <ul className="flex flex-col gap-[0.5em] text-[1.6em]">
              <li className="text-primary">團隊 Jenkins CI/CD</li>
            </ul>
          </div>
          <div className="flex h-full flex-1 justify-end">
            <div className="relative h-full w-full">
              <img
                className="absolute top-0 left-0 h-full w-full object-contain"
                src={bg}
              ></img>
            </div>
          </div>
        </div>
      </ScrollArea>
    </section>
  );
}
