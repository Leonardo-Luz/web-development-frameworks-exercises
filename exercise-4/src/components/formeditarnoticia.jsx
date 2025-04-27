"use client"
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function FormEditarNoticia({ id, titulo, descricao, imagem, operacaoNoticia, editar }) {
    const [inputTitulo, setInputTitulo] = useState(titulo)
    const [inputDescricao, setInputDescricao] = useState(descricao)
    const handleInputTituloChange = e => {
        setInputTitulo(e.target.value)
    }
    const handleInputDescricaoChange = e => {
        setInputDescricao(e.target.value)
    }
    let novaImagem = {}
    const handleInputImagemChange = e => {
        if (e.target.files[0].size > 2000000) {
            alert('Excedido o tamanho máximo para o arquivo. Escolha um arquivo menor')
            e.target.value = ''
            novaImagem = {}
        } else {
            novaImagem = e.target.files[0]
        }
    }
    const enviar = () => {
        if (inputTitulo) { // && ...
            let dadosNoticia = {}
            if (editar) {
                dadosNoticia = {
                    id: id,
                    titulo: inputTitulo,
                    descricao: inputDescricao,
                    imagem: novaImagem,
                    imagemAntiga: imagem
                }
            } else {
                dadosNoticia = {
                    titulo: inputTitulo,
                    descricao: inputDescricao,
                    imagem: novaImagem
                }
            }
            operacaoNoticia(dadosNoticia)
        } else {
            alert('É preciso preencher o título.')
        }
    }
    return (
        <div>
            <h2>{editar ? 'Editar' : 'Adicionar'} notícia</h2>
            <form>
                <p><input type="text" size='60' name='titulo' value={inputTitulo} onChange={handleInputTituloChange} required /></p>
                <p><textarea name="descricao" rows="10" cols="50" id="" value={inputDescricao} onChange={handleInputDescricaoChange}></textarea></p>
                {
                    editar &&
                    <p>
                        <Image
                            src={'/' + imagem}
                            alt="Imagem"
                            width={100}
                            height={100}
                        />
                    </p>
                }
                <p>
                    <label> Imagem (Limite 2MB): <input type='file' name='imagem' accept='image/*' onChange={handleInputImagemChange} /> </label>
                </p>
            </form>
            <button onClick={enviar}>{editar ? 'Salver' : 'Adicionar'} notícia</button>
            <p className="voltar"><Link href="/adm/noticias">&#8592; Voltar</Link></p>
        </div>
    )
}
