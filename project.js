let loginBtn = document.getElementById("LoginButton");
let signupBtn = document.getElementById("SignUpButton");

let loginContainer = document.getElementById("LoginContainer");
let signupContainer = document.getElementById("SignUpContainer");



loginBtn.addEventListener("click", () => {
    loginContainer.innerHTML = `
        <h3>Login</h3>
        <input type="text" id="loginUsername" placeholder="Username">
        <input type="password" id="loginPassword" placeholder="Password">
        <button id="loginSubmit">Login</button>
    `;
});

// SIGNUP FORM
signupBtn.addEventListener("click", () => {
    loginContainer.innerHTML = "";
    signupContainer.innerHTML = `
        <h3>Signup</h3>
        <input type="text" id="signupUsername" placeholder="Username">
        <input type="password" id="signupPassword" placeholder="Password">
        <input type="number" id="signupPhone" placeholder="Phone">
        <button id="signupSubmit">Signup</button>
    `;
});

// SIGNUP LOGIC
document.addEventListener("click", (e) => {
    if (e.target.id === "signupSubmit") {
        let user = {
            username: document.getElementById("signupUsername").value,
            password: document.getElementById("signupPassword").value,
            phone: document.getElementById("signupPhone").value
        };

        if (!user.username || !user.password) {
            alert("All fields required");
            return;
        }

        localStorage.setItem("userData", JSON.stringify(user));
        alert("Signup successful! Now Login.");
    }
});

// LOGIN LOGIC
document.addEventListener("click", (e) => {
    if (e.target.id === "loginSubmit") {
        let enteredUser = document.getElementById("loginUsername").value;
        let enteredPass = document.getElementById("loginPassword").value;

        let savedUser = JSON.parse(localStorage.getItem("userData"));

        if (!savedUser) {
            alert("No user found. Please Signup first.");
            return;
        }

        if (enteredUser === savedUser.username && enteredPass === savedUser.password) {
            localStorage.setItem("loggedUser", savedUser.username);
            window.location.href = "homepage.html";
        } else {
            alert("Invalid credentials");
        }
    }
});









// let login = document.getElementById('LoginButton')
// let LoginContainer = document.getElementById('LoginContainer');

// let SignUp = document.getElementById('SignUpButton')
// let SignUpContainer = document.getElementById('SignUpContainer');


// document.addEventListener("click", function (e) {
//     if (e.target.id === "LoginContainerButton") {

//         let enteredUsername = document.getElementById("LoginUsername").value;
//         let enteredPassword = document.getElementById("LoginPassword").value;

//         let savedUser = JSON.parse(localStorage.getItem("userData"));

//         if (!savedUser) {
//             alert("No user found. Please SignUp first.");
//             return;
//         }

//         if (
//             enteredUsername === savedUser.username &&
//             enteredPassword === savedUser.password
//         ) {
//             localStorage.setItem("loggedUser", savedUser.username);
//             window.location.href = "homepage.html";
//         } else {
//             alert("Wrong username or password");
//         }
//     }
// });



// let SignUpObject = {};

// SignUp.addEventListener("click", () => {
//     SignUpContainer.innerHTML = `
//         <div id="SignUp">
//             <form id="SignUpForm">
//                 <input type="name" id="newUserName" placeholder="New UserName">
//                 <input type="password"  id="password" placeholder="password">
//                 <input type="number" id="PhoneNumber" placeholder="Phone-Number">
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     `;
//     SignUp.style.visibility = "hidden"    
//     login.innerHTML = `SignUp is in Process...`
//     login.style.height = "125px"
//     login.style.width = "145px"

//     document.getElementById("SignUpForm").addEventListener("submit", function (e) {
//     e.preventDefault();

//     let SignUpObject = {
//         username: document.getElementById("newUserName").value,
//         password: document.getElementById("password").value,
//         phone: document.getElementById("PhoneNumber").value
//     };

//     localStorage.setItem("userData", JSON.stringify(SignUpObject));

//     alert("Signup successful! Now Login.");
// });
// });


