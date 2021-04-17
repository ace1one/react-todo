import React, {useState} from 'react'
import TodoForm from './TodoForm'

function TodoList1() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
        return;
        }

        const newTodos = [todo,...todos]

        setTodos(newTodos)
        console.log(todo,...todos)
    };

   

    return (
        <div>
            <TodoForm onSubmit={addTodo} />
          <h1>
              {todos.map(list =>{
                  return(
                      <li>{list.text}</li>
                  )
              })}
          </h1>

        </div>
    )
}

export default TodoList1
