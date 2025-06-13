import { useState } from "react"
import { FormEvent } from "react";
import "./calc.css"
import bomba from "../Assets/bomba.jpg"


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

  function calc(event: FormEvent){
    event.preventDefault();
    const precoGaso = Number(gaso.valor)
    const precoAlc = Number(alc.valor)

    if(isNaN(precoGaso) || isNaN(precoAlc)){
      setResult("Preencha os dois campos com valores validos")
      return;
    }

    let comp = precoGaso * 0.7
    if(precoAlc < comp){
      setResult("É melhor abastecer com álcool")
    } else{
      setResult("É melhor abastecer com gasolina")
    }
  }
  return (
    
        <main className="container">
            
            <img src={bomba}></img>
            
            <h1>Qual a melhor opção?</h1>

            <form onSubmit={calc}>
                <label htmlFor="">Álcool (preço por litro):</label>
                <input
                placeholder="3,33"
                type="number"
                min="1"
                step="0.01"
                required
                value={alc.valor}
                onChange={(e) => setAlc({valor: (e.target.value)})}
                ></input>

                <br></br>

                <label htmlFor="">Gasolina (preço por litro):</label>
                <input
                placeholder="6,66"
                type="number"
                min="1"
                step="0.01"
                required
                value={gaso.valor}
                onChange={(e) => setGaso({ valor: (e.target.value)})}
                ></input>

                <br></br>

                <button>Calcular</button>
            </form>
            
            

          <section className="result">
            {result &&(
                <h2>{result}</h2>
            ) }
          </section>
      </main>
      
    
  )
}

