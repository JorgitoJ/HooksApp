
const initialState = [{
    id: 1,
    todo: 'comprar pan ',
    done : false
}]

const newTodo = {
    id: 2,
    todo: 'comprar leche',
    done: false    
}

const todoReducer = (state = initialState, action )=>{

    if (action?.type === 'agregar') {
        return [...state, action.payload]
    }

    return state
}

let todo = todoReducer()

const action = {
    type: 'agregar',
    payload: newTodo
}

todo = todoReducer( todo, action) 


console.log(todo)