import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import {
  textTitle2,
  textBody,
  bgGradientPrimary,
  textLabel,
} from "@/lib/styles";
import { cn } from "@/lib/utils";

export function PortfolioDownload() {
  return (
    <div className={cn("p-8 md:p-16", bgGradientPrimary)}>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl flex flex-col gap-3">
          <span className={textLabel}>Portfolio</span>
          <h2 className={textTitle2}>Explore our complete project archive</h2>
          <p className={textBody}>
            For a broader view of our experience, technical capabilities, and
            full project range, you can download the comprehensive company
            portfolio in PDF format.
          </p>
        </div>
        <a href="/Portfolio Soroush Omran-compressed.pdf">
          <Button variant="primary" size="lg" className="md:px-14 md:py-8">
            <Download className="w-5 h-5" />
            Download PDF
          </Button>
        </a>
      </div>
    </div>
  );
}
