import { useState, type FormEvent } from "react"

export function Listagem(){
    const [tarefa, setTarefa] = useState("")
    const [tarefas, setTarefas] = useState<string[]>([])

    function mostrar(event: FormEvent){
        event.preventDefault();

        if(!tarefa){
            alert("Preencha o campo")
        }

        setTarefas(prev => [...prev, tarefa])
        setTarefa("");
    }
    return(
        <main>
        <h1>
            Lista de Tarefas
        </h1>

        <form action="" onSubmit={mostrar}>
            <input type="text"
            placeholder="Estudar"
            required
            value={tarefa}
            onChange={(e) => setTarefa(e.target.value)}
            />

            <button>Listar</button>
        </form>

        <ul>
        {tarefas.map((item, index) => (
            <li key={index}>{item}</li>

        ))}
        </ul>

        </main>
    )

}