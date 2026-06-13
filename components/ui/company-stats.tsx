import {
  cardAccentLine,
  cardUnderline,
  container,
  dividerPrimary,
  sectionLayout,
  textBody,
  textLabel,
  textTitle1,
  textTitle2,
} from "@/lib/styles";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import { companyStats } from "@/constants/stats";
import { Reveal } from "../reveal";

export const CompanyStats = () => {
  return (
    <section className={cn("flex flex-col gap-6", container, sectionLayout)}>
      <div className="flex flex-col gap-3">
        <span className={textLabel}>Company Impact</span>
        <h2 className={textTitle1}>
          ENGINEERING <span className="text-primary italic">IN NUMBERS</span>
        </h2>
        <div className={dividerPrimary}></div>
      </div>
      <Reveal delay={300} side="left">
        <div className="flex flex-wrap gap-6 lg:gap-8">
          {companyStats.map((item) => (
            <Card
              key={item.id}
              variant="interactive"
              className="flex min-w-55 flex-1 flex-col gap-2 lg:min-w-60"
            >
              <CardHeader className="flex flex-col gap-4">
                <div className={cardAccentLine} />
                <div
                  className={cn(
                    "font-black text-primary lg:text-4xl",
                    textTitle2,
                  )}
                >
                  {item.value}
                </div>
                <CardTitle className="uppercase tracking-wide">
                  {item.label}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="w-10 h-0.5 bg-primary opacity-70 group-hover:w-16 transition-all duration-500"></div>
                <CardDescription className={cn("text-left!", textBody)}>
                  {item.desc}
                </CardDescription>
              </CardContent>
              <div className={cardUnderline} />
            </Card>
          ))}
        </div>
      </Reveal>
    </section>
  );
};
