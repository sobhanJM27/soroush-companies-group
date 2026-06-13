"use client";

import { useState } from "react";
import { Reveal } from "../reveal";
import { services } from "@/constants/services-items";
import { ServiceCard } from "./services-card";
import { cn } from "@/lib/utils";
import { container, sectionLayout, textLabel, textTitle2 } from "@/lib/styles";

export function ServicesShowcase() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={cn("flex flex-col gap-5", sectionLayout, container)}>
      <Reveal side="bottom">
        <div className="flex items-end justify-between gap-3">
          <div className="flex max-w-2xl flex-col gap-2">
            <p className={textLabel}>Core Services</p>
            <h2 className={textTitle2}>
              Multidisciplinary support across the project lifecycle
            </h2>
          </div>
        </div>
      </Reveal>
      <div className="flex flex-wrap gap-4 lg:gap-5">
        {services.map((service, index) => (
          <Reveal key={service.id} side="bottom" delay={index * 80}>
            <div className="flex min-w-70 flex-1 basis-[320px]">
              <ServiceCard
                icon={service.icon}
                title={service.title}
                summary={service.summary}
                details={service.details}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex((prev) => (prev === index ? null : index))
                }
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
