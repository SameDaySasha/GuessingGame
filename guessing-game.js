const readLine = require(`node:readline`)
const { stdin: input, stdout: output } = require('node:process')
const rl = readLine.createInterface({ input, output})

rl.question("Enter a guess: ",  function askGuess(answer) {
    let num = Number(answer)
    if(checkGuess(num) === true){
        rl.close()
    } else {
        rl.question(' Try again. ', askGuess)
    }
        
        
        
    



}) 



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



// console.log(checkGuess(91))
// console.log(checkGuess(19))
// console.log(checkGuess(13))
// console.log(checkGuess(6))
// console.log(checkGuess(42))
// console.log(checkGuess(978))
// console.log(checkGuess(55))


