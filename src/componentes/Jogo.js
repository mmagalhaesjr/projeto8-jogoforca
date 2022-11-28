

export default function Jogo({palavras, letras, letrasCorretas, erros, palavraSelecionada, setPalavraSelecionada, setStatusJogo}) {   
function escolher(){
setPalavraSelecionada(palavras[Math.floor(Math.random() * palavras.length)]);
setStatusJogo(true);
}

    return (
        <>
            <div className="jogo">
                <img data-test="game-image" src= {`./assets/forca${erros}.png`} alt="" />
                <div className="direita">
                    <button data-test="choose-word" onClick={escolher}>Escolher Palavra</button>

                    <p data-test="word" data-answer={palavraSelecionada} className={erros === 6 ? "vermelho" : ""}>{
                        letras.map((letra) => (
                            letrasCorretas.includes(letra) || erros === 6 ? letra : "_ "
                            
                        ))
                    }</p>

                </div>
            </div>
        </>
    )
}

