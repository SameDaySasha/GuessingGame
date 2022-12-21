const secretNumber = 42


const checkGuess = number => {
    if(number > secretNumber){
        console.log(`Too high.`)
        return false
    }
    if (number < secretNumber){
        console.log(`Too low.`)
        return false
    } 
    if   (number === secretNumber){
        console.log(`Correct!`)
        return true
        
    }
      
    
}