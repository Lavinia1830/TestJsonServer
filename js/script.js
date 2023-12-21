const url = 'http://localhost:3000/';

//funzione per il click al bottone registrati
document.addEventListener('DOMContentLoaded', () => {

    let btnRegistrazione = document.querySelector('#registrazione');
    let btnLogin = document.querySelector('#login');

    if(btnRegistrazione){
        btnRegistrazione.addEventListener('click', singUp);
    } else if (btnLogin){
        btnLogin.addEventListener('click', login)
    }


    /* document.querySelector('#registrazione').addEventListener('click', () => {
        singUp();
    })  forma contratta*/ 
})

//Funzione per vedere nella console gli oggetti 
const getAll = () => {
    fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
}
getAll();



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
    fetch(url + 'users', {
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



function login (){
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    let obj = {
        email: email,
        password: password
    }
    fetch(url + 'login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(obj)})
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err));
}
