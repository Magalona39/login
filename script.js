// let username = "admin";
// let password = "javascript123";

// let usernameInput = document.getElementById("username");
// let passwordInput = document.getElementById("password");
// let loginButton = document.getElementById("loginButton");
// let message = document.getElementById("message");


// loginButton.addEventListener("click", function () {

//     let logUser = usernameInput.value;
//     let logPass = passwordInput.value;


//     if (logUser === "" && logPass === "") {
//         message.textContent = "Please input Username and Password";

//     } else if (logUser === "") {
//         message.textContent = "Please input Username";

//     } else if (logPass === "") {
//         message.textContent = "Please input Password";

//     } else if (logUser === username && logPass === password) {
//         message.textContent = "Login successfully!";

//     } else if (logUser !== username && logPass === password) {
//         message.textContent = "Invalid Username";

//     } else if (logUser === username && logPass !== password) {
//         message.textContent = "Invalid Password";

//     } else {
//         message.textContent = "Invalid Username and Password. Please try again...";
//     }

// });


// =================================== my version =========


let username = "admin";
let password = "Boyka39";

let userNameInput = document.querySelector("#username");
let passwordInput = document.querySelector("#password");
let loginButton = document.querySelector("#loginButton");
let message = document.querySelector("#message");





function login (){

     let userName = userNameInput.value;
     let userPass = passwordInput.value;

    if (userName === "" && userPass === ""){
        message.textContent = "Please input username and password";
        message.style.color = "red";
    }

    else if (userName === "" ){
        message.textContent = "Please input username";
        message.style.color = "red";
    }

    else if (userPass === ""){
        message.textContent = "Please input password";
        message.style.color = "red";
    }

    else if (userName !== username && userPass === password){
        message.textContent = "invalid username";
        message.style.color = "red";
    }

    else if (userPass !== password && userName === username){
        message.textContent = "Wrong password, please try again..."
        message.style.color = "red"
    }

    else if (userName === username && userPass === password){
        message.textContent = "Login Successfully";
        message.style.color = "green";
    }

    else {
        message.textContent = "Invalid username and password, Please try again...";
        message.style.color = "red";
    }
}
    
loginButton.addEventListener("click", login);


document.addEventListener("keydown", function (event){

    if (event.key === 'Enter'){
        login ();
    }
});
