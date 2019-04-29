const readlineSync = require('readline-sync')
const firstOption = ['put hand in hole', 'find key', 'open door'] 

let gameOver = false
while(!gameOver){
    let index = readlineSync.keyInSelect(firstOption,"choose an action")
        if (firstOption[index] == 'put hand in hole'){
            console.log('you died')
        } else if (firstOption[index] == 'open door'){
            console.log('you need the key first!')
        } else{
            gameOver = true
            console.log('congrats, you made it out!')
        }
    
    
}