import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  container,
  sectionLayout,
  textBody,
  textLabel,
  textTitle3,
} from "@/lib/styles";
import { Button } from "./button";

export function ServicesCta() {
  return (
    <section className={cn(container, sectionLayout)}>
      <Reveal side="bottom">
        <Card variant="feature">
          <CardContent className="flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex max-w-2xl flex-col gap-3">
              <p className={textLabel}>Start a Conversation</p>
              <h2 className={textTitle3}>
                Need technical support for a new project or an existing
                building?
              </h2>
              <p className={textBody}>
                We can help you evaluate scope, define priorities, and move
                toward a more coordinated engineering solution.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/about-us">
                <Button>Contact Us</Button>
              </Link>
              <Link href="/projects">
                <Button variant="secondary">View Projects</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </Reveal>
    </section>
  );
}
