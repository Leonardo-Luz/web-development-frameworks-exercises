import noticias from '@/noticias.json'

export const GET = async () => {
	return new Response(JSON.stringify(noticias), { status: 200 })
}
export const POST = async (req: Request) => {
	const body = await req.json()

	const newNoticia = {
		...body,
		id: noticias.length + 1
	}

	noticias.push(newNoticia)

	return new Response(JSON.stringify({ message: 'Noticia criada com sucesso!' }), { status: 200 })
}
