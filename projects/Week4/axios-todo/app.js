let form = document.addTodo
let todoList = []

axios.get('https://api.vschool.io/David/todo/').then((response) => {
        todoList = response.data
        displayTodos(response.data)
})



function displayTodos(todos){
    todos.forEach((todo)=>{
        let main = document.getElementById('main')
        let parentDiv = document.createElement('div')
        let titleh2 = document.createElement('h2')
        let descriptionh3 = document.createElement('h3')
        let priceP = document.createElement("p")
        let imgUrl = document.createElement("img")
        let deleteBtn = document.createElement("button")
        let checkBox = document.createElement("input")


        deleteBtn.innerText = "Delete"
        priceP.innerText = todo.price;
        descriptionh3.innerText = todo.description;
        titleh2.innerText = todo.title;
        imgUrl.src = todo.imgUrl;

       
        parentDiv.setAttribute("class", "todoBox")
        imgUrl.setAttribute("src", todo.imgUrl)
        checkBox.setAttribute("type", "checkBox")

        deleteBtn.addEventListener("click", function(){
            parentDiv.style.display = 'none';
            axios.delete(`https://api.vschool.io/David/todo/${todo._id}`);
        })

        checkBox.addEventListener("click", function(){
            checkTodo(todo)
            axios.put(`https://api.vschool.io/David/todo/${todo._id}`, {completed: true}).then(res => {
                todoList = res.data
            })

        })
        if (todo.completed){
            checkBox.checked = true
            parentDiv.style.textDecoration = "line-through"
        } else {
            parentDiv.style.textDecoration = "none"
        } 

      
        parentDiv.appendChild(titleh2)
        parentDiv.appendChild(descriptionh3)
        parentDiv.appendChild(priceP)
        parentDiv.appendChild(imgUrl)
        parentDiv.appendChild(deleteBtn)
        parentDiv.appendChild(checkBox)

        main.appendChild(parentDiv)
        
    })
}

const checkTodo = oldTodo => {
    axios.put(`https://api.vschool.io/David/todo/${oldTodo._id}`, {completed: !oldTodo.completed}).then((response) =>{
    const newList = todoList.map(todo => todo._id === oldTodo._id ? response.data : todo)
    displayTodos(newList, true)
    })
}

form.addEventListener('submit', function(e){
        e.preventDefault()

        let title = form.title.value
        let description = form.description.value
        let price = form.price.value
        let imgUrl = form.imgUrl.value

        let newObject = {
            title,
            description,
            price,
            imgUrl
        }
        postTodo(newObject)
})


const postTodo = (newTodo) => {
        axios.post('https://api.vschool.io/David/todo/', newTodo).then((response)=>{
            todoList.push(response.data);
            displayTodos([response.data]);
        })
}
