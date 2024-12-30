// function greeting (name) {
//     const date = new Date();
//     const hours = date.getHours();

//     let timeOfDay
//     if (hours >= 4 && hours <= 12) {
//         timeOfDay = "morning"
//     }
//     else if (hours >= 12 && hours <= 18) {
//         timeOfDay = "afternoon"
//     }
//     else {
//         timeOfDay = "night"
//     }

//     return `Good ${timeOfDay} ${name}!`
// }

// console.log(greeting("Luqman"));

import React from 'react'

export default function Test() {   
    const [answer, setAnswer] = React.useState(true);

    function clickAnswer(){
        setAnswer(prevAnswer => !prevAnswer)
    }


    return (
        
        console.log({answer ? 'true' : 'false'})
    )
    
}

//change state without changing the other state
function toggle(id) {
    setElement (prevElement => {
        return prevElement.map( element => {
            return element.id === id ? {...element, status: !element.status} : element
        })
    })
}


const [message, setMessage] = React.useState("a", "b")

// 1.First way
<div>
    <h1>{
    message.length === 0 ?
    "No message" : "You have {message.length} messages" 
    } 
    </h1>
</div>

// 2. Second way
function messageAppear () {
    message.length === 0 ? "No message" : "You have {message.length} messages"
}

<div>
    <h1>{messageAppear()}</h1>
</div>

function Joker(props) {
    const [isShown, setShown] = React.useState(false);

    function toggleClick() {
        setShown( prevShown => !prevShown)
    }



    return (
        <div className= {`  ${toggleCLick ? 'bg-black' : 'bg-white' }` }>
            <h1>{props.head}</h1>
            {isShown && <h2>{props.pucnhline}</h2>}
            <button onClick={toggleClick} >
                {isShown ? "Tunjuk" : "Sembunyi"}
            </button>
        </div>
    )
}



// 1. conditional rendering 
//2. Form

