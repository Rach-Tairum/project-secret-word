import React from 'react'
import style from './GameOver.module.css'


const GameOver = ({ retry, score }) => {
  return (
    <div className={style.endGame}>
      <h1>Fim de jogo</h1>
      <h2>
        A sua pontuação final foi: <span>{score}</span>
      </h2>
      <button onClick={retry}>Continuar</button>
    </div>
  )
}

export default GameOver