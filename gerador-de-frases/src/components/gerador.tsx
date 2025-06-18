
import { useState } from "react"
import "./gerador.css"

import logo from "../assets/logo.png"

interface FrasesProps{
    frase: string
}

export function Gerador(){


    const[frasesDia, setFraseDia] = useState(false)
    const[frasesMot, setFrasesMot] = useState(false)
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
        return frases[index].frase

        
        
    }
    function gerarFrase(){
        if(frasesDia === true){
            setFraseSorteada(sortear(BomDia));
        } else if(frasesMot === true){
            setFraseSorteada(sortear(Motivacao));
        }
    }
    return(
        <div className="container">

            <div className="logo">
               <img src={logo} alt="logo"></img>
            </div>
            <div className="title">
                <h1>Categorias</h1>
            </div>
            <section className="category-area">
                <button className={`category-button ${frasesDia ? "active" : ""}`} onClick={() => {
                    setFrasesMot(false);
                    setFraseDia(true);
                }}>Bom dia</button>
                <button className={`category-button ${frasesMot ? "active" : ""}`} onClick={() => {
                    setFraseDia(false);
                    setFrasesMot(true);
                }}>Motivação</button>
            </section>

            <button onClick={gerarFrase} className="gerador">Gerar Frase</button>

       
            {fraseSorteada !== "" && <p className="frase">"{fraseSorteada}"</p>}
        </div>
    )
}