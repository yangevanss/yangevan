import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { XIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/utils/cn";

type DialogContextType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>;
};

export const DialogContext = React.createContext<DialogContextType>({
  open: false,
  setOpen: () => undefined,
});

const useDialog = () => {
  const context = React.useContext(DialogContext);

  if (!context) {
    throw new Error("useDialog must be used within a Dialog");
  }

  return context;
};

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  const [open = false, setOpen] = useControllableState({
    prop: props.open,
    defaultProp: props.defaultOpen,
    onChange: props.onOpenChange?.bind(null),
  });

  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      <DialogPrimitive.Root
        data-slot="dialog"
        {...props}
        open={open}
        onOpenChange={setOpen}
      >
        {props.children}
      </DialogPrimitive.Root>
    </DialogContext.Provider>
  );
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  const { setOpen } = useDialog();

  return (
    <DialogPrimitive.Trigger
      data-slot="dialog-trigger"
      {...props}
      onClick={(e) => {
        props?.onClick?.(e);

        setOpen((prevOpen) => !prevOpen);
      }}
    />
  );
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

const DialogOverlay = ({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) => (
  <DialogPrimitive.Overlay
    asChild
    data-slot="dialog-overlay"
    className={cn(
      "bg-background/70 fixed inset-0 z-50 backdrop-blur-sm",
      className,
    )}
    {...props}
  >
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />
  </DialogPrimitive.Overlay>
);

function DialogContent({
  className,
  layoutId,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  layoutId?: string;
}) {
  const { open } = useDialog();

  return (
    <AnimatePresence>
      {open ? (
        <DialogPortal data-slot="dialog-portal" forceMount>
          <DialogOverlay />
          <DialogPrimitive.Content
            asChild
            data-slot="dialog-content"
            className={cn(
              "bg-background fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-2xl border p-6 shadow-lg sm:max-w-lg",
              className,
            )}
            {...props}
          >
            <motion.div
              layoutId={layoutId}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", bounce: 0.4 }}
            >
              <VisuallyHidden.Root>
                <DialogTitle />
                <DialogDescription />
              </VisuallyHidden.Root>
              {children}
              <DialogPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
                <XIcon />
                <span className="sr-only">Close</span>
              </DialogPrimitive.Close>
            </motion.div>
          </DialogPrimitive.Content>
        </DialogPortal>
      ) : null}
    </AnimatePresence>
  );
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  );
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className,
      )}
      {...props}
    />
  );
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn(
        "text-lg leading-none font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
