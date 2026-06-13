import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import {
  container,
  textTitle2,
  textBody,
  textLabel,
  hoverScale,
  sectionLayout,
  borderBase,
  transitionBase,
} from "@/lib/styles";
import { cn } from "@/lib/utils";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import Image from "next/image";
import { IconWrapper } from "./icon-wrapper";

export function Contact() {
  return (
    <section
      className={cn("relative overflow-hidden", sectionLayout, container)}
    >
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <span className={textLabel}>Get in Touch</span>
            <h2 className={textTitle2}>
              Strategic HQ in the Heart of{" "}
              <span className="text-primary">Tehran</span>
            </h2>
            <p className={textBody}>
              Our headquarters serves as the central hub for architectural
              innovation and engineering excellence, coordinating projects
              across the metropolitan area.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <IconWrapper variant="primary" size="lg" hover={false}>
                    <MapPin size={24} />
                  </IconWrapper>
                  <div className="flex flex-col gap-2">
                    <CardTitle>Main Office</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      TEHRAN, GHEYTARYEH, GHALANDARI ST, MIRZAPOUR ST,
                      <br />
                      No. 17, Unit 20
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+982126457196" className="flex-1 min-w-55">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <IconWrapper variant="primary" size="sm" hover={false}>
                        <Phone size={16} />
                      </IconWrapper>
                      <CardTitle className="text-sm">+98 21 26457196</CardTitle>
                    </div>
                    <CardAction>
                      <ArrowUpRight
                        size={16}
                        className="text-muted-foreground group-hover/card:text-primary transition-colors"
                      />
                    </CardAction>
                  </CardHeader>
                </Card>
              </a>
              <a href="mailto:info@soroushomran.ir" className="flex-1 min-w-55">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <IconWrapper variant="primary" size="sm" hover={false}>
                        <Mail size={16} />
                      </IconWrapper>
                      <CardTitle className="text-sm">
                        info@soroushomran.ir
                      </CardTitle>
                    </div>
                    <CardAction>
                      <ArrowUpRight
                        size={16}
                        className={cn(
                          "text-muted-foreground group-hover/card:text-primary",
                          transitionBase,
                        )}
                      />
                    </CardAction>
                  </CardHeader>
                </Card>
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full relative">
          <div
            className={cn(
              "group/map relative aspect-video lg:aspect-square rounded-3xl overflow-hidden",
              hoverScale,
              borderBase,
            )}
          >
            <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent z-10" />
            <Image
              src="/images/soroush-image3.jpg"
              alt="Soroush Omran Office Location"
              className={cn(
                "w-full h-full object-cover grayscale group-hover/map:grayscale-0",
              )}
              fill
            />
            <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8 z-20 bg-background/90 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl border border-primary/20 shadow-xl flex flex-col gap-0.5 sm:gap-1">
              <p className="text-[10px] uppercase tracking-widest text-primary font-bold">
                Working Hours
              </p>
              <p className="text-sm font-semibold">Sat — Thu: 09:00 - 18:00</p>
            </div>
          </div>

          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
}
