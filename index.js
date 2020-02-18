// Code your solutions in this file
function writeCards(name, type){
    
   // let thing = name.split(",")
    // for (let i = 0; i < thing.length; i++) {
    // console.log(`Thank you, ${thing[i]}, for the wonderful ${type} gift!`);
// }
    let thankYouCards = []    
    for (let i = 0; i < name.length; i++) {
        thankYouCards.push(`Thank you, ${name[i]}, for the wonderful ${type} gift!`);
    }
    return thankYouCards
}

function countDown(num) {
    while (num > 0) {
        console.log(num)
        num -= 1
    }
    console.log(num);   
}