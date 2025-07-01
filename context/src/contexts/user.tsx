
import { createContext, useState, type ReactNode } from "react";

type UserProviderProps = {
    children: ReactNode
}

interface UserContextData {
    aluno: string;
    qtdAlunos: number;
    mudaNome: (nome: string) => void;
    addAluno:(nome: string) => void
}

export const UserContext = createContext({} as UserContextData)

export function UserProvider ({ children }: UserProviderProps){

    const [aluno, setAlunos] = useState("Leonardo")
    const [qtdAlunos, setQtdAlunos] = useState(33)


    function mudaNome(nome: string){
        if(!nome.trim()){
            alert("Insira um nome")
            return
        }
        setAlunos(nome)
    }

    function addAluno(nome: string){
        if(!nome.trim()){
            alert("Aluno Invalido")
            return
        }
        setQtdAlunos(qtdAlunos => qtdAlunos + 1)
    }


    return(
        <UserContext.Provider value={{aluno, qtdAlunos, mudaNome, addAluno}}>
            {children}
        </UserContext.Provider>
    )
    
}