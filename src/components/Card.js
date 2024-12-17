import React from 'react'

function Card(props) {
    // let info 
    // if ( props.card.status === "online")
    // {
    //     info = "Online"
    // }
    // else {
    //     info = "Offline"
    // }
    const info = props.card.status === 'online' ? "Online" : "Offline";

  return (
    <div className='border border-gray-300 rounded-lg shadow-lg p-4 max-w-sm bg-white'>
        <div className='font-semibold text-sm text-green-400 bg-white'>{info}</div>
        <img src={require(`../images/${props.card.image}`)} alt="gambar" />
        <div>
            <h2>{props.card.title}</h2>
            <p>{props.card.content}</p>
        </div>

    </div>
  )
}

export default Card
