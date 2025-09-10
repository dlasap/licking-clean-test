import { supabase } from '../supabase/client'

async function fetchProviders() {
  const { data, error } = await supabase.from('providers').select('*')

  return { data, error }
}

async function fetchProviderById(id: string) {
  const { data, error } = await supabase
    .from('providers')
    .select('*')
    .eq('id', id)
    .single()

  return { data, error }
}
export { fetchProviders, fetchProviderById }
