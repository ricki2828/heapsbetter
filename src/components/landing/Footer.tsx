import { MultiColorStripe } from "@/components/shared/MultiColorStripe";
import { TheTagline } from "@/components/shared/TheTagline";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-dark">
      <MultiColorStripe />
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-3">
              <span className="inline-block bg-golden px-2 py-0.5">
                <span className="font-display font-bold text-dark text-lg">HEAPS</span>
              </span>
              <br />
              <span className="font-display font-bold text-light text-lg">BETTER</span>
            </div>
            <p className="font-body text-light/60 text-sm">
              Broadband from people who give a damn.
            </p>
            <div className="mt-3">
              <TheTagline size="sm" color="light" />
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-light text-sm uppercase tracking-wider mb-3">Pages</h4>
            <ul className="space-y-2">
              {["Plans", "How it works", "About", "Blog"].map((link) => (
                <li key={link}>
                  <Link href="#" className="font-body text-light/60 text-sm hover:text-teal transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-bold text-light text-sm uppercase tracking-wider mb-3">Support</h4>
            <ul className="space-y-2 font-body text-light/60 text-sm">
              <li>0800 XXX XXX</li>
              <li>support@heapsbetter.co.nz</li>
              <li>Mon–Fri 8am–8pm</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-bold text-light text-sm uppercase tracking-wider mb-3">Legal</h4>
            <ul className="space-y-2">
              {["Terms", "Privacy", "Complaints"].map((link) => (
                <li key={link}>
                  <Link href="#" className="font-body text-light/60 text-sm hover:text-teal transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-light/10 mt-8 pt-6">
          <p className="font-body text-light/40 text-xs text-center">
            Heaps Better Ltd. NZ Company No. XXXXXX. &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
