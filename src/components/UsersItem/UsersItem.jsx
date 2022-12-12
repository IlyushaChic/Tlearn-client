import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

const UsersItem = ({id,email}) => {


const navigate=useNavigate()

  return (
    <div className='user-elem'>

<div>{id}</div>
<div>{email}</div>
        
      <div className='users-btn'>
      {/* getUserDataFx */}
      <button className="btn btn-primary" onClick={()=>navigate(`${id}`)}>Открыть</button>
          </div>
      

    </div>
  )
}

export default UsersItem 