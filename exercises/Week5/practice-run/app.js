
let disText = document.getElementById('btn');
// disText.className = 'text'
let yes = document.createElement('h1')
disText.addEventListener('onclick',function(e){
    console.log("hi")
    e.preventDefault()
    yes.innerText = "Your Mom"
    document.getElementById('btn').appendChild(yes)

})

