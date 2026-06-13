import type { Metadata } from "next";
import { mainLayout } from "@/lib/styles";
import { ServicesHero } from "@/components/ui/services-hero";
import { ServicesShowcase } from "@/components/ui/services-showcase";
import { EngineeringProcess } from "@/components/ui/engineering-process";
import { ServicesCapabilityStrip } from "@/components/ui/services-capability-strip";
import { ServicesCta } from "@/components/ui/services-cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Soroush Companies group integrated engineering services including architectural design, structural systems, MEP coordination, construction supervision, and project management.",
};

export default function ServicesPage() {
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
