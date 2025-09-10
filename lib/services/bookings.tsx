import { supabase } from '../supabase/client'

async function createBooking(providerId: string) {
  const { data, error } = await supabase
    .from('bookings')
    .insert([
      {
        provider_id: providerId,
      },
    ])
    .single()

  return { data, error }
}

export { createBooking }
