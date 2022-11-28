

export default function Letras({ selecionados, setSelecionados, letrasCorretas, setLetrasCorretas, letras, erros, setErros, statusJogo }) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    
    function seleciona(letra) {
        if(statusJogo === true){
            if (selecionados.includes(letra) === false) {
                const novosSelecionados = [...selecionados, letra]
                setSelecionados(novosSelecionados)
    
                if (letras.includes(letra)) {
                    setLetrasCorretas([...letrasCorretas, letra])
                } else {
                    setErros(erros + 1 )
                    console.log(erros + 1)
                }
            }
        }
       
    }

    return (

        <div className="letras">
            {alfabeto.map((letra => (
                <div data-test="letter" key={letra} onClick={() => seleciona(letra)} className={selecionados.includes(letra) || statusJogo === false ? 'clicado' : ''} >{letra}
                </div>
            )))}
        </div>
    )
}

