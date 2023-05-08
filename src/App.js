import { useEffect, useState } from 'react';
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
  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)


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

  const verifyLetter = (letter) => {
    console.log(letter);
    const normalizedLetter = letter.toLowerCase()

    if (
      guessedLetters.includes(normalizedLetter) 
      || wrongLetters.includes(normalizedLetter)
    ){
      return;
    }

    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualState) => [
        ...actualState,
        normalizedLetter
      ])
    } else {
      setWrongLetters((actualState) => [
        ...actualState,
        normalizedLetter
      ])

      setGuesses((actualGuesses) => actualGuesses -1)
    }

    // setGameStage(stages[2].name)
  }

  const retry = () => {
    setScore(0)
    setGuesses(3)
    
    setGameStage(stages[0].name)
  }

  const clearStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  useEffect(() => {
    if (guesses <= 0) {
      clearStates()
      setGameStage(stages[2].name)
    }
  },[guesses])

  console.log(letters);
  console.log(guessedLetters);
  console.log(wrongLetters);

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' 
      && <Game 
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />}
      {gameStage === 'end' && <GameOver retry={retry}/>}
    </div>
  );
}

export default App;
