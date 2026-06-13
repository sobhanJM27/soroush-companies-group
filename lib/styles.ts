import { cn } from "./utils";

// TYPOGRAPHY

export const textTitle1 =
  "text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight";

export const textTitle2 = "text-2xl sm:text-3xl font-bold leading-tight";

export const textTitle3 = "text-lg sm:text-xl font-semibold leading-snug";

export const textBody =
  "text-sm sm:text-base text-left sm:text-justify leading-relaxed text-muted-foreground";

export const textBodyMuted = "text-sm sm:text-base text-muted-foreground";

export const textSmall = "text-sm text-muted-foreground";

export const textLabel =
  "inline-flex w-fit items-center rounded-full border border-foreground/10 bg-foreground/5 " +
  "px-2 py-0.5 text-[10px] " +
  "md:px-3 md:py-1 md:text-xs " +
  "uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-sm";

// LAYOUT

export const container = "mx-auto w-full max-w-7xl px-6 lg:px-8";

export const mainLayout =
  "flex flex-col w-full gap-8 overflow-x-hidden px-4 py-16";

export const sectionLayout = "px-4 py-16";

// BORDERS

export const borderBase = "border border-border";

// TRANSITIONS

export const transitionBase = "transition-all duration-300 ease-in-out";

// HOVER EFFECTS

export const hoverScale =
  "transition-transform duration-500 hover:scale-[1.03]";

// DIVIDERS

export const dividerH = "h-px w-16 bg-border";

export const dividerV = "w-px bg-border";

export const dividerGradientV =
  "w-px bg-linear-to-b from-transparent via-border to-transparent";

export const dividerPrimary = "w-32 h-1.5 bg-primary";

// GRADIENT

export const bgGradientPrimary = cn(
  "relative overflow-hidden rounded-[2.5rem] bg-linear-to-br from-card via-muted/30 to-card",
  borderBase,
);

// CARD SYSTEM

export const cardAccentLine =
  "absolute top-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover/card:w-full";

export const cardUnderline =
  "h-px w-full bg-gradient-to-r from-primary/40 via-border to-transparent";

// SHADOWS

export const surfaceShadowSm = "shadow-[0_1px_2px_rgba(0,0,0,0.04)]";

export const surfaceShadowMd = "shadow-[0_10px_30px_rgba(0,0,0,0.08)]";

export const surfaceShadowBrand = "shadow-md shadow-primary/10";

export const surfaceInteractiveHover =
  "hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]";

// RIPPLE

export const rippleBase = [
  "relative overflow-hidden",
  "before:absolute before:left-1/2 before:top-1/2",
  "before:w-[220%] before:h-[220%]",
  "before:-translate-x-1/2 before:-translate-y-1/2",
  "before:rounded-full",
  "before:scale-0",
  "before:transition-transform before:duration-500 before:ease-out",
  "hover:before:scale-100",
  "before:pointer-events-none",
].join(" ");