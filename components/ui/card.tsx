import * as React from "react";
import { cn } from "@/lib/utils";

type CardVariant = "default" | "interactive" | "feature";

function Card({
  className,
  size = "default",
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & {
  size?: "default" | "sm";
  variant?: CardVariant;
}) {
  return (
    <div
      data-slot="card"
      data-size={size}
      data-variant={variant}
      className={cn(
        "group/card relative flex flex-col gap-(--card-spacing) overflow-hidden",

        "rounded-3xl border border-border",

        "text-card-foreground",

        "bg-linear-to-br from-card via-card to-muted/20",

        "backdrop-blur-sm",

        "py-(--card-spacing)",

        "[--card-spacing:--spacing(4)]",

        "data-[size=sm]:[--card-spacing:--spacing(3)]",

        "has-data-[slot=card-footer]:pb-0",

        "has-[>img:first-child]:pt-0",

        "*:[img:first-child]:rounded-t-3xl",

        "*:[img:last-child]:rounded-b-3xl",

        "transition-all duration-300 ease-in-out",

        // default
        "shadow-[0_4px_20px_rgba(15,23,42,0.04)]",

        // interactive
        "data-[variant=interactive]:hover:-translate-y-1",
        "data-[variant=interactive]:hover:border-primary/20",
        "data-[variant=interactive]:hover:shadow-[0_12px_40px_rgba(15,23,42,0.08)]",

        // feature
        "data-[variant=feature]:border-primary/10",
        "data-[variant=feature]:from-card",
        "data-[variant=feature]:via-muted/20",
        "data-[variant=feature]:to-primary/5",

        className,
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min items-start gap-1",
        "px-(--card-spacing)",
        "has-data-[slot=card-action]:grid-cols-[1fr_auto]",
        "has-data-[slot=card-description]:grid-rows-[auto_auto]",
        "[.border-b]:pb-(--card-spacing)",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "font-heading text-base leading-snug font-semibold",
        "group-data-[size=sm]/card:text-sm",
        className,
      )}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm leading-relaxed text-muted-foreground", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-(--card-spacing)", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center rounded-b-3xl border-t border-border",
        "bg-muted/50 p-(--card-spacing)",
        className,
      )}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
