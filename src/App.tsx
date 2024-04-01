import { Board } from './components/coopBoard'

import { generateCoopBoard,
         getGenerator,
         getRandomBoard,
         getRandomSeed } from './logic/generate'

import { testBoard } from './components/_testBoard'


function  App() {
  return (
    <>
      <Board board = { testBoard } />

    </>
  )
}

export default App
