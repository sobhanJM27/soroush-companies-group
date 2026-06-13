import {
  cardAccentLine,
  cardUnderline,
  container,
  sectionLayout,
  textBody,
  textTitle2,
} from "@/lib/styles";
import { Reveal } from "../reveal";
import { services } from "@/constants/hompage-items";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function HomeServices() {
  return (
    <section
      className={cn(
        "flex flex-col items-center gap-6",
        sectionLayout,
        container,
      )}
    >
      <Reveal>
        <div className="flex flex-col gap-3 items-center text-center">
          <h2 className={textTitle2}>Engineering Services</h2>
          <p className={cn("text-center!", textBody)}>
            Integrated engineering services delivered through multidisciplinary
            expertise.
          </p>
        </div>
      </Reveal>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
        {services.map((service, i) => (
          <Reveal key={service.id} delay={i * 120}>
            <Card
              variant="interactive"
              className="h-full flex flex-col gap-2 min-h-37.5"
            >
              <div className={cardAccentLine} />
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <CardDescription>{service.description}</CardDescription>
                <div className="flex-1" />
              </CardContent>
              <div className={cardUnderline} />
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
