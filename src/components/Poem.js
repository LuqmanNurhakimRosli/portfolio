import React from 'react'

function Poem({joke, answer})  {
  return (
    <div>
      <h1>{joke}</h1>
      <h2>{answer}</h2>
    </div>
  )
}

export default Poem
