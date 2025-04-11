"use client"
import Link from 'next/link'
import { useState } from 'react'

export default function FormEditarNoticia({ id, titulo, descricao, imagem, operacaoNoticia, editar }) {
    const [inputTitulo, setInputTitulo] = useState(titulo)
    const [inputDescricao, setInputDescricao] = useState(descricao)

    const handleInputTituloChange = (e) => {
        setInputTitulo(e.target.value)
    }

    const handleInputDescricaoChange = (e) => {
        setInputDescricao(e.target.value)
    }

    let novaImagem = {}

    const handleInputImagemChange = (e) => {
        if (e.target.files[0].size > 200000000) {
            alert('Excedido o valor máximo para arquivo!')
            e.target.value = ''
            novaImagem = {}
        }
        else {
            novaImagem = e.target.files[0]
        }
    }

    const envia = () => {
        if (inputTitulo) {
            let dadosNoticia = {}

            if (editar) {
                dadosNoticia = {
                    id: id,
                    titulo: inputTitulo,
                    descricao: inputDescricao,
                    imagem: novaImagem,
                    imagemAntiga: imagem,
                }
            }
            else {
                dadosNoticia = {
                    id: id,
                    titulo: inputTitulo,
                    descricao: inputDescricao,
                    imagem: novaImagem,
                }
            }

            operacaoNoticia(dadosNoticia)
        }
        else {
            alert("É preciso preencher o titulo!")
        }
    }

    return (
        <div>
            <h2>{editar ? 'Editar' : 'Adicionar'}</h2>
            <form>
                <p><input type='text' size="60" name='titulo' value={inputTitulo} onChange={handleInputTituloChange} required /></p>
                <p><textarea name='descricao' cols="60" rows="10" id='' value={inputDescricao} onChange={handleInputDescricaoChange}></textarea></p>
            </form>
        </div>
    )
}
