export function SubtleGrid({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none z-0 ${className ?? ""}`}
      style={{
        backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(74, 70, 66, 0.045) 49px, rgba(74, 70, 66, 0.045) 50px),
          repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(74, 70, 66, 0.045) 49px, rgba(74, 70, 66, 0.045) 50px)
        `,
      }}
    />
  );
}

export function SubtleGlow({
  color = "#2451a3",
  position = "bottom",
  className,
}: {
  color?: string;
  position?: "top" | "bottom" | "center";
  className?: string;
}) {
  const posMap = {
    top: "50% 0%",
    bottom: "50% 100%",
    center: "50% 50%",
  };

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none z-0 ${className ?? ""}`}
      style={{
        background: `radial-gradient(ellipse at ${posMap[position]}, ${color}14 0%, transparent 60%)`,
      }}
    />
  );
}
