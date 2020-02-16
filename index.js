// Code your solutions in this file
function writeCards(array,event){
    const gifted = [];
    for (let i = 0; i < array.length; i++){
        gifted.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return gifted;
}

function countDown(number){
    while (number >= 0){
        console.log(number--);
    }
}