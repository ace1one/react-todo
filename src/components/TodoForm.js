import React from 'react';


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
        <div class="d-flex justify-content-center" >
            <form  onSubmit={(e) =>handleSubmit(e)} >
              <div class="row">
                <div class="col-md-10">
                  <div class="md-form mt-0">
                    <input 
                    id="outlined-basic" label="Outlined" variant="outlined"
                    type='text'
                    value={input}
                    name='text'
                    onChange={handleChange} 
                    class="form-control" 
                    placeholder="Add Task" />
                  </div>
                </div>
                  <div class="col-md-2">
                    <button type="submit" className="btn btn-primary btn-md">Add</button>
                  </div>
              </div>
             
            </form>
        </div>
    )
}
