import { CoopGameUI } from './components/coopBoard'
import { getRandomBoard, getGenerator, getRandomSeed } from "./logic/generate";

function  App() {
  return (
    <>
      <CoopGameUI teamA={getRandomBoard(getGenerator(getRandomSeed()))}
                  teamB={getRandomBoard(getGenerator(getRandomSeed()))} />
    </>
  )
}

export default App
