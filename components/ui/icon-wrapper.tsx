import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { borderBase, transitionBase } from "@/lib/styles";

const iconWrapperVariants = cva(
  [
    "inline-flex items-center justify-center",
    "rounded-md",
    cn(transitionBase),
    "[&>svg]:size-5 [&>svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        default: "bg-muted text-muted-foreground",
        primary: "bg-primary/10 text-primary",
        outline: cn("bg-background", borderBase),
        ghost: cn("hover:bg-muted"),
      },

      size: {
        sm: "size-8",
        md: "size-10",
        lg: "size-12",
      },

      hover: {
        true: "hover:scale-105 hover:shadow-sm",
        false: "",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
      hover: true,
    },
  },
);

interface IconWrapperProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof iconWrapperVariants> {}

export function IconWrapper({
  className,
  variant,
  size,
  hover,
  ...props
}: IconWrapperProps) {
  return (
    <div
      className={cn(iconWrapperVariants({ variant, size, hover }), className)}
      {...props}
    />
  );
}
