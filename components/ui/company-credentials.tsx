import {
  container,
  dividerPrimary,
  sectionLayout,
  textBody,
  textBodyMuted,
  textLabel,
  textTitle1,
  textTitle2,
} from "@/lib/styles";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./button";
import { certifiedItems } from "@/constants/certified-items";
import { Reveal } from "../reveal";

export function CompanyCredentials() {
  return (
    <section
      className={cn(
        "bg-primary/60 rounded-md flex flex-col gap-4",
        sectionLayout,
        container,
      )}
    >
      <div className="max-w-3xl flex flex-col gap-3">
        <span className={cn("text-primary", textLabel)}>Credibility</span>
        <h2 className={textTitle1}>
          Certified Engineering <span className="text-primary">Expertise</span>
        </h2>
        <div className={dividerPrimary}></div>
      </div>
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div className="flex flex-col gap-4">
          <p className={textBody}>
            Soroush Companies group Engineering Company operates under official
            engineering licenses issued by the Iranian Construction Engineering
            Organization. Our expertise spans structural design, project
            supervision, and technical consultation for high‑end residential
            developments in Tehran.
          </p>
          <Reveal delay={400} side="left">
            <div className="grid grid-cols-2 gap-8">
              {certifiedItems.map((item) => (
                <div key={item.id} className="flex flex-col gap-2">
                  <p className={cn("text-primary", textTitle2)}>{item.title}</p>
                  <p className={textBodyMuted}>{item.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <a href="/Portfolio Soroush Omran-compressed.pdf">
            <Button>Download Portfolio</Button>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="relative aspect-3/4 rounded-xl overflow-hidden">
            <Image
              src="/images/license-company.png"
              alt="Engineering License"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative aspect-3/4 rounded-xl overflow-hidden">
            <Image
              src="/images/company-cv.png"
              alt="Company Certification"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative aspect-3/4 rounded-xl overflow-hidden col-span-2">
            <Image
              src="/images/company-registration.png"
              alt="Official Registration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
