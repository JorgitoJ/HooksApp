import React from 'react'
import { useCounter } from '../../hooks/useCounter'

import './counter.css'

export const CustomCounter = () => {
  
    const {counter = 10 ,decrement,increment, reset} = useCounter(10)

    return (
    <div>

        <h2>Custom Counter, initial value {counter}</h2>
        <hr />
        <button type="button" class="btn btn-primary" onClick={()=>increment(3)}> +1 </button>
        <button type="button" class="btn btn-primary" onClick={reset}> Reset </button>
        <button type="button" class="btn btn-primary" onClick={()=>decrement(3)}> -1 </button>

    </div>
  )
}
