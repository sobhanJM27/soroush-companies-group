import {
    container,
  dividerGradientV,
  dividerH,
  sectionLayout,
  textBodyMuted,
  textTitle1,
  transitionBase,
} from "@/lib/styles";
import { Reveal } from "../reveal";
import { stats } from "@/constants/stats";
import { cn } from "@/lib/utils";

export function Stats() {
  return (
    <section className={cn(sectionLayout, container)}>
      <div className="relative flex flex-wrap justify-center border-y border-border py-12">
        {stats.map((stat, i) => (
          <Reveal key={stat.id} delay={i * 150}>
            <div
              className={cn(
                "group relative flex flex-col items-center h-full text-center px-8 py-8 hover:bg-muted rounded-2xl",
                transitionBase,
              )}
            >
              {i !== 0 && (
                <div
                  className={cn(
                    "absolute left-0 top-1/2 hidden h-20 w-px -translate-y-1/2 lg:block",
                    dividerGradientV,
                  )}
                />
              )}
              <div
                className={cn(
                  "tabular-nums transition-all duration-500 group-hover:text-primary group-hover:scale-105",
                  textTitle1,
                )}
              >
                {stat.value}
              </div>
              <p className={cn("mt-5 max-w-45 uppercase", textBodyMuted)}>
                {stat.label}
              </p>
              <div
                className={cn(
                  "mt-5 w-8! group-hover:w-16! group-hover:bg-primary",
                  transitionBase,
                  dividerH,
                )}
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
