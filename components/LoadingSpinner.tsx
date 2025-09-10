import { Loader2 } from 'lucide-react'

export default function LoadingSpinner({
  label = 'Loading...',
}: {
  label?: string
}) {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-muted-foreground">
      <Loader2 className="animate-spin size-8 mb-2 text-primary" />
      <p className="text-primary text-lg">{label}</p>
    </div>
  )
}
