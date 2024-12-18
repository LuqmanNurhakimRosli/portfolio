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
    <div className='border border-gray-300 rounded-lg shadow-lg p-4 max-w-sm bg-indigo-300 text-center flex flex-col justify-center'>
        {/* <img src={require(`../images/${props.card.image}`)} alt="gambar" /> */}
        <img src = {props.card.image} alt="gambar" className="block mx-auto w-24 sm:w-24 md:w-24 lg:w-24"/>
        <div className='font-semibold text-base text-black '>{info}</div>
        <div>
            <h2>{props.card.title}</h2>
            <p>{props.card.content}</p>
        </div>

    </div>
  )
}

export default Card
