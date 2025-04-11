import mongoose from 'mongoose'

const sugestaoSchema = new mongoose.Schema({
    nome: String,
    telefone: String,
    email: String,
    sugestao: String
})

const Sugestao = mongoose.models.Sugestao || mongoose.model('Sugestao', sugestaoSchema)

export default Sugestao