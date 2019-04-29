let form = document.myForm

form.addEventListener('submit', function(e){
    e.precentDefault()

})
console.log(form.name.value)
document.getElementById('myName').innerText = form.name.value