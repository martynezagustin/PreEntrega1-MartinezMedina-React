import { useState } from "react";

const Counter = ({counter, onDecrementCounter, onIncrementCounter, isValidCounter}) => {
    return (
        <div className='counterContainer'>
        <h1>Contador</h1>
        <div className='buttonContainer'>
          <button type='button' className='counterButton' onClick={onDecrementCounter} disabled={!isValidCounter}>-</button>
          <p className='counterText'>{counter}</p>
          <button type='button' className='counterButton' onClick={onIncrementCounter}>+</button>
        </div>
      </div>
    )
}

export default Counter;