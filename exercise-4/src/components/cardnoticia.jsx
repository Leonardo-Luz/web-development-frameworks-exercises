import Image from "next/image";
import Link from "next/link";

export default function CardNoticia({noticia}){
    return(
        <Link href={`/noticias/${noticia.id}`}>
            <div className="cardNoticia">
                <Image 
                    src={"/"+noticia.imagem}
                    alt="Imagem"
                    width={100}
                    height={100}
                />
                <p className="tituloNoticia">{noticia.titulo}</p>
                <p className="textoNoticia">{noticia.descricao.substring(0,200)+" ..."}</p>
            </div>
        </Link>
    )
}