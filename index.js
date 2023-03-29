// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, value) {
    let messagedNames = []
    for (let i = 0; i < names.length; i++) {
        messagedNames.push(`Thank you, ${names[i]}, for the wonderful ${value} gift!`);    
    }

    return messagedNames;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number)
        number --
    }
}
