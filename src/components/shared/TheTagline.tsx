interface TheTaglineProps {
  size?: "sm" | "md" | "lg";
  color?: "dark" | "light";
}

const sizeClasses = {
  sm: "text-sm",
  md: "text-lg",
  lg: "text-2xl",
};

export function TheTagline({ size = "md", color = "dark" }: TheTaglineProps) {
  return (
    <p
      className={`font-display font-medium ${sizeClasses[size]} ${
        color === "dark" ? "text-dark" : "text-light"
      }`}
    >
      It&apos;s Broadband. Calm Down.
    </p>
  );
}
