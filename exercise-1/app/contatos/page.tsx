'use client'

import React, { useState } from "react"

const Contato = () => {
  const [enviado, setEnviado] = useState(false)
  const [inputNome, setInputNome] = useState('')
  const [inputEmail, setInputEmail] = useState('email.template@example.com')
  const [inputTelefone, setInputTelefone] = useState('telefone grandao')
  const [inputTexto, setInputTexto] = useState('textão...')

  const inputNomeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setInputNome(e.currentTarget.value)
  }

  const enviar = async () => {
    if (inputNome) {
      setEnviado(true)

      await fetch('http://localhost:3000/api/v1/contatos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: inputNome,
          email: inputEmail,
          telefone: inputTelefone,
          texto: inputTexto,
        })
      })
    }
  }

  const resetar = () => {
    setEnviado(false)
    setInputNome('')
  }

  return (
    <div>
      <h1>Contato</h1>
      <div>
        {enviado ?
          <div>
            <p>{inputNome}, Obrigado pela sugestão</p>
            <button onClick={resetar}>Enviar Outra Sugestão</button>
          </div> :
          <div>
            <p>Entre em contato para enviar sugestões, reclamações ou oferecer patrocinio.</p>

            <form>
              <p>
                <label>
                  Nome: <input type="text" size={35} value={inputNome} onChange={inputNomeHandler} />
                </label>
              </p>
              <p>
                <label>
                  Telefone: <input type="text" size={33} />
                </label>
              </p>
              <p>
                <label>
                  E-mail: <input type="text" size={35} />
                </label>
              </p>
              <p>
                <textarea rows={5} cols={35} defaultValue='Abra seu coração...'>
                </textarea>
              </p>
              <button onClick={enviar}>Enviar</button>
            </form>
          </div>
        }
      </div>
    </div>
  )
}

export default Contato
