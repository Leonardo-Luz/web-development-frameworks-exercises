'use client'
import { apagaSugestao } from "@/lib/sugestoesDB"
import { useState } from "react"

export default function CardSugestao({id, nome, telefone, email, sugestao}){
    const [detalhes, setDetalhes] = useState(false)
    const [apagar, setApagar] = useState(false)
    const toggleDetalhes = () => {
        setDetalhes(detalhe => !detalhe)
        setApagar(false)
    }
    const toggleApagar = () => {
        setApagar(apag => !apag)
    }
    const limiteCaracteres = 200
    let pontinhos = ' ...'
    if (sugestao.length < limiteCaracteres){
        pontinhos = ''
    }
    return( 
        <div className='cardAdm'>
            <p className='tituloAdm'>{nome} <span className='verMaisAdm' onClick={toggleDetalhes}>{detalhes ? 'ver menos' : 'ver mais'}</span>
            {detalhes &&
                <span>
                    <span className={apagar ? 'apagarAdm cancelar' : 'apagarAdm'} onClick={toggleApagar}>{apagar ? 'não apagar' : 'apagar'}</span>
                    {apagar && <span className='apagarAdm' onClick={() => {apagaSugestao(id)}}>apagar</span>}
                </span>
            }
            </p>
            {detalhes && <p className={apagar ? 'contatoAdm opaco' : 'contatoAdm'}>{email} | {telefone}</p>}
            <p className={apagar ? 'descricaoAdm opaco' : 'descricaoAdm'}>{detalhes ? sugestao : sugestao.substring(0, limiteCaracteres)+pontinhos}</p>
        </div>
    )
}