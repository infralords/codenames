import './App.css'
import { ComposeUIBoard } from './components/coopBoard'
import Color from './utils/colors'


const veet = [
  [Color.GRAY,Color.GREEN,Color.GRAY ,Color.GREEN,Color.GRAY],
  [Color.GRAY,Color.BLACK,Color.GRAY ,Color.GREEN,Color.GRAY],
  [Color.GREEN,Color.GRAY,Color.BLACK,Color.GRAY ,Color.BLACK],
  [Color.GREEN,Color.GRAY,Color.GRAY ,Color.GREEN,Color.GREEN],
  [Color.GRAY,Color.GREEN,Color.GREEN,Color.GRAY ,Color.GRAY]
]

function  App() {
  return (
    <>
      <ComposeUIBoard board = { veet } />
    </>
  )
}

export default App
