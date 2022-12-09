import React from 'react'
import './style.css'


const Spinner = ({top,left}) => {
  return (
    <div 
    style={{top:`${top}px`,left:`${left}px`}} 
    role='status' 
    className='spinner-border main-spinner'/>
  )
}

export default Spinner