import './AddTodos.css'
import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import { addTodo } from '../../features/todo/todoSlice';

export default function AddTodos() {
    const [text, setText] = useState();

    const dispatch = useDispatch();

    const addTodoHandler = (e) =>{
        e.preventDefault();
        dispatch(addTodo(text));
        setText(''); 
    }

    return (
        <div className='main-form-add-todo-div'>
            <form className='form-add-todo' onSubmit={addTodoHandler}>
                

                <div>
                    <input
                        type='text'
                        onChange={(event)=>setText(event.target.value)}
                        className='text-input'
                        value={text}
                    />
                </div>

                <div>
                    <button
                        type='submit'
                        className='add-btn'
                    >
                        Add Button
                    </button>
                </div>

            </form>
        </div>
    )
}
