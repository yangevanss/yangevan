import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { cn } from "@/utils/cn";

function ScrollArea({
  className,
  orientation = "vertical",
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root> & {
  orientation?: "vertical" | "horizontal";
}) {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const [hasScrollbar, setHasScrollbar] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (scrollRef.current) {
        const hasVerticalScrollbar =
          scrollRef.current.clientHeight < scrollRef.current.scrollHeight;

        const hasHorizontalScrollbar =
          scrollRef.current.clientWidth < scrollRef.current.scrollWidth;

        setHasScrollbar(
          orientation === "vertical"
            ? hasVerticalScrollbar
            : orientation === "horizontal"
              ? hasHorizontalScrollbar
              : hasVerticalScrollbar || hasHorizontalScrollbar,
        );
      }
    };

    handleResize();

    const resizeObserver = new ResizeObserver(handleResize);

    resizeObserver.observe(document.body);

    window.addEventListener("resize", handleResize);

    return () => {
      resizeObserver.disconnect();

      window.removeEventListener("resize", handleResize);
    };
  }, [orientation]);

  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        ref={scrollRef}
        data-slot="scroll-area-viewport"
        className={cn(
          "ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1",
          {
            "scroller-vertical": hasScrollbar && orientation === "vertical",
            "scroller-horizontal": hasScrollbar && orientation === "horizontal",
          },
        )}
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" &&
          "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" &&
          "h-2.5 flex-col border-t border-t-transparent",
        className,
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="bg-border relative flex-1 rounded-full"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
}

export { ScrollArea, ScrollBar };
