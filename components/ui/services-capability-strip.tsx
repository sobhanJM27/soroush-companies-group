import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "../reveal";
import { capabilities } from "@/constants/services-items";
import { cn } from "@/lib/utils";
import {
  container,
  sectionLayout,
  textBody,
  textLabel,
  textSmall,
  textTitle3,
} from "@/lib/styles";
import { Dot } from "lucide-react";
import { IconWrapper } from "./icon-wrapper";

export function ServicesCapabilityStrip() {
  return (
    <section className={cn(container, sectionLayout)}>
      <Reveal side="bottom">
        <Card variant="feature">
          <CardContent className="flex flex-col gap-8 p-6 sm:p-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
            <div className="flex max-w-2xl flex-col gap-3">
              <p className={textLabel}>Specialized Capability</p>
              <h2 className={textTitle3}>
                Technical depth supported by real project experience
              </h2>
              <p className={cn("text-left!", textBody)}>
                Our engineering perspective combines coordinated design
                thinking, execution awareness, and performance-driven planning
                across diverse building types and project scales.
              </p>
            </div>
            <div className="flex w-full max-w-2xl flex-col gap-3">
              {capabilities.map((item, index) => (
                <Reveal key={item} side="bottom" delay={index * 70}>
                  <div className="flex items-center gap-3 rounded-2xl border border-muted-foreground bg-muted-foreground/20 px-4 py-4">
                    <IconWrapper
                      variant="ghost"
                      size="sm"
                      hover={false}
                      className="hover:bg-transparent!"
                    >
                      <Dot className="h-10! w-10!" />
                    </IconWrapper>
                    <p className={textSmall}>{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </CardContent>
        </Card>
      </Reveal>
    </section>
  );
}
