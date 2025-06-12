import { useState } from "react"
import "./calc.css"
import bomba from "../img/bomba.jpg"


interface CompPrps{
  valor: string;
}


export function Calc() {
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
        <div className="princ">
            <h1>Calculdora de Gasolina ou Alcool</h1>
            <img src={bomba}></img>

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
            

            {result &&(
                <h2>{result}</h2>
            ) }
      </div>
      
    
  )
}

