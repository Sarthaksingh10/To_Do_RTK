//we are creating reducer which will contain all the functions 


import {createSlice, nanoid} from '@reduxjs/toolkit'
//Nanoid Generates unique id 
const initialState={
   todos:[{id:1, Text:"Hello World"}]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{           // We can give either refrence to a function in the reducer or we can directly define the function inside the reducer both are true
        addTodo:(state,action)=>{    //In the context Api we only declare a function but don't define it but in RTK we define it too.
            const todo={             //State will give us the access of the value inside the initial state.
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id !== action.payload)
        },
      /*   UpdateTodo:(state,action)=>{
            state.todos=state.todos.map((todo)=>
              todo.id === action.payload.id ? action.payload : todo
            )
        }, */
    }
})

export const {addTodo,removeTodo}=todoSlice.actions
export default todoSlice.reducer 

//State: state gives us the access of the value in the initial state . 
//Action:  Values which will help us to perform action by giving us some values are done with the help of actions 
