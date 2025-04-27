'use server'

import connectDB from '@/lib/connectDB'
import Noticia from '@/models/noticia'
import { redirect } from 'next/navigation'
import xss from 'xss'
import fs from 'node:fs'

async function connDB() {
    await connectDB()
        .then(() => {
            console.log('Conexão estabelecida com o banco!')
        })
        .catch(err => {
            console.log('Erro ao conectar com o banco.')
            console.log(err)
        })
}
export async function getNoticias() {
    await connDB()
    //await new Promise(resolve => setTimeout(resolve, 2000))
    return await Noticia.find({})
}
export async function getNoticia(id) {
    await connDB()
    //await new Promise(resolve => setTimeout(resolve, 2000))
    return await Noticia.findById(id)
}

export async function apagaNoticia(id, imagem) {
}

export async function gravaNoticia(noticia) {
    await connDB()
    const titulo = xss(noticia.titulo)
    const descricao = xss(noticia.descricao)
    const imagem = noticia.imagem
    const nomeImagem = geraNomeImagem(titulo, imagem.name)
    const novaNoticia = new Noticia({ titulo, descricao, imagem: nomeImagem })
    gravaImagem(imagem, nomeImagem)
    await novaNoticia.save()

    redirect(`/adm/noticias`)
}

function geraNomeImagem(titulo, nomeImagem) {
    return `${titulo.substring(0, 15)}-${nomeImagem.substring(nomeImagem.length - 15)}`
}

async function gravaImagem(imagem, nomeImagem) {
    const stream = fs.createWriteStream(`public/${nomeImagem}`)
    const bufferedImagem = await imagem.arrayBuffer()
    stream.write(Buffer.from(bufferedImagem), (error) => {
        if (error) {
            console.log("errou")
            console.log("errou")
        }
    })
}

export async function editaNoticia(noticia) {

}
