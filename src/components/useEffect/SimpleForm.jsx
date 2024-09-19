import { useEffect, useState } from 'react'
import { Message } from './Message'

import './effects.css'

export const SimpleForm = () => {
  
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const {name , email} = formState

    useEffect ( () => {
        // console.log('dispara')
    }, []);
    
    useEffect ( () => {
        // console.log('dispara el name')
    }, [name]);



    const handleInputChange = ({target}) => {

        setFormState({
            ...formState,
            [target.name]: target.value
        })

    }

    return (
    <>

        <h2>useEffect</h2>
        <hr />
        <div className='form-group'>
        <input 
            type="text"
            name='name'
            className='form-control'
            value={name}
            placeholder='Introduce tu nombre'
            autoComplete='off'
            onChange={handleInputChange}
        />
        </div>

        <hr />
        
        <div className='form-group'>
        <input 
            type="text"
            name='email'
            className='form-control'
            value={email}
            placeholder='email@gmail.com'
            autoComplete='off'
            onChange={handleInputChange}
        />
        </div>
        
        <br />
        
        {(name==='123') && <Message/>}

    </>
  )
}
