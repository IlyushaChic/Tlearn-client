import React from 'react'
import "./style.css"

const Alert = ({propsText,propsStatus}) => {
  return (
    <div className={`alert alert-wrapper alert-${propsStatus}`}>{propsText}</div>
  )
}

export default Alert