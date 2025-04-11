import NoticiaModel from "@/models/noticiaModel"
import noticias from "@/noticias.json"
import connectDB from "../config/database"
import { redirect } from "next/navigation"

export default async function Seeds() {
    await connectDB()
        .then(() => {
            console.log('Conexão estabelecida com o banco!')
        })
        .catch((err: any) => {
            console.log('Erro ao conectar com o banco.')
            console.log(err)
        })

    const find = await NoticiaModel.findById(noticias[0].id);

    if(find != null){
        redirect('/')
    }

    const news = noticias.map(noticia => {
        let { id, ...novaNoticia } = noticia
        return novaNoticia
    })

    NoticiaModel.insertMany(news)
        .then(() => {
            console.log('Dados salvos no banco com sucesso!')
        })
        .catch(e => {
            console.log(e)
        })

    redirect('/')
}

