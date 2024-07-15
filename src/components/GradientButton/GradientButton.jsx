import React from 'react'
import './gradient.css'
const GradientButton = ({name}) => {
  return (
    <div>
        <button className='gradient'>{name}</button>
    </div>
  )
}

export default GradientButton