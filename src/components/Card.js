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
    const info = props.card.status === 'Beginner' ? "Beginner" : "Immediate";

  return (
    <div>
     
  
    <div className='font-mono border border-gray-300 rounded-lg shadow-lg p-4  bg-indigo-300 text-center flex flex-col space-y-2 w-48'>
        {/* <img src={require(`../images/${props.card.image}`)} alt="gambar" /> */}
        <img src = {props.card.image} alt="{props.card.title}" className=" mx-auto w-16 h-16 object-contain mb-2"/>
        <div className='border bg-white border-gray-300 rounded-lg shadow-lg font-semibold text-base text-black px-6  w-fit mx-auto'>{info}</div>
        <div className=''>
            <h2 className='text-xl font-semibold'> {props.card.title}</h2>
            {/* <p>{props.card.content}</p> */}
        </div>
        </div>
      </div>
  )
}

export default Card
