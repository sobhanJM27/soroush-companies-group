import { Reveal } from "@/components/reveal";
import {
  cardAccentLine,
  cardUnderline,
  container,
  dividerV,
  sectionLayout,
  textBodyMuted,
  textLabel,
  textSmall,
  textTitle2,
  textBody,
} from "@/lib/styles";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { companies } from "@/constants/hompage-items";
import { cn } from "@/lib/utils";

export function HomeGroup() {
  return (
    <section className={cn(sectionLayout, container)}>
      <Reveal>
        <div className="flex flex-col items-center gap-20 px-6">
          <div className="flex max-w-2xl flex-col items-center gap-3 text-center">
            <span className={textLabel}>Soroush Companies group</span>
            <h2 className={textTitle2}>
              A Network of Engineering
              <br />
              and Development Companies
            </h2>
            <p className={cn("text-center!", textBody)}>
              Soroush Companies group operates within Soroush Companies group, a
              collaborative network of engineering and development firms engaged
              in the design, construction and technical supervision of
              residential, commercial and office projects.
            </p>
          </div>
          <div className="flex w-full flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-4">
              <div className="rounded-xl border border-border px-6 py-3 text-sm font-medium">
                Soroush Companies group
              </div>
              <div className={cn("h-12", dividerV)} />
            </div>
            <div className="flex w-full flex-col gap-10 md:flex-row md:justify-center md:gap-12">
              {companies.map((company) => (
                <Card
                  key={company.id}
                  variant="interactive"
                  className="flex max-w-sm flex-col"
                >
                  <div className={cardAccentLine} />
                  <CardHeader>
                    <CardTitle
                      className={cn("text-foreground!", textBodyMuted)}
                    >
                      {company.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className={textSmall}>
                      {company.description}
                    </CardDescription>
                  </CardContent>
                  <div className={cardUnderline} />
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
