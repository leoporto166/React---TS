
import { useState } from "react"
import "./gerador.css"

interface FrasesProps{
    frase: string
}

export function Gerador(){


    const[frasesdia, setFraseDia] = useState(false)
    const[freasesmot, setFrasesMot] = useState(false)
    const [fraseSorteada, setFraseSorteada] = useState("")



    const Motivacao: FrasesProps[] = [
        {frase: "Acredite no seu potencial e vá além!"},
        {frase: "Desistir não é opção para quem nasceu para vencer."},
        {frase: "Cada passo te aproxima do seu objetivo."},
    ]

    const BomDia: FrasesProps[] = [
        {frase: "Bom dia! Que hoje seja leve, produtivo e cheio de boas notícias."},
        {frase: "Acorde com gratidão e vá conquistar o seu dia!"},
        {frase: "Um novo dia, uma nova chance de recomeçar."},

    ]

    function sortear(frases: FrasesProps[]){
        const index = Math.floor(Math.random() * frases.length)
        if(frases[index] === frases[index]){
                    return frases[index].frase
                }
        return frases[index].frase

        
        
    }
    return(
        <div>
            <button onClick={() => {
                setFrasesMot(false);
                setFraseDia(true);
                setFraseSorteada(sortear(BomDia));
            }}>Bom dia</button>

            <button onClick={() => {
                setFraseDia(false);
                setFrasesMot(true);
                setFraseSorteada(sortear(Motivacao));
            }}>Motivação</button>

            {frasesdia && (<h1>{fraseSorteada}</h1>)}
            {freasesmot && (<h1>{fraseSorteada}</h1>)}
        </div>
    )
}