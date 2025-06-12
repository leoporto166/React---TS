import { Aluno} from "./Components/alunos"
import type { AlunoProps  } from "./Components/alunos"
import { Header} from "./Components/header"
import { useState } from "react";

export default function App(){
  

const [nome, setNome] = useState("")
const [idade, setIdade] = useState("")
const [alunos, setAlunos] = useState<AlunoProps[]>([])

const[contador,setContador] = useState(0)

function add(){
  setContador(valorAtual => valorAtual +1)
}

function dim(){
  if(contador === 0 ){
    return;
  }
  setContador(valorAtual => valorAtual -1)
}

function adicionarAluno(){
  if (nome.trim() === "" || idade.trim() === "") return;

  const novoAluno: AlunoProps  = {
    nome: nome,
    idade: Number(idade),
  }

  setAlunos([...alunos, novoAluno])
  setNome("")
  setIdade("")
}


  return(
    <div>
      <Header title="Alunos Sesi"/>

      <input
      placeholder="Digite o nome do Aluno"
      value={nome}
      onChange={ (e) => setNome(e.target.value)}
      ></input>

      <br></br>

      <input
      placeholder="Digite a idade do Aluno"
      value={idade}
      onChange={ (e) => setIdade(e.target.value)}
      ></input>
      <br></br> <br></br>


      <button onClick={adicionarAluno}>Mostrar Aluno</button>

      {alunos.map((aluno, index) => (
        <Aluno key={index} nome={aluno.nome} idade={aluno.idade}/>
      ))}

      <br></br>
      <br></br>
      <br></br>
      <h1>Contador</h1>
      <button onClick={add}>+</button> {contador} <button onClick={dim}>-</button>

      
    </div>
  )
}


