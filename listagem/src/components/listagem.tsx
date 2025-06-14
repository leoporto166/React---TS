import { useState, type FormEvent } from "react"

export function Listagem(){
    const [tarefa, setTarefa] = useState("")
    const [tarefas, setTarefas] = useState<string[]>([])
    const [editar, setEditar] = useState({
        estado: false,
        tarefa: ""
    })

    function Adicionar(event: FormEvent){
        event.preventDefault();

        if(!tarefa){
            alert("Preencha o campo")
        }


        if(editar.estado){
            SalvarEdicao();
        }else{
            setTarefas(prev => [...prev, tarefa])
        }
        setTarefa("");
        setEditar({estado: false, tarefa: ""})
    }

    function Excluir(item: string){
        const removeTask = tarefas.filter(t => t !== item)

        setTarefas(removeTask)

        

    }

    function SalvarEdicao(){
        const tarefaIndex = tarefas.findIndex(tarefa => editar.tarefa)
        const todasTarefas = [...tarefas]

        todasTarefas[tarefaIndex] = tarefa
        setTarefas(todasTarefas)
        
        setEditar({
            estado: false,
            tarefa: ""
        })

        setTarefa("")
    }

    function Editar(item: string){
        setTarefa(item)
        setEditar({
            estado: true,
            tarefa: item
        })

    }
    return(
        <main>
        <h1>
            Lista de Tarefas
        </h1>

        <form action="" onSubmit={Adicionar}>
            <input type="text"
            placeholder="Estudar"
            required
            value={tarefa}
            onChange={(e) => setTarefa(e.target.value)}
            />

            <button>
                {editar.estado ?"Atualizar tarefa" : "Adicionar"}
            </button>
        </form>

        <ul>
        {tarefas.map((item, index) => (
            <li key={index}>
                {item}
            <button onClick={() => Editar(item)}>Editar</button>
            <button onClick={() => Excluir(item)}>Excluir</button>
            </li>

        ))}
        </ul>

        </main>
    )

}