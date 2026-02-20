interface TrustBadgeProps {
  text: string;
  icon?: React.ReactNode;
  variant?: "light" | "dark";
}

export function TrustBadge({ text, icon, variant = "light" }: TrustBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-body font-medium ${
        variant === "light"
          ? "text-dark bg-light border-2 border-dark"
          : "text-light bg-dark"
      }`}
    >
      {icon}
      {text}
    </span>
  );
}
