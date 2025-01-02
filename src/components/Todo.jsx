import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import Todo_items from './Todo_items'

const Todo = () => {
    let [todo_list,set_todo_list] =useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")) :[] )
    const inputRef =useRef ()

    const add_text=()=>{
        const input_text = inputRef.current.value.trim();
         
        if(input_text === ""){
          return null;
        }
        
        const new_todo={
          id:Date.now(),
          text : input_text,
          iscompleted: false,
         }
         set_todo_list((prev)=>[...prev,new_todo])
         inputRef.current.value =""
    }


    const delete_Todo =(id)=>{
      set_todo_list((prevTodos)=>{
       return prevTodos.filter((todo)=> todo.id !== id)
      })
    }


    const toggle=(id)=>{
      set_todo_list((prevTodos)=>{
        return prevTodos.map((todo)=>{
          if(todo.id === id  ){
            return {...todo,iscompleted :!todo.iscompleted}
          }
          return todo;
        })
      })
    }

    useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todo_list))
    },[todo_list])

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[661px] rounded-3xl'>
       
       {/*------------title-------------*/}
       <div className='flex items-center mt-7 gap-2'>
        <img src={todo_icon} alt="" className='w-8 ' />
        <h1 className='text-3xl font-mono'>TO-DO LIST</h1>
       </div>

 {/*-----------input box------------*/}
 <div className='flex items-center my-7 bg-gray-200 rounded-full'>
    <input  ref={inputRef} type="text" placeholder='ADD TASK' className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-800' />
    <button onClick={add_text} className='border-none rounded-full bg-orange-600 w-33 h-14 text-white text-lg font-medium cursor-pointer px-5'> ADD +</button>
 </div>



 {/*-----------todo-list ------------*/}

 <div>

  {todo_list.map((item,index)=>{
    return <Todo_items key={index} text={item.text} id={item.id} 
    iscompleted={item.iscompleted} delete_Todo={delete_Todo} toggle={toggle}/>
  })}

 </div>

    </div>
  )
}

export default Todo