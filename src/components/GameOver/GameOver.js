import React from 'react'
import style from './GameOver.module.css'


const GameOver = ({retry}) => {
  return (
    <div>
      <h1>Game Over</h1>
      <button onClick={retry}>Continuar</button>
    </div>
  )
}

export default GameOver