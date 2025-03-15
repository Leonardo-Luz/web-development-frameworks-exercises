import { model, models, Schema } from 'mongoose'

interface NoticiaInt {
	titulo: String,
	descricao: String,
	imagem: String
}

const noticiaSchema = new Schema<NoticiaInt>({
	titulo: { type: String, required: true },
	descricao: { type: String, required: true },
	imagem: { type: String, required: true }
})

const NoticiaModel = models.Noticia || model('Noticia', noticiaSchema)

export default NoticiaModel
