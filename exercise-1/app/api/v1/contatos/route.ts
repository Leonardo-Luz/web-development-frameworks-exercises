import contatos from '@/contatos.json'

export const GET = async () => {
	return new Response(JSON.stringify(contatos), { status: 200 })
}
export const POST = async (req: Request) => {
	const body = await req.json()

	const newContato = {
		...body,
		id: contatos.length + 1
	}

	contatos.push(newContato)

	return new Response(JSON.stringify({ message: 'Contato criada com sucesso!' }), { status: 200 })
}
