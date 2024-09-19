
import { useRef } from 'react';
import '../useEffect/effects.css'

export const FocusScreen = () => {
    
    const inputRef = useRef();
    const focused = () => inputRef.current.select()

    return (
        <div>
            <h3>FocusScreen</h3>
            <hr />
            <input 
                ref={inputRef}
                className='form-control'
                type="text" 
                placeholder='Introduce tu nombre'
            />

            <button className='btn btn-outline-primary mt-3' onClick={focused}>Focus</button>

        </div>
    )
}
