document.getElementById('button').addEventListener("mouseover", function(){
    this.style.backgroundColor = 'blue'
})
document.getElementById('button').addEventListener("mouseleave", function(){
    this.style.backgroundColor = 'white'
})
document.getElementById('button').addEventListener("mousedown", function(){
    this.style.backgroundColor = 'red'
})
document.getElementById('button').addEventListener("mouseup", function(){
    this.style.backgroundColor = 'yellow'
})
document.getElementById('button').addEventListener("dblclick", function(){
    this.style.backgroundColor = 'green'
})
window.addEventListener('scroll', function(){
    document.getElementById('button').style.backgroundColor = 'orange'
})