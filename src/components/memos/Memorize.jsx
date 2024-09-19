import { useState } from 'react'
import {useCounter} from '../../hooks/useCounter'
import { Small } from './Small'

import '../useEffect/effects.css'
import './memos.css'

export const Memorize = () => {
    const {counter, increment} = useCounter(5)
    const [show, setShow] = useState(true)


    return (
    <div>
        <h2>Counter: <Small  value={counter} /></h2>
        <hr />

        <button 
            className='btn btn-primary'
            onClick={increment}

        > +1 </button>

        <button
            className='btn btn-outline-primary jr'
            onClick={()=>setShow(!show)}
        >Show/Hide {JSON.stringify(show)}</button>    
    </div>
  )
}
