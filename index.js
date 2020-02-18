// Code your solutions in this file
function writeCards(namesArray, surprise){
    let thankYouMessages = [];
    for(let i = 0; i < namesArray.length; i++){
        thankYouMessages.push(`Thank you, ${namesArray[i]}, for the wonderful ${surprise} gift!`) // instead of quotation marks, use backticks to utilize ${}
    }

    return thankYouMessages;
}

function countDown(number){
    while ( number > 0 ){
        console.log(number);
        number--;
    }
    console.log(number);
}