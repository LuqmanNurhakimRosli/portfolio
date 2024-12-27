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
function toggle(id) {
    setElement (prevElement => {
        return prevElement.map( element => {
            return element.id === id ? {...element, status: !element.status} : element
        })
    })
}

