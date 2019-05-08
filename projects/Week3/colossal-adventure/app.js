var ask = require('readline-sync');
console.log('welcome to the CARTEL WARS')

let username = ask.question('Enter your gang affiliation:');
console.log('whats up ' + username + '!');

function Player (username){
    this.name = username;
    this.hp = 100;
    this.inventory = 'Glock';
    this.isAlive = true;
    this.hasWon = false;
    this.attack = function(){
        return Math.floor(Math.random() * 25) + 5
    }
}

let you  = new Player(username)

function Fed (name, hp, num){
    this.name = name;
    this.hp = hp;
    this.attack = function(){
        return Math.floor(Math.random() * num) + 2
    };
}

const DEA = new Fed ('DEA', 100, 5)
const HomelandSecurity = new Fed ('Homeland Security', 100, 8)
const CIA = new Fed ('CIA', 100, 9)

const feds = [DEA, HomelandSecurity, CIA,]




while(!you.hasWon && you.isAlive){
    let action = ask.keyIn('cruise around with [w], check inventory with [i]', {limit: 'wi'} )
    if (action === 'w'){
        cruise()
    } else {
        console.log(`Your inventory is ${you.inventory}`)
    }
}

while(feds.hp < 0){
    win()
}

function cruise () {
    let random = Math.floor(Math.random() * 4) + 1
    if(random < 4){
        console.log('business is going smooth')
    }
     else {
            fedsAreHere()       
    }
}


function fedsAreHere(){
    let Fed = feds [Math.floor(Math.random() * feds.length)]
    let action = ask.keyIn(` ${Fed.name} is on to you! fight them off with [f], or try and get away with [x]`, {limit: 'fx'})
    if (action === 'x') {
         runAway()
    }else{
        while(Fed.hp > 0 && you.hp > 0){
            fight(Fed)
        }  
    }
}
function runAway(){
    if (Math.random() < .5) {
        console.log('Nice, you got away. Coward');
        cruise()
    }else{
        console.log("You didn't get away");
    }
}

function fight(Fed, index){
    while (Fed.hp > 0 && you.hasWon === false ){
        if (you.hp <= 0){
            death()
            }let random = Math.floor(Math.random()*5) +1
        if (random === 2) {
            console.log ("you missed!")
        } else {    
            Fed.hp -= you.attack()
            you.hp -= Fed.attack()
            console.log(`${Fed.name} busted a cap in you. ${you.name}'s hp is now ${you.hp}. ${Fed.name} got shot and hp is now ${Fed.hp}`)
    }
    } if (Fed.hp < 0){
        fedDie();
    } else{
        win()
    }
    }


function death(){
    you.isAlive === false;
    console.log('you died');
}

function fedDie(index){
    console.log(`You Took Them Out!`)
    feds.splice(index , 0);
}
function win(){
    (you.hasWon === true)
    console.log("You Won")
}
