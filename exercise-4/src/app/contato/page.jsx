'use client'
import {useState} from 'react'
import { gravaSugestao } from '@/lib/sugestoesDB'
import xss from 'xss'

export default function Contato() {
    const [enviado, setEnviado] = useState(false)
    const [inputNome, setInputNome] = useState('')
    const [inputTelefone, setInputTelefone] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [inputSugestao, setInputSugestao] = useState('')

    const handleInputNomeChange = e => {
        setInputNome(e.target.value)
    }
    const handleInputTelefoneChange = e => {
      setInputTelefone(e.target.value)
    }
    const handleInputEmailChange = e => {
      setInputEmail(e.target.value)
    }
    const handleInputSugestaoChange = e => {
      setInputSugestao(e.target.value)
    }
    const enviar = () => {
        if (inputSugestao){
          gravaSugestao({
            nome: xss(inputNome) || 'Anônimo',
            telefone: xss(inputTelefone),
            email: xss(inputEmail),
            sugestao: xss(inputSugestao)
          })
            setEnviado(true)
        } else {
          alert('Digite a sugestão.')
        }
    }
    const resetar = () => {
        setEnviado(false)
        setInputNome('')
        setInputTelefone('')
        setInputEmail('')
        setInputSugestao('')
    }
    return(
        <div>
            <h2>Contato</h2>
            {enviado ?
              <div>
                <p>{inputNome || 'Anônimo'}, obrigado(a) pela sugestão!</p>
                <button onClick={resetar}>Enviar outra sugestão</button>
              </div>
              :
              <div>
                <p>Entre em contato para enviar sugestões, reclamações ou oferecer patrocínio.</p>  
                <form>
                  <p><label>Nome: <input type="text" size="35" value={inputNome} onChange={handleInputNomeChange} /></label></p>
                  <p><label>Telefone: <input type="text" size="33" value={inputTelefone} onChange={handleInputTelefoneChange}/></label></p>
                  <p><label>E-mail: <input type="text" size="35" value={inputEmail} onChange={handleInputEmailChange}/></label></p>
                  <p><textarea rows="5" cols="35" placeholder="Abra seu coração..." value={inputSugestao} onChange={handleInputSugestaoChange}></textarea></p>
                  <button onClick={enviar}>Enviar</button>
                </form>
              </div>
            }  
        </div>
    )
}