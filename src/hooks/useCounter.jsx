import  { useState } from 'react'

export const useCounter = (initial = 0 ) => {
  
    const [counter, setCounter] = useState(initial)

    const reset = () => setCounter(initial)

    const increment = () => setCounter(counter + 1 )

    const decrement = (value = 2) => setCounter(counter - value)

    return{ 
        counter,
        increment,
        decrement,
        reset
    }
}
