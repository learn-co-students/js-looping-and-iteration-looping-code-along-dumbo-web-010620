// Code your solutions in this file

function writeCards (names, gift) {
  let thankYouCards = []
  for (let i = 0; i < names.length; i++) {
    thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${gift} gift!`)
  }
  return thankYouCards
}

function countDown (num) {
  while (num >= 0) {
    console.log(num--);
  }
}
