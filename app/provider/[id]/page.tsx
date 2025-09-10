'use client'

import LoadingSpinner from '@/components/LoadingSpinner'
import CleanerProfile from '@/components/official/CleanerProfile'
import { Button } from '@/components/ui/button'
import { fetchProviderById } from '@/lib/services/providers'
import { Provider } from '@/lib/types'
import { ArrowLeftIcon } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const ProviderPage = () => {
  const router = useRouter()
  const { id } = useParams()
  const [provider, setProvider] = useState<Provider | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (id) {
      const fetchProvider = async () => {
        setIsLoading(true)
        const { data, error } = await fetchProviderById(id as string)

        if (data) {
          setProvider(data)
        }

        if (error) {
          setHasError(true)
        }
        //   setProvider(data);
        setIsLoading(false)
      }

      fetchProvider()
    }
  }, [id])

  if (hasError) {
    return (
      <div className="flex flex-col items-center justify-center">
        <h1>Provider not found</h1>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center relative">
      <div className="absolute top-2 left-2">
        <Button onClick={() => router.back()}>
          <ArrowLeftIcon />
          Back
        </Button>
      </div>

      {!isLoading && provider ? (
        <CleanerProfile provider={provider} />
      ) : (
        <div>
          <LoadingSpinner />
        </div>
      )}
    </div>
  )
}
export default ProviderPage
