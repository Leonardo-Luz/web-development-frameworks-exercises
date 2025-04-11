import Noticia from "@/models/noticia"
import connectDB from "@/lib/connectDB"
import noticias from "@/noticias.json"
import {redirect} from 'next/navigation'

export default async function Seeds(){
    await connectDB()
        .then(() => {
            console.log('Conexão estabelecida com o banco!')
        })
        .catch(err => {
            console.log('Erro ao conectar com o banco.')
            console.log(err)
        })

        const news = noticias.map(noticia => {
            let {id, ...novaNoticia} = noticia
            return novaNoticia
        })
        
        console.log(news)
        
        Noticia.insertMany(news)
            .then(res => {
                //console.log(res)
                console.log('Dados salvos no banco com sucesso!')
            })
            .catch(e => {
                console.log(e)
            })
        
        redirect('/noticias')
}