let form = document.airline

form.addEventListener('submit', function(e){
    e.preventDefault()
    console.log('fired')
    console.log(form)
    let firstname = form.firstname.value
    let lastname = form.lastname.value
    let bday = form.bday.value
    let gender = form.gender.value

    const locations = form.location
    const locChoice =[]
    for(let i = 0; i < locations.length; i++){
        if(locations[i].checked){
            locChoice.push(location[i].value)
        }
    }
    const diet = form.diet
    const dietChoice = []
    for(let i = 0; i < diet.length; i++)
        if(diet[i].checked){
            dietChoice.push(diet[i].value)
        }
    
    alert(`
        first name: ${firstname}
        last name: ${lastname}
        birthday: ${bday}
        destination: ${locChoice}
        diet: ${dietChoice}
    `)
    })