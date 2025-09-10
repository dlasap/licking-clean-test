import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import ReviewStars from './ReviewStars'

function ReviewCard({
  name,
  text,
  stars,
}: {
  name: string
  text: string
  stars: number
}) {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="flex-row items-center gap-3">
        <Avatar className="size-10">
          <AvatarImage
            src={`https://api.dicebear.com/8.x/initials/svg?seed=${encodeURIComponent(name)}`}
            alt={name}
          />
          <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="text-sm font-medium">{name}</div>
          <div className="text-xs text-muted-foreground flex items-center gap-1">
            <ReviewStars value={stars} />
            <span>• Verified client</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0 text-sm">{text}</CardContent>
    </Card>
  )
}

export default ReviewCard
