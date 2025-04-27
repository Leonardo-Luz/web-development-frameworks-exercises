import Link from 'next/link'

export default function Administracao(){
    return(
        <div>
            <h2>Administração do site</h2>
            <p className='buttonLink'><Link href='/adm/noticias'>Administrar notícias</Link></p>
            <p className='buttonLink'><Link href='/adm/sugestoes'>Ver sugestões</Link></p>
        </div>
    )
}