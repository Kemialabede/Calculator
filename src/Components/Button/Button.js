import React from 'react';
import './Button.css'

function Button(props) {
    return (
        <div>
           <div>
                <button name = "(" onClick={e => props.onClick(e.target.name)}>(</button>
                <button  name = ")" onClick={e =>props.onClick(e.target.name)}>)</button>
                <button name= "%" onClick={e => props.onClick(e.target.name)}>%</button>
                <button name= "AC" onClick={e => props.onClick(e.target.name)}>AC</button>
            </div>
            <div>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>+</button>
            </div>
            <div>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>*</button>
            </div>
            <div>
            <button>i</button>
            <button>2</button>
            <button>3</button>
            <button>-</button>
            </div>
            <div>
            <button>0</button>
            <button>.</button>
            <button>=</button>
            <button>+</button>
            </div>
        </div>
    )
}

export default Button;
