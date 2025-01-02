import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.jpg'
import de from '../assets/de.png'

const Todo_items = ({text,id , iscompleted ,delete_Todo,toggle }) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img  className='w-5 mr-2' src={iscompleted ? tick:not_tick} alt="" />
            <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500
             ${iscompleted ? "line-through":"" }`}>{text}</p>
        </div>

<img onClick={()=>{delete_Todo(id)}} className='w-7 cursor-pointer' src={de} alt="" />

    </div>
  )
}

export default Todo_items