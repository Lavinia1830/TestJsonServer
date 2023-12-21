const url = 'http://localhost:3000/users/';

//funzione per il click al bottone registrati
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#registrazione').addEventListener('click', () => {
        singUp();
    })
})

//Funzione per la registrazione
function singUp (){
    let name = document.querySelector('#name').value;
    let lastName = document.querySelector('#lastName').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    let obj = {
        name: name,
        lastName: lastName,
        email: email,
        password: password
    }
    fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(obj)})
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err));
}


//questa costante fa si che la password viene criptata 
const update = (id) => {
    getById(id).then(obj => {
        obj.password = 'password';
        console.log(obj.id)
        fetch(url + id, {
            method: 'PUT', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(obj)})
            .then(response => response.json())
            
    })
}
