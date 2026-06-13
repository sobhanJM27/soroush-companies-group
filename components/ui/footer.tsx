import { footerItems } from "@/constants/footer-items";
import Link from "next/link";
import Image from "next/image";
import { container, transitionBase } from "@/lib/styles";
import { cn } from "@/lib/utils";
import { IconWrapper } from "./icon-wrapper";

export default function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />
      <div className={cn("py-16", container)}>
        <div className="flex max-md:flex-col items-center gap-12 justify-between!">
          <div className="flex-1 flex flex-col min-w-60 gap-4">
            <Link
              href="/"
              className="group w-fit transition-transform duration-500 hover:scale-[1.02]"
            >
              <Image
                src={footerItems.brand.logo}
                alt={footerItems.brand.name}
                width={200}
                height={200}
                className="transition-opacity duration-500 group-hover:opacity-90"
              />
            </Link>
            <p className="text-sm max-w-sm text-muted-foreground">
              {footerItems.brand.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-x-12 gap-y-8">
            {footerItems.navigation.map((section) => (
              <div
                key={section.id}
                className="flex-1 min-w-45 flex flex-col gap-3"
              >
                <h3 className="font-semibold tracking-wide text-foreground/90">
                  {section.title}
                </h3>
                <ul className="text-sm text-muted-foreground flex flex-col gap-2">
                  {section.links.map((link) => (
                    <li key={link.id}>
                      <Link
                        href={link.href}
                        className={cn(
                          "relative w-fit hover:text-foreground",
                          "after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0",
                          "after:bg-foreground after:transition-all after:duration-300",
                          "hover:after:w-full",
                          transitionBase,
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="flex-1 min-w-55 flex flex-col gap-3">
              <h3 className="font-semibold tracking-wide text-foreground/90">
                Contact
              </h3>
              {footerItems.contact.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.id}
                    className={cn(
                      "flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground",
                      transitionBase,
                    )}
                  >
                    <Icon size={16} className="shrink-0 opacity-80" />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="my-12 border-t border-border/80" />
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between text-sm text-muted-foreground">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} {footerItems.brand.name}. All rights
            reserved.
          </p>

          <div className="flex items-center justify-center gap-5 sm:justify-end">
            {footerItems.social.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={cn("group hover:-translate-y-1", transitionBase)}
                >
                  <IconWrapper
                    variant="primary"
                    className={cn("group-hover:scale-110", transitionBase)}
                  >
                    <Icon size={18} />
                  </IconWrapper>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
