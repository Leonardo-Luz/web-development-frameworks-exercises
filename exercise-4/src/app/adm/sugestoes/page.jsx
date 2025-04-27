import { getSugestoes } from '@/lib/sugestoesDB'
import CardSugestao from '@/components/cardsugestao'
import Link from 'next/link'

export default async function Sugestoes(){
    const sugestoes = await getSugestoes()
    return(
        <div>
            <h2>Sugestões recebidas</h2>
            <ul className='lista'>
                {sugestoes.map(sugestao => <li key={sugestao.id}><CardSugestao id={sugestao.id} nome={sugestao.nome} telefone={sugestao.telefone} email={sugestao.email} sugestao={sugestao.sugestao}/></li>)}
            </ul>
            <p className='voltar'><Link href='/adm'>&#8592; Voltar</Link></p>
        </div>
    )
}