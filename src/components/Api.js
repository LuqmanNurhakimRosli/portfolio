import React, {useState} from 'react'

function Api() {
    const [starWarsData, setStarWarsData] = useState({})

    fetch("https://swapi.dev/api/people/1")
    .then(response => response.json())
    .then(data => setStarWarsData(data))

  return (

    <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
  )
}

export default Api