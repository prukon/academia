let age = document.getElementById('age');
age.addEventListener('change', function () {
    console.log(showUser.apply(age, ['Snow', 'John'])) 
})

function showUser(surname, name) {   
    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}


