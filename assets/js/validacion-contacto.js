


const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, //letras y espacios, pueden llevar acentos.
  password: /^.{8,16}$/, //8 a 16 digitos
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{10,14}$/, // 10 a 14 numeros.
};
const camposDelFormulario = {
  inputNombreDeUsuario: false,
  inputEmailDeUsuario: false,
  inputPhoneDeUsuario: false,
  inputPassDeUsuario: false,
  inputPass2DeUsuario: false,
  terminos: false,
};

if (!terminosValidacion.checked) {
  document
    .getElementById(`checked-terminos`)
    .classList.add("form-group-correcto-activo");
  document
    .getElementById(`mensajeError-checked`)
    .classList.remove("inputErrorDeFormulario-activo");
  camposDelFormulario.terminos = true;
} else {
  document
    .getElementById(`mensajeError-checked`)
    .classList.add("inputErrorDeFormulario-activo");
  document
    .getElementById(`checked-terminos`)
    .classList.remove("form-group-correcto-activo");
  camposDelFormulario.terminos = false;
}