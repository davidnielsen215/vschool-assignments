let total = document.createElement('h2')
total.className = 'total'

let total2 = document.createElement('h3')
total2.className = 'total2'

document.addgoomba.addEventListener('submit', function(e){
    e.preventDefault()
    let firstInput = document.getElementById('goomtocoin').value
    const num = 5
    let result = parseInt(firstInput) * parseInt(num)
    
    total.textContent = 'Charge = ' + result
    document.getElementById('goombas').appendChild(total)
})

document.addbob.addEventListener('submit', function(e){
    e.preventDefault()
    let firstInput = document.getElementById('bobtocoin').value
    const num = 7
    let result = parseInt(firstInput) * parseInt(num)
    
    total.textContent = 'Charge = ' + result
    document.getElementById('bobombs').appendChild(total)
})
document.addcheep.addEventListener('submit', function(e){
    e.preventDefault()
    let firstInput = document.getElementById('cheeptocoin').value
    const num = 11
    let result = parseInt(firstInput) * parseInt(num)
    
    total.textContent = 'Charge = ' + result
    document.getElementById('cheeps').appendChild(total)
})
document.allcoins.addEventListener('submit', function(e){
    e.preventDefault()
    let firstResult = document.getElementById('goomtocoin').value
    let secondResult = document.getElementById('bobtocoin').value 
    let thirdResult = document.getElementById('cheeptocoin').value

    
    let result = parseInt(firstResult * 5) + parseInt(secondResult * 7) + parseInt(thirdResult * 11)
    
    total2.textContent = 'Total Coins = ' + result
    document.getElementById('totalcoin').appendChild(total2)
})