//-------------------------------------
//            Initial Settup
//-------------------------------------
// create directory for your app
// cd into your apps directory
// add an app.js file

// create a package.json File
// nmp init -y

// create file .gitignore
// touch .gitignore
// add: node_modules/ 

// npm install readline-sync
// npm i readline-sync

//-------------------------------------
// //           your app
// //-------------------------------------


// //note readlineSync is an abject of methods

// let answer = readlineSync.keyInYN('Do you like tacos with nutella')
//  // y: returns true ---- no: returns false

// if(answer){
//    let crazy = readlineSync.keyInYN('Are you crazy? ')
// } else {
//     console.log('bye')
// }

// const states = ['Texas', 'California', 'Arizona', 'Oregon', 'Hawaii', 'Florida']
// let index = readlineSync.keyInSelect(states, 'Which state could we lose?')


// let gameOver = false

// while(!gameOver){
//     let index = readlineSync.keyInSelect(states, 'Which state could we lose?')
//     if(index !== 'Florida'){
//        console.log('Wrong answer, guess again')
//        console.log(`${states[index]} is alright`)
//     } else {
//         gameOver = true
//         console.log('nice')
//     }
    
// }

const readlineSync = require('readline-sync')
const cars = ['corvette','lambo','beamer','rari','mini cooper']

let gameOver = false

while(!gameOver){
    let index = readlineSync.keyInSelect(cars,'What car should explode?')
if(cars[index] !== 'mini cooper'){
    console.log('TF is wrong with u?')
    console.log(`${cars[index]}'s are hella tight`)
} else {
    gameOver = true
    console.log('you just killed a family')
}
}

   



   
