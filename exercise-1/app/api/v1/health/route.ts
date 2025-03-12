
export const GET = async () => {
	return new Response(JSON.stringify({ message: 'OK' }), { status: 200 })
}
