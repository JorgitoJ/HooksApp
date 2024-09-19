import { useMemo, useState } from 'react'
import {useCounter} from '../../hooks/useCounter'
import { heavyProcess } from '../../helpers/ProcessHeavy'

import '../useEffect/effects.css'
import './memos.css'

export const Memos = () => {
    const {counter, increment} = useCounter(200)
    const [show, setShow] = useState(true)

    const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter])

    return (
    <div>
        <h2>Counter: <small>{counter}</small> </h2>
        <hr />

        <p>{memoHeavyProcess}</p>

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
