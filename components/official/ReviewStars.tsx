import { Star } from 'lucide-react'

type ReviewStarsProps = {
  value: number // e.g., 4.3, 4.5, etc.
  max?: number
  sizeClass?: string
}

export default function ReviewStars({
  value,
  max = 5,
  sizeClass = 'size-3',
}: ReviewStarsProps) {
  const clamped = Math.max(0, Math.min(value, max))

  return (
    <span className="inline-flex items-center gap-0.5">
      {Array.from({ length: max }).map((_, i) => {
        // fill is 0..1 for this star index
        const fill = Math.max(0, Math.min(1, clamped - i))
        return (
          <span key={i} className="relative inline-block">
            {/* base (empty) */}
            <Star className={`${sizeClass} text-muted-foreground`} />
            {/* overlay (filled) */}
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <Star
                className={`${sizeClass} text-amber-400 fill-amber-400`}
                fill="currentColor"
              />
            </span>
          </span>
        )
      })}
      <span className="sr-only">
        {clamped.toFixed(1)} out of {max}
      </span>
    </span>
  )
}
