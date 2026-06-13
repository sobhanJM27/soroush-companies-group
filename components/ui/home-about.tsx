import Image from "next/image";
import {
    container,
    dividerH,
  hoverScale,
  sectionLayout,
  textBody,
  textLabel,
  textSmall,
  textTitle2,
} from "@/lib/styles";
import { Reveal } from "../reveal";
import { cn } from "@/lib/utils";
import { about } from "@/constants/hompage-items";

export function HomeAbout() {
  return (
    <section
      className={cn(
        "flex flex-col lg:flex-row items-center justify-center gap-16",
        sectionLayout,
        container,
      )}
    >
      <Reveal>
        <div className="relative">
          <div className="absolute -right-6 -bottom-6 h-full w-full rounded-2xl border border-border" />
          <div className="relative aspect-4/5 overflow-hidden rounded-2xl shadow-2xl shadow-black/10">
            <Image
              src="/images/soroush-image5.jpg"
              alt="Soroush Companies group"
              width={500}
              height={100}
              className={cn(
                "object-cover transition-transform duration-700",
                hoverScale,
              )}
            />
          </div>
        </div>
      </Reveal>
      <Reveal delay={120}>
        <div className="flex max-w-lg flex-col gap-3">
          <span className={textLabel}>Engineering Practice</span>
          <h2 className={cn(textTitle2)}>Soroush Companies group</h2>
          <p className={textBody}>
            Soroush Companies group provides integrated architectural and
            engineering services across multiple disciplines. The company
            focuses on delivering technically precise and sustainable solutions
            aligned with national building regulations.
          </p>
          <p className={textBody}>
            Through a multidisciplinary approach, the firm ensures that each
            project achieves architectural quality, structural integrity, and
            optimized energy performance.
          </p>
          <div className={dividerH} />
          <div className="flex flex-col gap-2">
            {about.map((item) => (
              <span key={item.id} className={textSmall}>
                {item.text}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
