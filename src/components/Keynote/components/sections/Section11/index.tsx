import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

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
          <div className="flex-1">
            {/* <img src={img1} className="h-full object-cover" /> */}
          </div>
        </div>
      </ScrollArea>
    </section>
  );
}
