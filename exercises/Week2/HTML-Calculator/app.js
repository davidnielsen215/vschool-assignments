
let total = document.createElement('h1')
total.className = 'total'
    
document.addition.addEventListener('submit', function(e) {
    e.preventDefault()
    let firstInput = document.getElementById('add1').value
    let secondInput = document.getElementById('add2').value

    let result = parseInt(firstInput) + parseInt(secondInput)
    total.textContent = 'total = ' + result
    document.getElementById('add').appendChild(total)


})

document.subtraction.addEventListener('submit', function(e) {
    e.preventDefault()
    let firstInput = document.getElementById('sub1').value
    let secondInput = document.getElementById('sub2').value

    let result = parseInt(firstInput) - parseInt(secondInput)
    total.textContent = 'total = ' + result
    document.getElementById('subtract').appendChild(total)


})
document.multiplication.addEventListener('submit', function(e) {
    e.preventDefault()
    let firstInput = document.getElementById('mul1').value
    let secondInput = document.getElementById('mul2').value

    let result = parseInt(firstInput) * parseInt(secondInput)
    total.textContent = 'total = ' + result
    document.getElementById('multiply').appendChild(total)
    
})