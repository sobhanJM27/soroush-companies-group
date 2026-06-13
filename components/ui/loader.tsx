import { cn } from "@/lib/utils";

export type LoaderProps = {
  className?: string;
  size?: number;
};

export function Loader({ className, size = 36 }: LoaderProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("flex items-center justify-center py-24 px-6", className)}
    >
      <div className="relative" style={{ width: size, height: size }}>
        <div className="absolute inset-0 rounded-full border border-border/50" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-primary animate-spin" />
        <div className="absolute inset-[4px] rounded-full border border-transparent border-b-primary/35 border-l-primary/20 animate-[spin_1.8s_linear_infinite]" />
      </div>
    </div>
  );
}
