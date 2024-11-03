import React, { useState } from "react";

export default function Todolist(){
    const [todos, setTodos] = useState([])
    const [value, setValue] = useState('')

    function HandleChange(event){
        setValue(event.target.value);
    }
    function Addtodo(){
        if (value.trim()){
            setTodos([...todos,value]);
            setValue('')
        }

    }
    function DeleteTodo(index){
        const newTodos = todos.filter((_,i)=>i !==index);
        setTodos(newTodos)
    }
    return(
        <div>
            <h2>Todo list</h2>
            <input
            type="text"
            value={value}
            onChange={HandleChange}
            placeholder="Add task"
            />
            <button onClick={Addtodo}>Add</button>
            <br></br>

            <ul>
                {todos.map((todo,index)=>(
                    <li key = {index}>
                        {todo}
                    <button onClick={()=>DeleteTodo(index)}>Delete</button>

                    </li>
                )
                )}
            </ul>
        </div>
    )
};
