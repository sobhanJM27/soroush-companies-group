import {
    borderBase,
  container,
  dividerPrimary,
  sectionLayout,
  textBody,
  textLabel,
  textTitle1,
} from "@/lib/styles";
import { cn } from "@/lib/utils";

export const EngineeringCapability = () => {
  return (
    <section className={cn("flex flex-col gap-6", container, sectionLayout)}>
      <div className="flex flex-col items-start gap-3">
        <span className={textLabel}>Engineering Capability</span>
        <h2 className={textTitle1}>
          TECHNICAL <span className="text-primary italic">EXPERTISE</span>
        </h2>
        <div className={dividerPrimary}></div>
      </div>
     <div className={cn("relative flex flex-col gap-8 p-8 sm:p-12 lg:p-16 rounded-3xl bg-card/80 backdrop-blur-sm overflow-hidden", borderBase)}>
        <div className={cn("font-black text-primary", textTitle1)}>
          1,000,000 m²
        </div>
        <div className="text-lg font-semibold uppercase tracking-wide text-card-foreground">
          Designed & Supervised Development Area
        </div>
        <p className={cn("max-w-3xl leading-relaxed opacity-90", textBody)}>
          Soroush Companies group has delivered the design and senior
          supervision of approximately <strong>1,000,000 square meters</strong>{" "}
          of residential, office, and commercial developments through its
          subsidiaries including
          <strong> Soroush Omran Shafagh</strong>,{" "}
          <strong>Soroush Omran Parsian</strong>, and{" "}
          <strong> Tarh & Nezarat Soroush</strong>.
        </p>
        <p className={cn("max-w-3xl leading-relaxed opacity-80", textBody)}>
          Our expertise spans mid‑rise and high‑rise developments across
          architectural, structural, mechanical, and electrical disciplines,
          with a specialized focus on{" "}
          <strong>Part 19 of the National Building Regulations</strong>,
          addressing energy efficiency, conservation strategies, and thermal
          retrofitting for both newly constructed buildings and existing
          developments undergoing renovation.
        </p>
      </div>
    </section>
  );
};
