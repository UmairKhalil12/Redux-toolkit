import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, updateTodo } from '../../features/todo/todoSlice';

export default function SimpleTodos() {
    const todos = useSelector(state => state.todos);
    console.log(todos, 'todos from selector');
    const dispatch = useDispatch()
    const [edited, setEdited] = useState('');
    const [inputDisplay, setInputDisplay] = useState(false);
    const [id , setId] = useState(null);

    const updateTodoHandler = (e) => {
        e.preventDefault();
        dispatch(updateTodo({ text: edited, id: id }));
        setInputDisplay(false);
    }

    const handleEditButton = (id , text) => {
        setInputDisplay(true);
        setId(id);
        setEdited(text)
        
    }


    return (
        <div>
            {todos.map((todo) => {
                return (
                    <li key={todo.id}>
                        {todo.text}
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                        >Delete
                        </button>


                        <button
                            onClick={() => handleEditButton(todo.id  ,todo.text)}
                        >Edit</button>

                        {inputDisplay && todo.id === id ?
                            <form onSubmit={updateTodoHandler}>
                                <input
                                    value={edited}
                                    onChange={(e) => { setEdited(e.target.value) }}
                                    type='text'
                                />
                                <button>save</button>
                            </form>
                            : ''
                        }
                    </li>
                )
            })}
        </div>
    )
}
