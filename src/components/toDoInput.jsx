import { useState } from "react"

export default function toDoinput(props){
    const {handleTodos ,setTodoValue, toDoValue} = props
    return (
        <>
        <input value={toDoValue} 
               onChange={(e)=>{setTodoValue(e.target.value)}} type="text"
               placeholder="Enter todo.." />

        <button onClick={()=>{handleTodos(toDoValue); setTodoValue("")} }  >Add!</button>
        </>
    )
}