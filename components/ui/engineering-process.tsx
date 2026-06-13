import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "../reveal";
import { processSteps } from "@/constants/services-items";
import { cn } from "@/lib/utils";
import {
  container,
  sectionLayout,
  textBody,
  textBodyMuted,
  textLabel,
  textTitle2,
  textTitle3,
} from "@/lib/styles";

export function EngineeringProcess() {
  return (
    <section
      className={cn(
        "flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10",
        sectionLayout,
        container,
      )}
    >
      <Reveal side="left">
        <div className="flex max-w-xl flex-col gap-3">
          <p className={textLabel}>Engineering Process</p>
          <h2 className={textTitle2}>
            A structured workflow from assessment to supervision
          </h2>
          <p className={cn("sm:text-left!", textBody)}>
            Our process is built to reduce uncertainty, improve
            interdisciplinary coordination, and support more reliable technical
            outcomes across each phase of the project.
          </p>
        </div>
      </Reveal>
      <div className="flex w-full max-w-3xl flex-col gap-4">
        {processSteps.map((item, index) => (
          <Reveal key={item.id} side="right" delay={index * 80}>
            <Card variant="interactive">
              <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:gap-5">
                <div className={textTitle3}>{item.step}</div>
                <div className="flex flex-col gap-2">
                  <h3 className={cn("sm:text-lg!", textTitle3)}>
                    {item.title}
                  </h3>
                  <p className={textBodyMuted}>{item.text}</p>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
