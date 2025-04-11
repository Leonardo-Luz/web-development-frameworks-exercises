import {use} from "react"
import Image from "next/image";
import Link from "next/link";
import { getNoticia } from "@/lib/noticiasDB";

export default function Noticia({params}){
    const {id} = use(params)
    const noticia = use(getNoticia(id))
    return(
      <div>
        <h2>{noticia.titulo}</h2>
        <Image 
            className="imgCardNoticia"
            src={"/"+noticia.imagem}
            alt="Imagem"
            width={300}
            height={300}
        />
        <p className="descricaoNoticia">{noticia.descricao}</p>
        <p><Link href="/noticias">&#8592; Voltar</Link></p>
      </div>
    )
}