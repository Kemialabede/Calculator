import React, { useState } from 'react';
import './SecondCalculator.css'

function SecondCalculator() {
    const [state, setState] = useState({
        result: ''
    })
    const [error, setError] = useState(null);

    const handleClick = (e) =>{
        if(error) {
        setError(null)
        }
        setState({
            result: state.result + e.target.name,
        })
    }
    const handleClear = () => {
        setState({
            result: ''
        })
        if(error) {
            setError(null)
        }
    }
    const clearIndividual = (e) => {
        setState({
            result: state.result.slice(1)
        })
        if(error) {
            setError(null)
        }
    }
    const evaluateResult = () => {
        try {
            if(state.result){
                let operation = eval(state.result);
                setState({
                    result: operation
                 })
            }
        } catch(e ) {
            setError('Invalid operation');
            setState({
                result: ''
            })
        }
    }

    const calculatorScreenValue = error || state.result;

    return (
        <div>
            <input  type="text" className="calculator-input" value={calculatorScreenValue}/>
            <div>
                <button className="btn" name="(" onClick={handleClick}>(</button>
                <button className="btn" name=")" onClick={handleClick}>)</button>
                <button className="btn" name="CE" onClick={clearIndividual}>CE</button>
                <button className="btn" name="C" onClick={handleClear}>C</button>
            </div>
            <div>
                <button className="btn" name="1" onClick={handleClick}>1</button>
                <button className="btn" name="2" onClick={handleClick}>2</button>
                <button className="btn" name="3" onClick={handleClick}>3</button>
                <button className="btn" name="+" onClick={handleClick}>+</button>
            </div>
            <div>
                <button className="btn" name="4" onClick={handleClick}>4</button>
                <button className="btn" name="5" onClick={handleClick}>5</button>
                <button className="btn" name="6" onClick={handleClick}>6</button>
                <button className="btn" name="-" onClick={handleClick}>-</button>
            </div>
            <div>
                <button className="btn" name="7" onClick={handleClick}>7</button>
                <button className="btn" name="8" onClick={handleClick}>8</button>
                <button className="btn" name="9" onClick={handleClick}>9</button>
                <button className="btn" name="*" onClick={handleClick}>*</button>
            </div>
            <div>
                <button className="btn" name="." onClick={handleClick}>.</button>
                <button className="btn" name="0" onClick={handleClick}>0</button>
                <button className="btn" name="=" onClick={evaluateResult}>=</button>
                <button className="btn" name="%" onClick={handleClick}>%</button>
            </div>
            <select multiple>
                <option>Name</option>
                <option>Age</option>
                <option>Class</option>
                <option>Sex</option>
            </select>
            <select multiple>
                <option>Name</option>
                <option>Age</option>
                <option>Class</option>
                <option>Sex</option>
            </select>
            <select multiple> 
                <option>Name</option>
                <option>Age</option>
                <option>Class</option>
                <option>Sex</option>
            </select>
        </div>
    )
}

export default SecondCalculator;
