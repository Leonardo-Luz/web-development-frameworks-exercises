'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const path = usePathname()
  return (
    <nav>
      <ul>
        <li><Link href='/' className={path == '/' ? 'active' : ''}>Inicio</Link></li>
        <li><Link href='/noticias' className={path.startsWith('/noticias') ? 'active' : ''}>Noticias</Link></li>
        <li><Link href='/contatos' className={path == '/contatos' ? 'active' : ''}>Contatos</Link></li>
        <li><Link href='/sobre' className={path == '/sobre' ? 'active' : ''}>Sobre</Link></li>
        <li><Link href='/api/v1/contatos' className={path == '/sobre' ? 'active' : ''}>api</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
