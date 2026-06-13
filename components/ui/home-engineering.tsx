import { Reveal } from "@/components/reveal";
import { features } from "@/constants/hompage-items";
import {
  container,
  dividerGradientV,
  dividerH,
  sectionLayout,
  textBody,
  textLabel,
  textSmall,
  textTitle2,
  textTitle3,
} from "@/lib/styles";
import { cn } from "@/lib/utils";

export function HomeEngineering() {
  return (
    <section className={cn(sectionLayout, container)}>
      <Reveal>
        <div className="flex flex-col lg:flex-row lg:items-start gap-16 lg:gap-24">
          <div className="flex flex-col max-w-xl gap-3">
            <span className={textLabel}>Engineering Approach</span>
            <h2 className={textTitle2}>
              High‑Performance Buildings
              <br />
              Through Integrated Engineering
            </h2>
            <div className={dividerH} />
            <p className={textBody}>
              Soroush Companies group provides multidisciplinary engineering
              services focused on the design and technical supervision of
              residential, office, and commercial developments. Our work
              integrates architecture, structural systems, mechanical
              engineering and electrical infrastructure to ensure performance,
              efficiency and long‑term reliability.
            </p>
            <p className={textBody}>
              A key focus of our practice is energy optimization in accordance
              with Part 19 of the National Building Regulations, addressing both
              new developments and existing buildings undergoing renovation or
              functional upgrades.
            </p>
          </div>
          <div
            className={cn("hidden lg:block self-stretch", dividerGradientV)}
          />
          <div className="flex flex-col flex-1 divide-y divide-border/60">
            {features.map((item, index) => (
              <div
                key={item.id}
                className="group flex gap-6 py-8 transition-colors duration-300"
              >
                {/* NUMBER */}
                <span className="text-sm font-mono text-muted-foreground tabular-nums w-6">
                  {`0${index + 1}`}
                </span>

                {/* CONTENT */}
                <div className="flex flex-col gap-2 max-w-lg">
                  <h3
                    className={cn(
                      "transition-colors duration-300 group-hover:text-primary",
                      textTitle3,
                    )}
                  >
                    {item.title}
                  </h3>
                  <p className={textSmall}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
