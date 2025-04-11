'use server'

import connectDB from '@/lib/connectDB'
import Noticia from '@/models/noticia'

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

export async function apagaNoticia(id, image) {

}
