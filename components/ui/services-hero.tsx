import { Reveal } from "@/components/reveal";
import {
  container,
  sectionLayout,
  textBody,
  textLabel,
  textTitle1,
} from "@/lib/styles";
import { cn } from "@/lib/utils";

export function ServicesHero() {
  return (
    <section className={cn("flex flex-col gap-8", sectionLayout, container)}>
      <Reveal side="bottom">
        <div className="flex max-w-3xl flex-col gap-3">
          <div className={textLabel}>Integrated Engineering Services</div>
          <div className="flex flex-col gap-4">
            <h1 className={textTitle1}>
              Engineering services designed for clarity, performance, and
              execution.
            </h1>
            <p className={textBody}>
              Soroush Companies group delivers coordinated engineering services across
              design, supervision, technical planning, and project support —
              with a disciplined approach shaped by experience, compliance, and
              long-term building value.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
