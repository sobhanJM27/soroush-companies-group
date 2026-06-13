import { Button } from "@/components/ui/button";
import { textTitle2, textBody, transitionBase } from "@/lib/styles";
import { cn } from "@/lib/utils";

export function ProjectCTA() {
  return (
    <div className="text-center flex flex-col items-center gap-6 py-12 border-t border-border/50">
      <h2 className={textTitle2}>Let&apos;s discuss your next project</h2>
      <p className={cn(textBody, "max-w-lg mx-auto text-center!")}>
        Whether you are planning a residential development or a commercial complex, 
        our team is ready to provide technical excellence and design clarity.
      </p>
      <Button variant="outline" size="lg" className="rounded-full px-12 group">
        Get in touch
        <span className={cn("group-hover:translate-x-1", transitionBase)}>→</span>
      </Button>
    </div>
  );
}
