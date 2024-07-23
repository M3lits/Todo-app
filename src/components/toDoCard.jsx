import React from 'react'

export default function toDoCard(props) {
    const {children,handleDelete,index, handleEdit} = props;
    
  return (
    <li className="todoItem" >
        {children}
               <div className='actionsContainer'>
                <button onClick={()=>handleEdit(index)}>
                <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick={()=>handleDelete(index)}>
                <i className="fa-solid fa-trash-can"></i>
                </button>
               </div>
                </li>
  )
}
