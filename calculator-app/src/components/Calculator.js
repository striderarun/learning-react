// Perform the four basic mathematical operations: addition, subtraction, multiplication, and division.
// It will have a single input button, which will accept user input (any number) and a total starting with a zero.
// Once a user types into the input field, they will then have to update the total by pressing any of the four math operation buttons.

import { useState } from "react"

const Calculator = () => {
    const [total, setTotal] = useState(0);
    const [inputVal, setInputVal] = useState(0);

    const addOperation = () => {
        // Cannot mutate const total variable, update final value using setTotal
        let tempTotal = total + inputVal;
        console.log("Add=" + inputVal + " Total is now: " + tempTotal);
        setTotal(tempTotal);
    }

    const subtractOperation = () => {
        let tempTotal = total - inputVal;
        console.log("Subtract=" + inputVal + " Total is now: " + tempTotal);
        setTotal(tempTotal);
    }

    const multiplyOperation = () => {
        let tempTotal = total * inputVal;
        console.log("Multiply=" + inputVal + " Total is now: " + tempTotal);
        setTotal(tempTotal);
    }

    const divideOperation = () => {
        let tempTotal = total / inputVal;
        console.log("Divide=" + inputVal + " Total is now: " + tempTotal);
        setTotal(tempTotal);
    }

    const resetInput = () => {
        setInputVal(0);
    }

    const resetResult = () => {
        setTotal(0);
    }

    return (
        <div>
            <h1>My Simplest Working Calculator</h1>
            {total}
            <div>
                <input pattern="[0-9]" type="number" value={inputVal} onChange={ (e) => {
                    console.log("User entered: " + e.target.value);
                    // Parse to int
                    setInputVal(parseInt(e.target.value))
                }}
                />
            </div>
            
            <div>
                <button id="add" onClick={addOperation}>add</button>
                <button id="subtract" onClick={subtractOperation}>subtract</button>
                <button id="multiply" onClick={multiplyOperation}>multiply</button>
                <button id="divide" onClick={divideOperation}>divide</button>

                <button id="resetInput" onClick={resetInput}>reset input</button>
                <button id="resetResult" onClick={resetResult}>reset result</button>
            </div>
        </div>
    )
}

export default Calculator;