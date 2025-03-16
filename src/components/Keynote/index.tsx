import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";

import { AspectRatio } from "@/components/ui/aspect-ratio";

import { cn } from "@/utils/cn";

import Sections from "./components/sections";

export function Keynote() {
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({}, [Fade()]);

  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;

      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi],
  );

  useEffect(() => {
    const selectHandler = () => {
      if (!emblaMainApi || !emblaThumbsApi) return;

      setSelectedIndex(emblaMainApi.selectedScrollSnap());

      emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
    };

    if (emblaMainApi) {
      emblaMainApi.on("select", selectHandler).on("reInit", selectHandler);
    }

    return () => {
      if (emblaMainApi) {
        emblaMainApi.off("select", selectHandler).off("reInit", selectHandler);
      }
    };
  }, [emblaMainApi, emblaThumbsApi]);

  useEffect(() => {
    const keydownHandler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();

        emblaMainApi?.scrollNext();
      }

      if (e.key === "ArrowLeft") {
        e.preventDefault();

        emblaMainApi?.scrollPrev();
      }
    };

    window.addEventListener("keydown", keydownHandler);

    return () => {
      window.removeEventListener("keydown", keydownHandler);
    };
  }, [emblaMainApi]);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="embla h-[75cqmin] w-full select-none">
        <div
          ref={emblaMainRef}
          className="embla__viewport size-full overflow-hidden"
        >
          <div className="embla__container flex size-full touch-pan-y touch-pinch-zoom">
            {Sections.map((Section, index) => (
              <div
                key={index}
                className="embla__slide size-full min-w-0 shrink-0 grow-0 text-[1.5cqmin]"
              >
                <Section isActive={index === selectedIndex} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="embla-thumbs sticky top-0 left-0 w-full select-none">
        <div
          ref={emblaThumbsRef}
          className="embla-thumbs__viewport overflow-hidden"
        >
          <div className="embla-thumbs__container flex gap-4">
            {Sections.map((Section, index) => (
              <button
                key={index}
                className={cn(
                  "bg-card w-1/10 min-w-[200px] shrink-0 cursor-pointer rounded-xl border-2 text-[3px] focus-visible:outline-none",
                  {
                    "border-primary": index === selectedIndex,
                  },
                )}
                onClick={() => onThumbClick(index)}
              >
                <AspectRatio ratio={16 / 9}>
                  <Section isActive={false} />
                </AspectRatio>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
