import CleanerProviders from '@/components/official/CleanerProviders'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <CleanerProviders />
      </main>
    </div>
  )
}
