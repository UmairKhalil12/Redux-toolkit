import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
   todos : [{id: 1 , text: 'learn redux with react' , status: false}]
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,

    //state tells abhi kya situation hai 
    // actions humain values deta jo humain chaiye hoti ; for example id ke value 

    reducers:{
        addTodo : (state , action ) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                status: false
            } 
            state.todos.push(todo);
        },
        
        removeTodo : (state , action)=> {
            state.todos = state.todos.filter((todo)=>{
                return todo.id !== action.payload
            })
        },

        updateTodo : (state , action) =>{
            const {id  ,text} = action.payload
            state.todos = state.todos.map((todo)=>{
                if (todo.id === id){
                    return {
                        ...todo,
                        text : text,
                    }
                } else {
                    return todo; 
                }
            })
        } 
     }
})

export const {addTodo , removeTodo , updateTodo} = todoSlice.actions

export default todoSlice.reducer