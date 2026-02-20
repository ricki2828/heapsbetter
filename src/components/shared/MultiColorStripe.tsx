interface MultiColorStripeProps {
  height?: number;
  className?: string;
}

export function MultiColorStripe({ height = 8, className = "" }: MultiColorStripeProps) {
  return (
    <div className={`flex w-full ${className}`} style={{ height }} aria-hidden="true">
      <div className="flex-1 bg-golden" />
      <div className="flex-1 bg-orange" />
      <div className="flex-1 bg-teal" />
      <div className="flex-1 bg-red" />
    </div>
  );
}
