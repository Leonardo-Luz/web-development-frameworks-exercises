'use client'
import { apagaNoticia } from '@/lib/noticiasDB'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function CardAdmNoticia({ id, titulo, descricao, imagem }) {
    const [detalhes, setDetalhes] = useState(false)
    const [apagar, setApagar] = useState(false)
    const toggleDetalhes = () => {
        setDetalhes(detalhe => !detalhe)
        setApagar(false)
    }
    const toggleApagar = () => {
        setApagar(apag => !apag)
    }

    return (
        <div className='cardAdm'>
            <p className='tituloAdm'>{titulo} <span className='verMaisAdm' onClick={toggleDetalhes} />{detalhes ? 'ver menos' : 'ver mais'}
                {
                    detalhes &&
                    <span>
                        <span><Link className='editarAdm' href={`/adm/noticias/edit/${id}`}>editar</Link></span>
                        <span className={apagar ? 'apagarAdm cancelar' : 'apagarAdm'} onClick={toggleApagar}>{apagar ? 'não apagar' : 'apagar'}</span>
                        {
                            apagar &&
                            <span className='apagarAdm' onClick={() => { apagaNoticia(id, imagem) }}>apagar</span>
                        }
                    </span>
                }
            </p>
            <Image
                className={apagar ? 'imgCardAdmNoticia opaco' : 'imgCardAdmNoticia'}
                src={'/' + imagem}
                width={100}
                height={100}
            />
            <p className={apagar ? 'descricaoAdm opaco' : 'descricaoAdm'}>{detalhes ? descricao : descricao.substring(0, 200) + "..."}</p>
        </div>
    )
}
