import ToDoCard from "./toDoCard";

export default function toDoList(props) {
    const {todos,handleDelete} = props
  return (
    <div className="main">
        {todos.map((x,y)=> {
            return (
                <ToDoCard {...props} key={y} index={y}>
                    <p>{x}</p>
                </ToDoCard>
            )
        })}
    </div>
  )
}
