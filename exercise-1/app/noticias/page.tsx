'use client'

import { useEffect, useState } from "react"
import CardNoticia from "@/components/cardNoticia/page";
import { Noticia } from "@/types";

const Noticias = () => {
  const [noticias, setNoticias] = useState<Noticia[]>();

  const getNoticias = async () => {
    const response = await fetch('/api/v1/noticias', {
      method: 'GET'
    })

    const json = await response.json() as any

    setNoticias(json)
  }

  useEffect(() => {
    getNoticias()
  }, [])

  return (
    <div>
      <h1>Noticias</h1>

      <div className="flex-container">
        {
          noticias ?
            noticias.map(noticia => <CardNoticia key={noticia._id} noticia={noticia} />) :
            <p>Nenhuma noticia encontrada!</p>
        }
      </div>
    </div>
  )
}

export default Noticias
