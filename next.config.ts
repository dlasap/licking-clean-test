import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/provider',
        destination: '/',
        permanent: false, // use true if you want a 308 redirect
      },
    ]
  },
}

export default nextConfig
