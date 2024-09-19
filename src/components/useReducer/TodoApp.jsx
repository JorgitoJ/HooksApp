import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoForm } from './TodoForm'

import './styles.css'


const init = ()=>{
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer , [], init)


    useEffect(() => {
    
    localStorage.setItem('todos', JSON.stringify(todos))

    }, [todos])
    
    const handleDelete = (todoID) => {
        console.log(todoID)

        const action ={
            type:'delete',
            payload: todoID
            
        }
        dispatch(action)
    }

    const handleToggle = (todoID)=>{
        const action ={
            type: 'toggle',
            payload: todoID
        }
        dispatch(action)
    }

    const handleNewTodo = (newTodo) => {

        dispatch({
            type: 'add',
            payload: newTodo
        })

    }
    
    
    return (
    <>
        <h2>TodoApp: {todos.length}</h2>
        <hr />

        <div className='row'>
            <div className='col-7'>

            <TodoList 
                todos={todos}
                handleToggle={handleToggle}
                handleDelete={handleDelete}
            />
            
            </div>

            <div className='col-5'>
                <TodoForm 
                    handleNewTodo={handleNewTodo}
                />
            </div>
        </div>
    </>
    )
}
