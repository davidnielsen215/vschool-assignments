var form = document.getElementById("airline-form");
var submit = document.getElementById("submit");
var query = document.querySelector;

form.addEventListener('submit', function(e){
    e.preventDefault()
    const firstName = form.elements["firstName"].value;
    const lastName = form.elements["lastName"].value;
    const age = form.elements["age"].value;
    const gender = form.elements["gender"].value;
    const location = form.elements["travel-location"].value;
    const diet = []

    if (form.elements['vegan'].checked) {
        diet.push(document.getElementById("vegan").value);
    }
    if (form.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form.elements['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
    }

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
})


