import { useState, useEffect } from "react";
import ToDoInput from "./components/toDoInput";
import ToDoList from "./components/toDoList";

function App() {
  

  const [todos,setTodos] = useState([]);
  const [toDoValue,setTodoValue]=useState("");

  function persistData(newList){
    localStorage.setItem("todos", JSON.stringify({todos: newList}))
  }

  function handleTodos(e){
    const newTodo = [...todos,e]
    persistData(newTodo)
    setTodos(newTodo)
  }

  function handleDelete(i){
    setTodos(todos.filter((_,x)=>x!==i))
  }
  function handleEdit(index){
    const valueToEdit = todos[index];
    setTodoValue(valueToEdit);
    handleDelete(index)

  }

  useEffect(()=>{
    if (!localStorage){return}
    let localTodos = localStorage.getItem("todos")
    if(!localTodos){return}
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])


  return (
    <>
      <ToDoInput handleTodos={handleTodos} toDoValue={toDoValue} setTodoValue={setTodoValue}/>
      <ToDoList todos={todos} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </>
  )
}

export default App
