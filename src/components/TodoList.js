import React from 'react'

function TodoList(props) {
    const {todos, setTodos} = props
    const deleteTodo= (id)=>{
        const updateDelete = todos.filter(todos => todos.id !== id )
        setTodos(updateDelete)
    }

    const Completed = (id)=>{
        const completeTodo = todos.map(todo=>{
            if (todo.id === id){
                todo.isCompleted = true;
                return todo;
            }
                return todo;
        })
        setTodos(completeTodo)
    }

    const completeCount =()=>{
        return todos.filter(todocount=>todocount.isCompleted).length
       
    }

    return (
        <div class="d-flex justify-content-center">
            <div class="list-group col-md-5 d-flex justify-content-center">
                <button
                    type="button"
                    class="list-group-item list-group-item-action active"
                    aria-current="true"
                >
                    TASK LIST ({completeCount()} / {todos.length}) 
                </button>
                {
                todos.map(tasklist => {
                    return (
                        <button type="button" class="list-group-item list-group-item-action d-flex justify-content-between">
                            {tasklist.isCompleted ? <span onClick={() => Completed(tasklist.id)} style={{ textDecoration: "line-through", color: "red" }}>
                                {tasklist.task}
                            </span> : <span onClick={() => Completed(tasklist.id)}>
                                {tasklist.task}
                            </span>}
                            <div>
                            <i class="fas fa-trash" onClick={() => deleteTodo(tasklist.id)} style={{marginRight:"10px"}}></i>
                           
                            </div>
                        </button>
                    )
                })
                }
            </div>
        </div>
    )
}

export default TodoList