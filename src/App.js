import { useState } from 'react';
import './App.css';
import StartScreen from './components/StartScreen/StartScreen';
import Game from './components/Game/Game';
import GameOver from './components/GameOver/GameOver';
import { wordsList } from './data/words';

const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'},
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)
  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])

  const pickWordAndCategory = () => {
    const categories = Object.keys(words)
    const category = Array.from(Array(1)).map(() => categories[Math.floor(Math.random() * categories.length)])[0]

    const arrWords = words[category]
    const word = Array.from(Array(1)).map(() => arrWords[Math.floor(Math.random() * arrWords.length)])[0]

    return {word, category}
  }

  const startGame = () => {
    const {word, category} = pickWordAndCategory()
    
    
    let wordLetters = word.split('')
    wordLetters = wordLetters.map((letter) => letter.toLowerCase())


    setPickedCategory(category)
    setPickedWord(word)
    setLetters(wordLetters)

    setGameStage(stages[1].name)
  }

  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  const retry = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter} />}
      {gameStage === 'end' && <GameOver retry={retry}/>}
    </div>
  );
}

export default App;
