import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import {
  container,
  sectionLayout,
  textBody,
  textLabel,
  textTitle2,
  mainLayout,
} from "@/lib/styles";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className={mainLayout}>
      <section
        className={cn(sectionLayout, container, "flex items-center w-full")}
      >
        <div className={cn(container, "w-full")}>
          <div className="flex flex-col gap-3 items-center text-center">
            <span className={textLabel}>Error 404</span>
            <h1 className={textTitle2}>Page not found</h1>
            <p className={cn(textBody, "max-w-xl text-center!")}>
              The page you’re looking for doesn’t exist or may have been moved.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/">
                <Button>
                  <Home className="h-4 w-4" />
                  Back to home
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline">
                  <ArrowLeft className="h-4 w-4" />
                  View services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
