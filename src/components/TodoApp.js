import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList';



function TodoApp() {
    const [input, setInput] = useState("")
    const [todos,setTodos] = useState([
        {
            id:1,
            task:"First Task",
            isCompleted: false
        },
        {
            id:2,
            task:"Second Task",
            isCompleted: false
        }
    ]);
    
 

    return (
        <div className="todoApp">
            <h1>Task List</h1>
            <TodoForm
            setInput={setInput} 
            input={input} 
            todos={todos}
            setTodos={setTodos}
             />
            <TodoList todos={todos} setTodos={setTodos}  />
        </div>
    )
}

export default TodoApp
