import { Get } from "../../services/noticiaService"

export const GET = async (req: Request, context: { params: Promise<{ id: string }> }) => {
	const id = (await context.params).id

	const noticia = await Get(id)

	if (noticia == undefined) {
		return new Response(JSON.stringify({ message: 'Noticia não foi encontrada!' }), { status: 404 })
	}

	return new Response(JSON.stringify(noticia), { status: 200 })
}
