import React from 'react'
import style from './StartScreen.module.css'

const StartScreen = () => {
  return (
    <div className={style.start}>
      <h1>Secret Word</h1>
      <p>Clique no botão para iniciar o jogo!</p>
      <button>Iniciar</button>
    </div>
  )
}

export default StartScreen