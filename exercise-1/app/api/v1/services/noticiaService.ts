import connectDB from "../../config/database"
import NoticiaModel from "@/models/noticiaModel"

export const GetAll = async () => {
	await connectDB()
		.then(() => {
			console.log('Conexão estabelecida com o banco!')
		})
		.catch((err: any) => {
			console.log('Erro ao conectar com o banco.')

			console.log(err)
		})

	return await NoticiaModel.find({}).exec()
}

export const Get = async (id: string) => {
	await connectDB()
		.then(() => {
			console.log('Conexão estabelecida com o banco!')
		})
		.catch((err: any) => {
			console.log('Erro ao conectar com o banco.')

			console.log(err)
		})

	return await NoticiaModel.findOne({ _id: id }).exec()
}
