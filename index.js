// Code your solutions in this file
let thankYou = []
function writeCards(nth){
    for (let i = 0; i < nth.length; i++){
         thankYou.push(`Thank you, ${nth[i]}, for the wonderful surprise gift!`);
    }
    return thankYou
}

function countDown(n){
    while(n>=0){
        console.log(n);
        n--;
    }
}