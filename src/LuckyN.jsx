import { useState } from "react";
import Dice from "./Dice";
import { getRolls } from "./utils";
import Button from "./Button"
import "./LuckyN.css"

function LuckyN({title="Dice Game", numDice = 2, winCheck }) {
    const [dice, setDice] = useState(getRolls(numDice));
    const isWinner = winCheck(dice);
    const roll = () => setDice(getRolls(numDice));
    return (
        <main className="LuckyN">
            <h1>{title} {isWinner && 'You Win!'}</h1>
            <Dice dice={dice} />
            <Button clickFunc={roll} label="Re-Roll"/>
        </main>
    )
}

export default LuckyN;