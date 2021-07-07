// Code your solutions in this file


function writeCards(name, message) {
    let array = []

    for (let i = 0; i < name.length; i++) {
        array.push(`Thank you, ${name[i]}, for the wonderful ${message} gift!`)
    }

    return array
}

function countDown(num) {
    // for (let i=0;i<nums.length;i++) 
    
    // console.log(num)
    for (let i=num;i>=0;i--) {
        console.log(i)
    }
}

