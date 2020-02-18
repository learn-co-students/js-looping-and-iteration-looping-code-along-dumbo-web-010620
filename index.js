function writeCards(name) {
    let newArr = []
    for (let i = 0; i < name.length; i++) {
      newArr.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`)
    }
    return newArr;
  }
  
  function countDown(num) {
    while (num > 0) {
      console.log(num);
      num -=1;
    }
    console.log(num);
  }