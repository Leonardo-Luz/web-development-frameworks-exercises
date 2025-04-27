'use client'
import Link from "next/link";
import {usePathname} from 'next/navigation'

export default function NavBar(){
    const path = usePathname()
    return(
        <nav>
            <ul>
                <li><Link href="/noticias" className={path.startsWith('/noticias') ? 'active' : undefined}>Notícias</Link></li>
                <li><Link href="/contato" className={path == '/contato' ? 'active' : undefined}>Contato</Link></li>
                <li><Link href="/sobre" className={path == '/sobre' ? 'active' : undefined}>Sobre</Link></li>
            </ul>
        </nav>
    )
}