// querySelector

const heading = document.querySelector(".header__texto h2"); // 0 to 1 Elements
heading.textContent = "New Heading";
console.log(heading);

// querySelectorAll

const links = document.querySelectorAll(".navegacion a");
links[0].textContent = "New Text";
links[0].classList.add("new-class");
links[0].classList.remove("new-class");

// getElementById

const heading2 = document.getElementById("heading");
console.log(heading2);

// Generate a new link

const newLink = document.createElement("A");

// Add the href

newLink.href = "new-link.html";

// Add the text

newLink.textContent = "On-line Shop";

// Add the class

newLink.classList.add("navegacion__enlace");

// Add it to the document

const navigation = document.querySelector(".navegacion");
navigation.appendChild(newLink);

console.log(newLink);

// Events

console.log(1);

window.addEventListener("load", function(){ // load waits until JS and all of the archives dependent of the HTML are ready
    console.log(2);
});

window.onload = function() {
    console.log(3);
};

document.addEventListener("DOMContentLoaded", function(){ // Only waits for the HTML, not for the CSS or the images
    console.log(4);
});

console.log(5);

window.onscroll = function() {
    console.log("Scrolling...");
};

// Select an element and give them an event

// const btnSend = document.querySelector(".boton--primario");
// btnSend.addEventListener("click", function(event) {
//     console.log(event);
//     event.preventDefault();

//     // Validate a form

//     console.log("sending form...");
// });

// Events of Inputs and Textarea

const data = {
    nombre: "",
    email: "",
    mensaje: ""
};

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const form = document.querySelector(".formulario");

nombre.addEventListener("input", readText);
email.addEventListener("input", readText);
mensaje.addEventListener("input", readText);

// Submit Event

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Validate Form

    const {nombre, email, mensaje} = data;

    if(nombre === "" || email === "" || mensaje === "") {
        showAlert("All the fields are required");
        return;
    };
    showAlert("The email has been sent");
    console.log("Sending Form...");
});

function readText(event) {
    data[event.target.id] = event.target.value;
    console.log(data);
};

// Show an alert in the screen

function showAlert(message, error = null) {
    const alert = document.createElement("P");
    alert.textContent = message;

    if(error) {
        alert.classList.add("error");
    } else {
        alert.classList.add("correcto");
    };

    form.appendChild(alert);

    // Disappear after 5 seconds

    setTimeout(() => {
        alert.remove
    }, 5000);
};