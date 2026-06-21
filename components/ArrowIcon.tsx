export function ArrowIcon({
  className = "w-4 h-4",
  direction = "right"
}: {
  className?: string
  direction?: "right" | "left"
}) {
  const pathD = direction === "right"
    ? "M9 5l7 7-7 7"
    : "M15 19l-7-7 7-7"

  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={pathD}
      />
    </svg>
  )
}
