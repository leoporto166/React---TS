import { useState, type FormEvent, useEffect, useRef, useMemo, useCallback } from "react"

export function Listagem(){
    const [tarefa, setTarefa] = useState("")
    const [tarefas, setTarefas] = useState<string[]>([])
    const [editar, setEditar] = useState({
        estado: false,
        tarefa: ""
    })
    const firstRender = useRef(true)
    const inputRef = useRef<HTMLInputElement>(null)



    useEffect(() => {

        const tarefasSalvas = localStorage.getItem("33salvarTarefa")

        if(tarefasSalvas){
            setTarefas(JSON.parse(tarefasSalvas))
        }
    }, [])

    useEffect(() => {
        if(firstRender.current){
            firstRender.current = false;
            return;
        }

        localStorage.setItem("33salvarTarefa", JSON.stringify(tarefas));

    }, [tarefas])

    const Adicionar = useCallback((event: FormEvent) => {
            event.preventDefault();

            if (!tarefa.trim()) {
                alert("Preencha o campo");
                return;
            }

            if (editar.estado) {
                SalvarEdicao();
            } else {
                setTarefas(prev => [...prev, tarefa]);
            }

            setTarefa("");
            setEditar({ estado: false, tarefa: "" });

    }, [tarefa, editar.estado, editar.tarefa, SalvarEdicao]);

    function Excluir(item: string){
        const removeTask = tarefas.filter(t => t !== item)

        setTarefas(removeTask)   
    }

    function SalvarEdicao(){
        const tarefaIndex = tarefas.findIndex(t => t === editar.tarefa)
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

        inputRef.current?.focus();
        setTarefa(item)
        setEditar({
            estado: true,
            tarefa: item
        })

    }

    const contadorDeTarefas = useMemo(() => {
        return tarefas.length
    }, [tarefas])
    return(
        <main>
        <h1>
            Lista de Tarefas
        </h1>

        <hr></hr>

        <h3>Você tem {contadorDeTarefas} tarefas!</h3>

        <form action="" onSubmit={Adicionar}>
            <input type="text"
            placeholder="Estudar"
            required
            value={tarefa}
            onChange={(e) => setTarefa(e.target.value)}
            ref={inputRef}
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