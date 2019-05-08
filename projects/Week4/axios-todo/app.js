axios.get('https://api.vschool.io/David/todo/').then((response) => {
displayTodos(response.data)
})

function displayTodos(todos){
todos.forEach((todo)=>{
   let parentDiv = document.createElement('div')
   let titleh2 = document.createElement('h2')
   titleh2.innerText = todo.title
   parentDiv.appendChild(titleh2)
   document.getElementById('main').appendChild(parentDiv)

    })
}
