'use client'

import { Noticia as NoticiaT } from "@/types"
import Image from "next/image";
import Link from "next/link";
import { use, useEffect, useState } from "react"

const Noticia = ({ params }: { params: Promise<{ id: string }> }) => {
  const [noticia, setNoticia] = useState<NoticiaT>();

  const { id } = use(params)

  const getNoticia = async () => {

    const response = await fetch(`/api/v1/noticias/${id}`, {
      method: 'GET'
    })

    const json = await response.json() as any

    setNoticia(json)
  }

  useEffect(() => {
    getNoticia()
  }, [])


  return (
    <>
      {
        noticia ?
          <div>
            <h2>{noticia.titulo}</h2>
            <Image className="imgCardNoticia"
              src={`/${noticia.imagem}`}
              alt={noticia.titulo}
              width={300}
              height={300}
            />
            <p className="tituloDescricao">{noticia.descricao}</p>
            <Link href='/noticias'>&#8592; Voltar</Link>
          </div>
          :
          <p>Noticia Not found!</p>
      }
    </>
  )
}
export default Noticia
