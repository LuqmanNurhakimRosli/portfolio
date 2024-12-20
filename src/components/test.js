function greeting (name) {
    const date = new Date();
    const hours = date.getHours();

    let timeOfDay
    if (hours >= 4 && hours <= 12) {
        timeOfDay = "morning"
    }
    else if (hours >= 12 && hours <= 18) {
        timeOfDay = "afternoon"
    }
    else {
        timeOfDay = "night"
    }

    return `Good ${timeOfDay} ${name}!`
}

console.log(greeting("Luqman"));