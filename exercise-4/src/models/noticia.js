import mongoose from 'mongoose'

const noticiaSchema = new mongoose.Schema({
    titulo: String,
    descricao: String,
    imagem: String
})

const Noticia = mongoose.models.Noticia || mongoose.model('Noticia', noticiaSchema)

export default Noticia