const formElement = document.getElementById("saveUser");

formElement.addEventListener("submit", (event) => {
    //no hacer lo que hace el boton submit por default que es recargar la pagina
    event.preventDefault();
    //obtengo los valores del formulario y los guardo en variables
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    //creo un objeto usuario con los datos obtenidos del formulario
    let user = {name:name, password:password,  email:email};
    //convierto el objeto a JSON
    let userJson = JSON.stringify(user);
    //enviar los datos al backend
    //console.log(userJson);  
    fetch('http://localhost:3001/api/users',{
        method: 'Post',
        body: userJson
    })
})