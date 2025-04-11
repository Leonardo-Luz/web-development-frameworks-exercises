import { GetAll, Post } from "../services/noticiaService"

export const GET = async () => {
	const noticias = await GetAll()

	return new Response(JSON.stringify(noticias), { status: 200 })
}
export const POST = async (req: Request) => {
	const body = await req.json()

	const newNoticia = {
		...body,
	}

	Post(newNoticia).then(() => {
		return new Response(JSON.stringify({ message: 'Noticia criada com sucesso!' }), { status: 200 })
	}).catch(e => {
		console.log(e);
		return new Response(JSON.stringify({ message: 'Erro ao criar noticia!' }), { status: 500 })
	})
}
