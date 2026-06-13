import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { borderBase, rippleBase, transitionBase } from "@/lib/styles";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "rounded-md font-medium cursor-pointer",
    cn(transitionBase, rippleBase),
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
    "active:scale-[0.97]",
    "disabled:opacity-50 disabled:pointer-events-none",
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-sm hover:shadow-md before:bg-white/30",

        secondary: "bg-secondary text-secondary-foreground before:bg-black/30",

        outline: cn(
          "bg-background hover:bg-muted before:bg-muted/80",
          borderBase,
        ),

        ghost: "hover:bg-muted before:bg-muted",

        text: "bg-transparent text-primary hover:underline before:hidden",
      },

      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
      },

      fullWidth: {
        true: "w-full",
        false: "",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  },
);

interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({
  className,
  variant,
  size,
  fullWidth,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, fullWidth }), className)}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}
