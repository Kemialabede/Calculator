import React, {useState} from 'react';
import './Calculator.css'


function Calculator() {
    const [state, setState] =  useState({
        result: " "
    })
    const handleClick = (e) => {
        setState({
            result: state.result + e.target.name
        })
    }
    const clearInput = () => {
        setState({
            result: ""
        })
    }
    const evaluateHandler = () => {
        let operation = state.result
        if (operation) {
          operation = eval(operation)
          setState({
            result: operation,
          })
        }
      }


    return (
        <div>
              <input type="text" className="calculator-input" value={state.result}/>
            <div>
                <button name = "(" className="btn" onClick={handleClick}>(</button>
                <button  name = ")" className="btn" onClick={handleClick}>)</button>
                <button name= "%" className="btn" onClick={handleClick}>%</button>
                <button name= "AC" className="btn" onClick={clearInput}>AC</button>
            </div>
            <div>
            <button name="7" className="btn" onClick={handleClick}>7</button>
            <button name="8" className="btn" onClick={handleClick}>8</button>
            <button name="9" className="btn" onClick={handleClick}>9</button>
            <button name="+" className="btn" onClick={handleClick}>+</button>
            </div>
            <div>
            <button name="4" className="btn" onClick={handleClick}>4</button>
            <button name="5" className="btn" onClick={handleClick}>5</button>
            <button name="6" className="btn" onClick={handleClick}>6</button>
            <button name="*" className="btn" onClick={handleClick}>*</button>
            </div>
            <div>
            <button name="1" className="btn" onClick={handleClick}>1</button>
            <button name="2" className="btn" onClick={handleClick}>2</button>
            <button name="3" className="btn" onClick={handleClick}>3</button>
            <button name="-" className="btn" onClick={handleClick} >-</button>
            </div>
            <div>
            <button name="0" className="btn" onClick={handleClick}>0</button>
            <button name="." className="btn" onClick={handleClick}>.</button>
            <button name="=" className="btn" onClick={evaluateHandler}>=</button>
            <button name="+" className="btn"onClick={handleClick}>+</button>
            </div>
            
            
        </div>
    )
}

export default Calculator;
