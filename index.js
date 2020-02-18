// Code your solutions in this file

function writeCards(arr, event) {
    let thanksCard = [];

    for (let i = 0; i < arr.length; i++){
        thanksCard.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
    }
    return thanksCard;
}

function countDown(start) {
    while(0 < start){
        console.log(start--);
    }
    console.log(start);
    
}
