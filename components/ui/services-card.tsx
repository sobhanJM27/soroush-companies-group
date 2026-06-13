"use client";

import type { KeyboardEvent } from "react";
import { ChevronDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  cardAccentLine,
  cardUnderline,
  surfaceInteractiveHover,
  surfaceShadowBrand,
  surfaceShadowSm,
  textLabel,
  transitionBase,
} from "@/lib/styles";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IconWrapper } from "./icon-wrapper";

export type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  summary: string;
  details: string;
  isOpen: boolean;
  onToggle: () => void;
};

export function ServiceCard({
  icon: Icon,
  title,
  summary,
  details,
  isOpen,
  onToggle,
}: ServiceCardProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onToggle();
    }
  };

  return (
    <Card
      variant="interactive"
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      onClick={onToggle}
      onKeyDown={handleKeyDown}
      className={cn(
        "cursor-pointer outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-primary/30",
        "focus-visible:ring-offset-2",
        "focus-visible:ring-offset-background",
        isOpen && "border-primary/30 shadow-md shadow-primary/10",
      )}
    >
      <div className={cn(cardAccentLine, isOpen && "w-full")} />
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 h-28",
          "bg-linear-to-t from-primary/10 via-primary/5 to-transparent",
          "opacity-0 blur-2xl transition-all duration-500",
          "group-hover/card:opacity-100",
          isOpen && "opacity-100",
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute -bottom-16 left-1/2 h-32 w-[85%] -translate-x-1/2 rounded-full",
          "bg-primary/10 blur-3xl transition-all duration-500",
          "opacity-0 group-hover/card:opacity-100",
          isOpen && "opacity-100",
        )}
      />
      <CardHeader className="relative z-10 flex flex-col gap-4 p-5 sm:p-6">
        <div className="flex items-start gap-4">
          <IconWrapper size="lg" hover={false}>
            <Icon className="h-5 w-5" />
          </IconWrapper>
          <IconWrapper className={cn("rounded-full", isOpen && "rotate-180")}>
            <ChevronDown className="h-4 w-4" />
          </IconWrapper>
        </div>

        <div className="flex flex-col gap-2">
          <CardTitle className="text-lg font-semibold tracking-tight sm:text-xl">
            {title}
          </CardTitle>

          <p className="text-sm leading-7 text-muted-foreground">{summary}</p>
        </div>
      </CardHeader>
      <div
        className={cn(
          "grid transition-all duration-500 ease-in-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <CardContent className="relative z-10 px-5 pb-5 pt-0 sm:px-6 sm:pb-6">
            <div className="flex flex-col gap-4 border-t border-border/80 pt-4">
              <p className="text-sm leading-7 text-muted-foreground/90">
                {details}
              </p>
              <div
                className={cn(
                  textLabel,
                  "w-fit border-primary/15 bg-primary/8 text-primary",
                )}
              >
                Technical Scope
              </div>
              <div className={cardUnderline} />
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
