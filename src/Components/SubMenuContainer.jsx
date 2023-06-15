import React from 'react'
import { AiOutlineCaretRight } from 'react-icons/ai'

function SubMenuContainer({name}) {
  return (
    <div className='flex justify-between '>
        <h3 className='tex-[16px] font-semibold  '>{name}</h3>
        <div className='flex justify-between items-center text-orange-500 text-[13px] font-normal '>
            <p >View All</p>
            <i ><AiOutlineCaretRight size={18} /> </i>
        </div>
    </div>
  )
}

export default SubMenuContainer