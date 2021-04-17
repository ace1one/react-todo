import React, {useState} from 'react'

function SinglePage() {
    const [input, setInput] = useState('')
    const [addInput, setAddInput] = useState([])

    const handleChange= e =>{
        setInput(e.target.value)
    }

    const addNewInput =(e)=>{
        e.preventDefault();
        const newTodo={
            id:Math.floor(Math.random()*1000),
            text: input
        }
        setAddInput([newTodo,...addInput])
        setInput('')
    }

    const deleteTodo= id =>{
        const checkid = addInput.filter(idcheck => id!==idcheck.id )
        setAddInput(checkid)
    }

    return (
        <div>
            <form onClick={addNewInput}>
                <input type='text' value={input} name='text' onChange={(e)=>handleChange(e)} />
                <button>Add</button>
            </form>
            <div>
                {
                    addInput.map(list=>{
                        return (
                          <div>
                            <h1>{list.text}</h1>
                          {list.text !=='' ?  <button onClick={() => deleteTodo(list.id)}>  Delete
                            </button>: ''} 
                            
                             
                          </div>
                        );
                    })

                }
            </div>
        </div>

    )
}

export default SinglePage
