import '../../index.css'
import { ClientOnly } from './client'

export function generateStaticParams() {
  return [
    // Root paths
    { slug: [] }, // for /
    { slug: ['index.html'] }, // for /index.html
    
    // English routes
    { slug: ['en'] },
    { slug: ['en', 'portfolio'] },
    { slug: ['en', 'contact'] },
    { slug: ['en', 'legal'] },
    
    // Greek routes
    { slug: ['el'] },
    { slug: ['el', 'portfolio'] },
    { slug: ['el', 'contact'] },
    { slug: ['el', 'legal'] },
    
    // Legacy routes without language prefix (redirect to /en)
    { slug: ['portfolio'] },
    { slug: ['contact'] },
    { slug: ['legal'] }
  ]
}

export default function Page() {
  return <ClientOnly />
}
