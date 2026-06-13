import { cn } from "@/lib/utils";
import {
  mainLayout,
  container,
  textTitle1,
  textBody,
  textLabel,
  sectionLayout,
} from "@/lib/styles";
import { ProjectGrid } from "@/components/ui/project-grid";
import { PortfolioDownload } from "@/components/ui/portfolio-download";
import { ProjectCTA } from "@/components/ui/project-cta";

export default function Projects() {
  return (
    <main className={cn(mainLayout)}>
      <section className={cn(container, sectionLayout, "flex flex-col gap-6")}>
        <div className="max-w-3xl flex flex-col gap-4">
          <span className={textLabel}>Showcase</span>
          <h1 className={textTitle1}>
            Featured <span className="text-primary italic">Projects</span>
          </h1>
          <p className={cn(textBody, "max-w-2xl")}>
            A focused selection of architectural and engineering projects that
            reflect our approach to design development, technical coordination,
            and execution-aware planning.
          </p>
        </div>
      </section>

      <section className={cn(sectionLayout, container)}>
        <ProjectGrid />
      </section>

      <section className={cn(sectionLayout, container)}>
        <PortfolioDownload />
      </section>

      <section className={cn(sectionLayout, container)}>
        <ProjectCTA />
      </section>
    </main>
  );
}
