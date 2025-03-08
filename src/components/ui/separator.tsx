import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const separatorVariants = cva(
  "shrink-0 data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px",
  {
    variants: {
      variant: {
        default: "bg-border",
        gradient:
          "data-[orientation=horizontal]:bg-gradient-to-r data-[orientation=vertical]:bg-gradient-to-b from-transparent via-muted-foreground/30 to-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  variant,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root> &
  VariantProps<typeof separatorVariants>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator-root"
      decorative={decorative}
      orientation={orientation}
      className={cn(separatorVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Separator };
