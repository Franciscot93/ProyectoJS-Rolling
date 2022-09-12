

const emailLogin = document.getElementById("emailLogin");
const passwordLogin = document.getElementById("passwordLogin");
const btnLogin = document.getElementById("btnLogin");
const mensajeLogin = document.getElementById("msgLogin");


const formLogin = document
  .getElementById("formLogin")
  .addEventListener("submit", (e) => loginUser(e));

const loginUser = (e) => {
  e.preventDefault();

  const validarUsuarioReg = JSON.parse(usuariosRegistrados);}

  