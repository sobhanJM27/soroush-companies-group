import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { cn } from "@/lib/utils";
import { textBody, transitionBase, textTitle3 } from "@/lib/styles";
import { ArrowUpRight } from "lucide-react";
import { projectsItems } from "@/constants/projects-items";
import Image from "next/image";
import { IconWrapper } from "./icon-wrapper";

export function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {projectsItems.map((p) => (
        <Card
          key={
            typeof p.id === "string" || typeof p.id === "number"
              ? p.id
              : String(p.id)
          }
          variant="interactive"
          className="group cursor-pointer"
        >
          <a
            href={p.image}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="relative aspect-16/10 overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20 backdrop-blur-[2px]">
                <IconWrapper
                  size="lg"
                  className="bg-background text-primary rounded-full shadow-md"
                >
                  <ArrowUpRight className="w-6 h-6" />
                </IconWrapper>
              </div>
            </div>
          </a>
          <CardHeader className="pt-6">
            <div className="flex justify-between items-start text-[10px] uppercase tracking-[0.18em] text-primary font-semibold">
              <span>{p.type}</span>
              <span className="text-muted-foreground">
                {p.location} · {p.year}
              </span>
            </div>
            <CardTitle
              className={cn(
                "mt-2 group-hover:text-primary",
                transitionBase,
                textTitle3,
              )}
            >
              {p.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className={cn(textBody, "line-clamp-2")}>
              {p.desc}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
