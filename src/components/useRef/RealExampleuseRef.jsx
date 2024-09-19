import { useState } from 'react'
import { CustomHooks } from '../customHooks/CustomHooks'


import '../useEffect/effects.css'

export const RealExampleuseRef = () => {
    
    const [show, setShow] = useState(false)
    
    return (
        <div>

            <h2>Real Example useRef</h2>
            <hr />

            {show && <CustomHooks/>}

            <button 
                className='btn btn-primary mt-2'
                onClick={()=>setShow(!show)}>
            Show/Hide
            </button>

        </div>
    )
}
