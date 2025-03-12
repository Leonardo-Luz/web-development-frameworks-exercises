import noticias from '@/noticias.json'

export const GET = async (req: Request, context: { params: { id: string } }) => {
	const id = parseInt(await (context).params.id)

	const response = noticias.find(noticia => {
		return noticia.id == id
	})

	if (response == undefined) {
		return new Response(JSON.stringify({ message: 'Noticia não foi encontrada!' }), { status: 404 })
	}

	return new Response(JSON.stringify(response), { status: 200 })
}
