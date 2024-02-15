import React , {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addtodo} from '../features/Todo/todoSlice'

function AddTodo() {

    const [input, setinput] = useState("")
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        if(input!=""){
            dispatch(addtodo(input))
        }
        setinput("")
    }

  return (
    <form onSubmit={addTodoHandler}  className="flex">
        <input
            type="text"
            placeholder="Write Todo..."
            className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            value={input}
            onChange={(e) => setinput(e.target.value) }
        />
        <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
            Add
        </button>
    </form>
  )
}

export default AddTodo
