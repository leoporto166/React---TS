import './App.css'

import { Alunos } from "./components/Alunos"
import { UserProvider} from "./contexts/user"


function App() {

  return (
    <UserProvider>
      <div>
        <h1>Escola DEV</h1>
        <Alunos></Alunos>
      </div>
    </UserProvider>
  )
}

export default App
