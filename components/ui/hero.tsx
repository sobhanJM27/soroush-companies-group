import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { hoverScale, sectionLayout, textBody, textTitle1 } from "@/lib/styles";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Hero() {
  return (
    <section
      className={cn(
        "flex gap-4 items-center max-md:flex-col-reverse",
        sectionLayout,
      )}
    >
      <div className="flex flex-col gap-6">
        <Reveal delay={100}>
          <h1 className={cn(textTitle1, "flex flex-col")}>
            Engineering
            <span className="text-primary">Sustainable</span>
            <span className="text-primary">Infrastructure</span>
          </h1>
        </Reveal>
        <Reveal delay={250}>
          <p className={cn(textBody, "sm:text-left")}>
            Delivering innovative construction and infrastructure solutions
            through advanced engineering and sustainable design.
          </p>
        </Reveal>
        <Reveal delay={400}>
          <div className="flex gap-4 flex-wrap">
            <Link href="/projects">
              <Button size="lg">Our Projects</Button>
            </Link>
            <Link href="/">            
            <Button size="lg" variant="outline">
              Company Profile
            </Button>
            </Link>
          </div>
        </Reveal>
      </div>
      <Reveal delay={200}>
        <div className="relative overflow-hidden rounded-2xl flex-1">
          <Image
            src="/images/soroush-image1.jpg"
            alt=""
            width={900}
            height={700}
            className={cn(
              "object-cover transition-transform duration-700",
              hoverScale,
            )}
          />
        </div>
      </Reveal>
    </section>
  );
}
