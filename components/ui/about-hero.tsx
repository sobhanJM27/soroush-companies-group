import { sectionLayout } from "@/lib/styles";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const AboutHero = () => (
  <section
    className={cn(
      "relative h-[90vh] flex items-center bg-black overflow-hidden rounded-md",
      sectionLayout,
    )}
  >
    <div className="absolute inset-0 opacity-50">
      <Image
        src="/images/projects/mehrarad.png"
        alt="Soroush Companies group Architecture"
        fill
        className="object-cover"
        priority
      />
    </div>
    <div className="container mx-auto px-6 relative z-10">
      <h1 className="text-8xl md:text-[12rem] font-black text-white leading-none tracking-tighter">
        BEYOND <br />{" "}
        <span className="text-outline text-transparent border-t border-white/20">
          STRUCTURE
        </span>
      </h1>
      <p className="mt-8 text-xl text-white/90 max-w-lg uppercase tracking-widest">
        Engineering Excellence & Architectural Mastery since 2011.
      </p>
    </div>
  </section>
);
