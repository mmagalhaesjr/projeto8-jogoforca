import { useState } from "react"
import Jogo from "./componentes/Jogo";
import Letras from "./componentes/Letras";
import Chute from "./componentes/Chute";
import palavras from './palavras'



function App() {
  const [palavraSelecionada, setPalavraSelecionada] = useState("")
  const letras = palavraSelecionada.split("")
  const [selecionados, setSelecionados] = useState([])
  const [letrasCorretas, setLetrasCorretas] = useState([])
  const [erros, setErros] = useState(0)
  let [statusJogo, setStatusJogo] = useState(false)
  
  return (
    <main>
      <Jogo palavras={palavras} selecionados={selecionados} setSelecionados={setSelecionados} palavraSelecionada={palavraSelecionada} setPalavraSelecionada={setPalavraSelecionada} letras={letras} letrasCorretas={letrasCorretas} erros={erros} setStatusJogo={setStatusJogo} />
      <Letras letras={letras} selecionados={selecionados} setSelecionados={setSelecionados} letrasCorretas={letrasCorretas} setLetrasCorretas={setLetrasCorretas} erros={erros} setErros={setErros} statusJogo={statusJogo} setStatusJogo={setStatusJogo} />
      <Chute />
    </main>

  );
}

export default App;


