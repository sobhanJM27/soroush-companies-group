import {
  container,
  dividerPrimary,
  sectionLayout,
  textBody,
  textLabel,
  textTitle1,
  textTitle2,
} from "@/lib/styles";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const BentoIdentity = () => (
  <section className={cn(sectionLayout, container)}>
    <div className="flex flex-col gap-3 items-start mb-8 sm:mb-12">
      <span className={textLabel}>In-House Excellence</span>
      <h2 className={textTitle1}>
        OUR <span className="text-primary italic">WORKSPACE</span>
      </h2>
      <div className={dividerPrimary}></div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 md:auto-rows-[280px]">
      <div
        className="md:col-span-2 lg:col-span-3 lg:row-span-2 bg-primary/60 
          p-6 sm:p-10 lg:p-12 
          flex flex-col justify-end border-l-4 border-primary relative overflow-hidden group
          min-h-87.5 md:min-h-0"
      >
        <div className="relative z-10 flex flex-col gap-4">
          <h3 className={cn("text-white leading-tight", textTitle2)}>
            Crafting the <br />
            <span className="text-primary uppercase">Blueprint of Success</span>
          </h3>
          <p
            className={cn(
              "max-w-md text-left!",
              textBody,
            )}
          >
            Our headquarters in Tehran is a testament to our engineering
            philosophy. From raw sketches on our studio walls to final
            structural integrity, we maintain a standard of excellence that
            defines Soroush Companies group.
          </p>
        </div>
        <div
          className="absolute -right-6 -top-6 sm:-right-12 sm:-top-12 
            opacity-[0.03] lg:opacity-[0.06] group-hover:opacity-[0.5] lg:group-hover:opacity-[1] 
            transition-opacity duration-700 pointer-events-none"
        >
          <Image
            src="/images/logo1.png"
            width={200}
            height={200}
            className="w-48 sm:w-64 lg:w-96 h-auto"
            alt="Logo Watermark"
          />
        </div>
      </div>
      <div className="md:col-span-2 lg:col-span-3 h-70 md:h-auto relative overflow-hidden rounded-xl group">
        <Image
          src="/images/soroush-image1.jpg"
          alt="Office Sketch Wall"
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent opacity-60" />
        <div className="absolute bottom-4 left-4 text-white text-xs font-medium tracking-widest uppercase">
          Creative Core
        </div>
      </div>
      <div className="md:col-span-1 lg:col-span-2 h-70 md:h-auto relative overflow-hidden rounded-xl group">
        <Image
          src="/images/soroush-image2.jpg"
          alt="Office Environment"
          fill
          className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
        />
      </div>
      <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 h-100 md:h-auto relative overflow-hidden rounded-xl group border-2 border-primary">
        <Image
          src="/images/projects/mehrarad.png"
          alt="Architectural Detail"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
        <div className="absolute top-0 right-0 bg-primary text-slate-950 text-[10px] font-black px-3 py-1.5 uppercase">
          Signature Project
        </div>
      </div>
      <div className="md:col-span-1 lg:col-span-2 h-70 md:h-auto relative overflow-hidden rounded-xl group">
        <Image
          src="/images/soroush-image4.jpg"
          alt="Workspace"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="md:col-span-1 lg:col-span-2 h-70 md:h-auto relative overflow-hidden rounded-xl group">
        <Image
          src="/images/soroush-image3.jpg"
          alt="Office Detail"
          fill
          className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
        />
      </div>
      <div className="md:col-span-1 lg:col-span-2 h-70 md:h-auto relative overflow-hidden rounded-xl group">
        <Image
          src="/images/soroush-image5.jpg"
          alt="Interior Ambiance"
          fill
          className="object-cover transition-transform duration-700 group-hover:rotate-1"
        />
      </div>
    </div>
  </section>
);
