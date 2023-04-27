import React from 'react'
import style from './Game.module.css'


const Game = ({verifyLetter}) => {
  return (
    <div>
      <h1>Game</h1>
      <button onClick={verifyLetter}>Verificar</button>
    </div>
  )
}

export default Game