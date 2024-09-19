import React, { useState } from 'react'
import './counter.css'

export const CounterApp = () => {
    const [counter, setCounter] = useState({
        counter1:10,
        counter2:20,
        counter3:15,
        counter4:9
    })
        
    const {counter1, counter2} = counter
    
    const add = () => setCounter({...counter, 
                                counter1 : counter1 + 1,
                                counter2 : counter2 + 1})

    return (
    <div>
        <h3> Counter {counter1} </h3>
        <h3> Counter {counter2} </h3>
        <hr/>
        <button type="button" class="btn btn-primary" onClick={add}>+1</button>
    </div>
  )
}
