import React from 'react'

function TodoList(props) {
    const {todos, setTodos} = props
    //   setTodos([...todos,setTodos])
    return (
        <div>
            <li>
                {
                    todos.map(tasklist=>{
                     return(
                         <ul>
                             {tasklist.task}
                         </ul>
                     )
                    })
                }
            </li>
        </div>
    )
}

export default TodoList
