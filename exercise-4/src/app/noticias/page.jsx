import CardNoticia from '@/components/cardnoticia'
import { getNoticias } from '@/lib/noticiasDB'

export default async function Noticias() {
    const noticias = await getNoticias()
    return(
        <div>
            <h2>Notícias</h2>
            <div className='flex-container'>
                {noticias.map(noticia => <CardNoticia key={noticia._id} noticia={noticia} />)}
            </div>
        </div>
    )
}