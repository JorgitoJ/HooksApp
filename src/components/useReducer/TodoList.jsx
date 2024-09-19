import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ( {handleToggle, todos, handleDelete } ) => {
    
    return (
        <ul className='list-group list-group-flush '>
                { todos.map((todo, i) => (
                    
                    <TodoListItem 
                    handleToggle={handleToggle}
                    todo={todo}
                    handleDelete={handleDelete}
                    i={i}
                    key={todo.id}
                    />

                    // <li
                    //     key={todo.id}
                    //     className='list-group-item'
                    // > 
                    
                    //     <p 
                    //         className={`${ todo.done && 'complete' }`}
                    //         onClick={() => handleToggle(todo.id)} 
                    //     > {i + 1}. {todo.desc} </p>
                    //     <button 
                    //         className='btn btn-danger'
                    //         onClick={() => handleDelete(todo.id)}
                    //     > Delete </button>
                    // </li>
            ))}
        	</ul>
    
    )
}
