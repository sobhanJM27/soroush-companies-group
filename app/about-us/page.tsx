import type { Metadata } from "next";
import { AboutHero } from "@/components/ui/about-hero";
import { BentoIdentity } from "@/components/ui/bento-identify";
import { CompanyCredentials } from "@/components/ui/company-credentials";
import { CompanyStats } from "@/components/ui/company-stats";
import { Contact } from "@/components/ui/contact";
import { EngineeringCapability } from "@/components/ui/engineering-capability";
import { mainLayout } from "@/lib/styles";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover Soroush Companies group engineering expertise, official credentials, technical capabilities, and company background.",
};

export default function AboutUs() {
  return (
    <main className={mainLayout}>
      <AboutHero />
      <BentoIdentity />
      <CompanyCredentials />
      <CompanyStats />
      <EngineeringCapability />
      <Contact />
    </main>
  );
}
