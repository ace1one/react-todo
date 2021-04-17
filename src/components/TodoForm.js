import React, {useState} from 'react'
import { Button,TextField } from '@material-ui/core';


export default function TodoForm({setInput,input,todos,setTodos}) {

    const handleChange= e=> {
       setInput(e.target.value)
       console.log(e.target.value)

    }

    const handleSubmit = e =>{
        //to prevent from refresin page on click button
        e.preventDefault();
        const addTodo ={
          id: Math.floor(Math.random()* 1000),
          task: input,
          isCompleted: false
        }

        setTodos([...todos,addTodo])
        setInput('');


    }
    return (
        <div>
          <form className='todo-form' onSubmit={(e) =>handleSubmit(e)}>
              <input  className="inputForm"
               id="outlined-basic" label="Outlined" variant="outlined"
               type='text'
               value={input}
               name='text'
               onChange={handleChange}
              id="formGroupExampleInput"
              placeholder="Example input"
               />

            <button type="submit" className="btn btn-primary btn-sm">Add</button>
          </form>
        </div>
    )
}
