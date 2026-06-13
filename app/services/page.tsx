import type { Metadata } from "next";
import { mainLayout } from "@/lib/styles";
import { ServicesHero } from "@/components/ui/services-hero";
import { ServicesShowcase } from "@/components/ui/services-showcase";
import { EngineeringProcess } from "@/components/ui/engineering-process";
import { ServicesCapabilityStrip } from "@/components/ui/services-capability-strip";
import { ServicesCta } from "@/components/ui/services-cta";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore selected architectural and engineering projects by Soroush Omran Shafagh Co., featuring residential, commercial, and mixed‑use developments that demonstrate our approach to design development, technical coordination, and execution‑focused planning.",
};

export default function Services() {
  return (
    <main className={mainLayout}>
      <ServicesHero />
      <ServicesShowcase />
      <EngineeringProcess />
      <ServicesCapabilityStrip />
      <ServicesCta />
    </main>
  );
}
