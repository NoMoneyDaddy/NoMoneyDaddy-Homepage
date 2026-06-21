import { RATING } from '@/lib/constants'

export function StaticStars({
  score = RATING.score,
  maxScore = RATING.maxScore,
}: {
  score?: number
  maxScore?: number
} = {}) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1" aria-hidden="true">
        {Array.from({ length: maxScore }).map((_, i) => (
          <span key={i} className="text-yellow-400">
            ★
          </span>
        ))}
      </div>
      <span className="text-sm text-gray-600">
        {score} / {maxScore}.0
      </span>
    </div>
  )
}
