'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import {
  ShieldCheck,
  Sparkles,
  Users,
  CheckCircle2,
  ThumbsUp,
  Baby,
  Leaf,
  Calendar,
} from 'lucide-react'
import { useCallback, useState, useTransition } from 'react'
import { Provider } from '@/lib/types'
import ReviewCard from './ReviewCard'
import ReviewStars from './ReviewStars'
import Fact from './Fact'

import PROVIDER_AVATAR from '../../public/smiling-lady.jpg'
import BookingSuccess from './BookingSuccess'
import { createBooking } from '@/lib/services/bookings'

const reviews = [
  {
    name: 'Maria F.',
    text: 'Sparkling clean and super kind with our toddler around. Will rebook!',
    stars: 5,
  },
  {
    name: 'Nikki S.',
    text: 'Right on time, respectful, and thorough—kitchen looks brand new.',
    stars: 5,
  },
  {
    name: 'Jessa J.',
    text: 'Loved the eco products. Great attention to details in the bathroom.',
    stars: 4,
  },
]

type CleanerProfileProps = {
  provider: Provider
}

export default function CleanerProfile({ provider }: CleanerProfileProps) {
  const [sortedReviews, setSortedReviews] = useState(reviews)
  const [isBooking, setIsBooking] = useState(false)
  const [openBookingSuccess, setOpenBookingSuccess] = useState(false)
  const [isAsc, setIsAsc] = useState(false)
  const [error, setError] = useState('')

  async function handleBook() {
    setIsBooking(true)
    const { error } = await createBooking(provider.id)
    if (!error) {
      setOpenBookingSuccess(true)
      setError('')
    } else {
      setError('Sorry, something went wrong.')
      console.error(error)
    }
    setIsBooking(false)
    setOpenBookingSuccess(true)
  }

  const handleSortByRating = useCallback(() => {
    setIsAsc((prev) => !prev)

    const sortedData = [...sortedReviews].sort((a, b) => {
      if (a['stars'] < b['stars']) {
        return isAsc ? 1 : -1 // For ascending, or 1 for descending
      }
      if (a['stars'] > b['stars']) {
        return isAsc ? -1 : 1 // For ascending, or -1 for descending
      }
      return 0
    })
    setSortedReviews(sortedData)
  }, [sortedReviews, isAsc])

  return (
    <main className="min-h-dvh bg-background text-foreground font-body">
      <section className="max-w-[480px] mx-auto px-4 pt-6 pb-3">
        <div className="flex items-center gap-3">
          <Avatar className="size-14">
            <AvatarImage src={PROVIDER_AVATAR.src} alt={provider.name} />
            <AvatarFallback>LC</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h1 className="text-xl font-heading text-primary">Licking Clean</h1>
            <p className="text-sm text-muted-foreground">
              Mom-friendly home cleaning in your neighborhood
            </p>
            <div className="mt-1 flex items-center gap-1 text-amber-500">
              <ReviewStars value={provider.rating} />
              <span className="text-xs text-muted-foreground">
                (212 reviews)
              </span>
            </div>
          </div>

          <Badge
            className="text-stone-900 flex items-center gap-1"
            style={{ backgroundColor: '#F5E050' }}
          >
            <Sparkles className="size-3.5" /> Top Rated
          </Badge>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
          <Fact
            icon={<ShieldCheck className="size-4" />}
            label="Background checked"
          />
          <Fact icon={<Users className="size-4" />} label="200+ families" />
          <Fact icon={<Leaf className="size-4" />} label="Eco options" />
        </div>

        <Card className="mt-2 border-0 shadow-sm">
          <CardContent className="">
            <p className="text-sm">
              Friendly, detail‑oriented cleaner focused on families with little
              kids. Gentle products available on request, shoe covers used, and
              pet‑safe routines.
            </p>
            <Separator className="mt-2" />

            <ul className="mt-3 flex flex-wrap gap-2">
              {[
                'General clean',
                'Kitchen',
                'Bathrooms',
                'Bedrooms',
                'Play areas',
                'Laundry add‑on',
              ].map((t) => (
                <Badge key={t} variant="default" className="rounded-full">
                  {t}
                </Badge>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-[480px] mx-auto px-4 pb-4">
        <Card className="border-0 bg-card">
          <CardContent className="py-3">
            <div className="flex items-center gap-3 text-xs">
              <CheckCircle2 className="size-4 text-primary" />
              <span>Money‑back guarantee if you’re not satisfied.</span>
            </div>
            <div className="mt-2 flex items-center gap-3 text-xs">
              <Baby className="size-4 text-primary" />
              <span>Kid‑safe supplies on request, shoe covers used.</span>
            </div>
            <div className="mt-2 flex items-center gap-3 text-xs">
              <ThumbsUp className="size-4 text-primary" />
              <span>
                Fully insured. Photos & checklists shared after every job.
              </span>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-[480px] mx-auto px-4 pb-6">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-lg text-primary">Recent Reviews</h2>
          <Button
            onClick={handleSortByRating}
            className="text-xs underline underline-offset-4 text-primary bg-primary/20  hover:bg-primary/5"
          >
            {!isAsc ? 'Lowest' : 'Highest'} rating first
          </Button>
        </div>
        <div className="mt-3 grid gap-3">
          {sortedReviews.map((r, idx) => (
            <ReviewCard
              key={r.name + idx}
              name={r.name}
              text={r.text}
              stars={r.stars}
            />
          ))}
        </div>
      </section>

      <section className="max-w-[480px] mx-auto px-4 pb-32">
        <h2 className="font-heading text-lg text-primary">FAQ</h2>
        <Accordion type="single" collapsible className="mt-2">
          <AccordionItem value="supplies">
            <AccordionTrigger>Do you bring supplies?</AccordionTrigger>
            <AccordionContent>
              Yes. Standard supplies are included. Eco/kid‑safe products
              available upon request.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="pets">
            <AccordionTrigger>Are you pet‑friendly?</AccordionTrigger>
            <AccordionContent>
              Absolutely. We’re comfortable with pets and can work around
              crates/feeding times.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="reschedule">
            <AccordionTrigger>What is the reschedule policy?</AccordionTrigger>
            <AccordionContent>
              Free reschedule up to 24 hours before your appointment.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <div className="fixed bottom-0 left-0 right-0 border-t bg-card/90 backdrop-blur supports-[backdrop-filter]:bg-card/70">
        <div className="max-w-[480px] mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="hidden xs:flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="size-4" />
              Next openings this week
            </div>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex items-center gap-2">
            <Button
              className="h-10 px-4 bg-accent text-accent-foreground hover:opacity-90"
              onClick={handleBook}
            >
              <Sparkles className="mr-2 size-4" />{' '}
              {isBooking ? 'Booking…' : 'Book Now'}
            </Button>
          </div>
        </div>
      </div>

      <BookingSuccess
        isBookedOpen={openBookingSuccess}
        setIsBookedOpen={setOpenBookingSuccess}
      />
    </main>
  )
}
