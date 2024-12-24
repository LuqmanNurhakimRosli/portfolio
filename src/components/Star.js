import React from 'react'

function Star(props) {
  let starIcon = props.isFilled ? 'star-filled.png' : 'star-empty.png'
  return (
    <div className='flex justify-center mb-4'>
          <img  src={`/images/${starIcon}`} alt='Star Icon' className='w-8 h-8 cursor-pointer' 
          onClick={props.handleClick}/>
    </div>
  )
}

export default Star
