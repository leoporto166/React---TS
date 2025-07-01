
import { useContext, useState } from "react"
import { UserContext } from "../../contexts/user"


export function Alunos(){

    const {aluno, qtdAlunos, mudaNome, addAluno} = useContext(UserContext)

    const [buscarAluno, setBuscarAluno] = useState("")
    const [novoAluno, setNovoAluno] = useState("")

    return(
        <div>
            <h1>Quantidade de alunos: {qtdAlunos}</h1>
            <br />
            <hr />

            <h2>Nome do aluno: {aluno}</h2>
            <br />


            <input
            placeholder="Buscar Aluno"
            value = {buscarAluno}
            onChange={(e) => setBuscarAluno(e.target.value)}
            />     
            <button onClick={() => { 
                    mudaNome(buscarAluno)
                    setBuscarAluno("")
                }
            }>
                Mudar nome
            </button>


            <br />


            <input
            placeholder="Nome do Aluno"
            value = {novoAluno}
            onChange={(e) => setNovoAluno(e.target.value)}
            />
            <button onClick={() => {
                addAluno(novoAluno)
                setNovoAluno("")
            }}>
                Adicionar Aluno
            </button>

        </div>
    )

}