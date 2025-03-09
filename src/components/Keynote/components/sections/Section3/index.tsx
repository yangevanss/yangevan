import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

export function Section3({ isActive }: { isActive: boolean }) {
  return (
    <section className="flex size-full flex-col overflow-auto px-[2em] text-left">
      <div className="py-[2em]">
        <p className="text-[3em]">CATCHPLAY</p>
      </div>
      <Separator variant="gradient"></Separator>
      <ScrollArea>
        <div className="flex flex-1 gap-[2em] py-[2em]">
          <div className="flex w-1/3 shrink-0 flex-col gap-[2em]">
            <p className="text-[1.875em]">網站開發、維護</p>
            <ul className="flex flex-col gap-[0.5em] text-[1.6em]">
              <li>播放器</li>
              <li>Google IMA 廣告</li>
              <li className="text-primary">Fanloop 網站</li>
            </ul>
          </div>
          <div className="flex-1">
            {/* <img src={img1} className="h-full object-cover" /> */}
          </div>
        </div>
      </ScrollArea>
    </section>
  );
}
