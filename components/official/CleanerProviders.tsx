'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Sparkles } from 'lucide-react'
import LoadingSpinner from '../LoadingSpinner'
import { fetchProviders } from '@/lib/services/providers'
import { Provider } from '@/lib/types'

export default function CleanerProviders() {
  const [providers, setProviders] = useState<Provider[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const { data, error } = await fetchProviders()

      if (error) console.error('Error fetching providers:', error)
      else setProviders(data as Provider[])
      setIsLoading(false)
    }

    fetchData()
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground font-body">
      <section className="max-w-[800px] mx-auto px-4 py-6">
        <h1 className="text-2xl font-heading mb-4">Available Cleaners</h1>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid gap-4">
            {providers.map((provider) => (
              <Link
                key={provider.id}
                href={`/provider/${provider.id}`}
                className="p-4 rounded-xl border bg-card hover:shadow-md transition"
              >
                <div className="flex items-center gap-4">
                  <Avatar className="size-16">
                    <AvatarImage
                      src={'./smiling-lady.jpg'}
                      alt={provider.name}
                    />
                    <AvatarFallback>{provider.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h2 className="text-2xl font-heading text-primary">
                      {provider.name}
                    </h2>
                    <p className="text-xs text-muted-foreground my-2">
                      {provider.bio}
                    </p>
                  </div>
                  <Badge
                    className="text-stone-900 flex items-center gap-1"
                    style={{ backgroundColor: '#F5E050' }}
                  >
                    <Sparkles className="size-3.5" /> Top Rated
                  </Badge>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
