function writeCards(name,eventName ){
    let thankYouGreet = [];
        for(let i=0; i< name.length; i++){
            thankYouGreet.push(`Thank you, ${name[i]}, for the wonderful ${eventName} gift!`)
        }
     return thankYouGreet
    }
    
    function countDown(num){
    let i = -1;
    
    while (i < num ) {
        console.log(num)
        num--;
    }
    
    }