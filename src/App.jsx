import LuckyN from "./LuckyN"
import { sum } from "./utils"
import "./App.css"

function lessThan4(dice) {
  return sum(dice) < 4
}

function allSameValue(dice) {
  return dice.every((v) => v === dice[0]);
}

function App() {
  return (
    <>
      <LuckyN winCheck={lessThan4} title="Roll less than 4"/>
      <LuckyN winCheck={allSameValue} title="Roll the same number"/>
    </>
  )
}

export default App
