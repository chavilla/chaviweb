import Frame from "./formulario.js";

const frm = document.querySelector("#frm");
const campos = document.querySelectorAll(".campo");

let datos = {};

console.log('Hola');


//Events
function listener() {
  frm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const frame = new Frame(datos);
    frame.send();
  });

  //when the user change the inputs
  campos.forEach((campo) => {
    campo.addEventListener("change", onChange);
  });
}

//when a input is changed
function onChange(e) {
  datos = {
    ...datos,
    [e.target.name]: e.target.value,
  };
}

//execute functions
listener();
