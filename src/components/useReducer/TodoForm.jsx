import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoForm = ({handleNewTodo}) => {
    
    const [{description} , handleInputChange, reset] = useForm({
        description: ''
    })
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(description.trim().length<=1){
            return;
        }

        const newTask = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleNewTodo(newTask)
        reset()

    }

    return (
        <>
            <h4>Add Task</h4>
            <hr />
                <form onSubmit={handleSubmit}>
                    <input
                        onChange={handleInputChange}
                        type="text"
                        placeholder='Learn...'
                        name='description'
                        className='form-control'
                        autoComplete='off'
                        value={description}
                    />

                    <button 
                        type='submit'
                        className='btn btn-outline-primary mt-1 w-100'                        
                    >Add</button>

                </form>
        </>
    )
}
