import { CheckCircle2 } from 'lucide-react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog'
import { Button } from '../ui/button'

type Props = {
  isBookedOpen: boolean
  setIsBookedOpen: (open: boolean) => void
}
const BookingSuccess = ({ isBookedOpen, setIsBookedOpen }: Props) => {
  return (
    <Dialog open={isBookedOpen} onOpenChange={setIsBookedOpen}>
      <DialogContent className="sm:max-w-[420px]">
        <DialogHeader>
          <div className="mx-auto mb-2 grid h-12 w-12 place-items-center rounded-full bg-green-100">
            <CheckCircle2 className="h-6 w-6 text-green-600" />
          </div>
          <DialogTitle className="text-center">Booking Saved!</DialogTitle>
          <DialogDescription className="text-center">
            We&apos;ve received your request. We&apos;ll confirm your schedule
            shortly.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-center">
          <DialogClose asChild>
            <Button className="px-6">Done</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default BookingSuccess
