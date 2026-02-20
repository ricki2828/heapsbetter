import Link from "next/link";
import { CTAButton } from "@/components/shared/CTAButton";

export function MarketingHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-light/95 backdrop-blur-sm border-b-2 border-dark/10">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-0.5">
          <span className="inline-block bg-golden px-1.5 py-0.5">
            <span className="font-display font-bold text-dark text-sm">HEAPS</span>
          </span>
          <span className="font-display font-bold text-dark text-sm ml-0.5">BETTER</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#how-it-works" className="font-body text-dark/70 text-sm hover:text-dark transition-colors">
            How it works
          </Link>
          <Link href="#plans" className="font-body text-dark/70 text-sm hover:text-dark transition-colors">
            Plans
          </Link>
          <Link href="#faq" className="font-body text-dark/70 text-sm hover:text-dark transition-colors">
            FAQ
          </Link>
        </nav>

        <CTAButton variant="primary" size="sm" href="/signup/address">
          Check your address
        </CTAButton>
      </div>
    </header>
  );
}
