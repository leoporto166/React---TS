import { useState } from "react"
import "./app.css"

interface CompPrps{
  valor: string;
}


export default function App() {
  const [gaso, setGaso] = useState<CompPrps>({
    valor: ""
  })
  const[alc, setAlc] = useState<CompPrps>({
    valor: ""
  })
  const [result, setResult] = useState("")

  function calc(){
    const precoGaso = parseFloat(gaso.valor)
    const precoAlc = parseFloat(alc.valor)

    if(isNaN(precoGaso) || isNaN(precoAlc)){
      setResult("Preencha os dois campos")
      return;
    }

    let comp = precoGaso * 0.7
    if(precoAlc <= comp){
      setResult("É melhor abastecer com alcool")
    } else{
      setResult("É melhor abastercer com gasolina")
    }
  }
  return (
      <div>
        <div className="princ">
      <h1>Calculdora de Gasolina ou Alcool</h1>

      <div className="form">
        <input
        placeholder="Alcool"
        value={alc.valor}
        onChange={(e) => setAlc({valor: (e.target.value)})}
        ></input>
        <br></br>
        <input
        placeholder="Gasolina"
        value={gaso.valor}
        onChange={(e) => setGaso({ valor: (e.target.value)})}
        ></input>
        <br></br>
        <button onClick={calc}>Calcular</button>
        </div>
      

      <h2>{result}</h2>
      </div>
      </div>
      
    
  )
}

