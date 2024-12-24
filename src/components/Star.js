import React from 'react'

function Star(props) {
  const starIcon = props.isFilled ? 'star-filled.png' : 'star-empty.png'
  const textLabel = props.isFilled ? 'Remove from favourite' : 'Add to favourite'

  return (
    <button
      onClick={props.handleClick}
      aria-label={textLabel}
      aria-pressed={props.isFilled}
      className={`focus:outline-none ${props.isFilled ? 'text-yellow-500' : 'text-gray-500'}`}
    >
      <img
        src={`/images/${starIcon}`}
        alt='Star Icon'
        className='w-8 h-8 cursor-pointer'
      />
    </button>
  )
}

export default Star