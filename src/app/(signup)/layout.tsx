import Link from "next/link";

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-light flex flex-col">
      <header className="border-b-2 border-dark/10 bg-light">
        <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center">
          <Link href="/" className="flex items-baseline gap-0.5">
            <span className="inline-block bg-golden px-1.5 py-0.5">
              <span className="font-display font-bold text-dark text-sm">HEAPS</span>
            </span>
            <span className="font-display font-bold text-dark text-sm ml-0.5">BETTER</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 flex flex-col">{children}</main>
    </div>
  );
}
