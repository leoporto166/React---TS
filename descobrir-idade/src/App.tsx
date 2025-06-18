
import { useState, type FormEvent } from 'react'
import './App.css'

function App() {
  const [inputNome, setInputNome] = useState<string>("")
  const [inputAno, setInputAno] = useState<number | "">("")
  const [result, setResult] = useState<number>()

  function Descobrir(event: FormEvent){
    event.preventDefault();
    const anoAtual = new Date().getFullYear();
    if(inputAno !== ""){
    const resultado = anoAtual - inputAno
    setResult(resultado)
    console.log(resultado)
  }
  }

  return (
    <div className='container'>
      <form className='formulario' onSubmit={Descobrir}>
        <label>Digite seu nome</label>
        <input
        required
        value={inputNome}
        onChange={(e) => setInputNome(e.target.value)}
        ></input>
        <label>Digite seu ano de nascimento</label>
        <input
        type="number"
        required
        value={inputAno}
        onChange={(e) => setInputAno(Number(e.target.value))}></input>

        <button>Descobrir</button>
      </form>

      {result !== undefined && (<div className='resultado'
      ><h1>Olá {inputNome} você tem {result} anos</h1>
      </div>)}

      
    </div>
  )
}

export default App
