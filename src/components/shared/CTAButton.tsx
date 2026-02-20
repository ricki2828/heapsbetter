"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface CTAButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "onDark";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
}

const variants = {
  primary: "bg-teal text-white hover:scale-[1.02]",
  secondary: "bg-orange text-white hover:scale-[1.02]",
  ghost: "bg-transparent text-dark border-2 border-dark hover:scale-[1.02]",
  onDark: "bg-golden text-dark hover:scale-[1.02]",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-8 py-4 text-base",
  lg: "px-8 py-4 text-lg",
};

export function CTAButton({
  variant = "primary",
  size = "md",
  children,
  onClick,
  href,
  disabled = false,
  fullWidth = false,
  className,
}: CTAButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-body font-medium rounded-lg transition-transform duration-200 ease-out min-h-[48px] cursor-pointer",
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    disabled && "opacity-50 cursor-not-allowed hover:scale-100",
    className
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
