var ask = require('readline-sync');
console.log('welcome to the CARTEL WARS')

let username = ask.question('Enter your gang affiliation:');
console.log('whats up ' + username + '!');

function Player (username){
    this.name = username;
    this.hp = 100;
    this.inventory = 'flameThrower';
    this.isAlive = true;
    this.hasWon = false;
    this.attack = function(){
        return Math.floor(Math.random() * 10) + 6
    }
}

let you  = new Player(username)

function Fed (name, hp, num){
    this.name = name;
    this.hp = hp;
    this.attack = function(){
        return Math.floor(math.random() * num) + 2
    };
}

const DEA = new Fed ('DEA', 175, 15)
const HomelandSecurity = new Fed ('Homeland Security', 200, 20)
const CIA = new Fed ('CIA', 210, 35)

const feds = [DEA, HomelandSecurity, CIA,]



while(!you.hasWon && you.isAlive){
    let action = ask.keyIn('cruise around with [w], turn yourself in with [t]', {limit: 'wt'} )
    if (action === 'w'){
        cruise()
    } else{
        you.isAlive = false
    }
        
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
        while(enemy.hp > 0 && you.hp > 0){
            fight(Fed)
        }   
    }
}

function fight(Fed){
let random = Math.floor(Math.random()*4) +1
if (random === 2) {
    console.log ("you're a horrible shot!")
} else{
    enemy.hp -= you.attack()
    you.hp -= Fed.attack()
    copnsole.log(`${Fed.name} landed a shot in you. ${you.name}'s hp is now ${you.hp}. ${Fed.name}'s hp is now ${Fed.hp}`)
}
}
