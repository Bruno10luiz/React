
import { useState } from 'react'
import Input from './components/input'
import './App.css'

export default function App() {
  const [password, setPassword] = useState("")
  const [copyText, setCopytext] = useState("Copiar")
  const [customSize, setCustomSize] = useState(12)

  function generate() {
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"

    let newPassword = ""

    for (let i = 0; i < customSize; i++) {
      const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]
    }
    setPassword(newPassword)
    setCopytext("Copiar")

  }

  function copyToClipBoard() {
    navigator.clipboard.writeText(password)
    setCopytext("Copiado!")
  }

  return (
    <div>
      <div className='App'>
        <h1>Gerador de senhas</h1>
        <div>
          <label htmlFor="customSize">Senha com quantos caracteres?</label>
          <Input
            customSize={customSize}
            setCustomSize={setCustomSize}
          />
        </div>
        <button onClick={generate}>Gerar senha com {customSize} caracteres</button>
        <button onClick={copyToClipBoard}> {copyText} </button>
        <div> {password} </div>
      </div>

    </div>
  )
}




