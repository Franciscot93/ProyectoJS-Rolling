const mensajeErrorDeForm = document.getElementById("mensajeErrorDeForm");
const formulario = document.getElementById("formDeRegistro");
const mensajeExito = document.getElementById("exito-formulario");
const terminosValidacion = document.getElementById("terminos").checked;
const inputs = document.querySelectorAll("#formDeRegistro input");

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

const usuariosRegistrados = [];
let id = 0;

const validarFormularioDeRegistro = (e) => {
  e.preventDefault();
  const nombreDelUsuario = document.getElementById(
    "inputNombreDeUsuario"
  ).value;
  const emailDelUsuario = document.getElementById("inputEmailDeUsuario").value;
  const telefonoDelUsuario = document.getElementById(
    "inputPhoneDeUsuario"
  ).value;
  const passDelUsuario = document.getElementById("inputPassDeUsuario").value;
  const passDelUsuario2 = document.getElementById("inputPass2DeUsuario").value;

  switch (e.target.name) {
    case "inputNombreDeUsuario":
      validarInputDeRegistro(
        expresiones.nombre,
        e.target,
        "inputNombreDeUsuario"
      );

      break;

    case "inputEmailDeUsuario":
      validarInputDeRegistro(
        expresiones.correo,
        e.target,
        "inputEmailDeUsuario"
      );

      break;

    case "inputPhoneDeUsuario":
      validarInputDeRegistro(
        expresiones.telefono,
        e.target,
        "inputPhoneDeUsuario"
      );

      break;
    case "inputPassDeUsuario":
      validarInputDeRegistro(
        expresiones.password,
        e.target,
        "inputPassDeUsuario"
      );

      break;
    case "inputPass2DeUsuario":
      claveCorrecta();

      break;

    case "terminos":
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
      break;
  }

  const btnRegistro = document
    .getElementById("btnRegistro")
    .addEventListener("click", (e) => {
      registrarUsuario(e);
    });

  function registrarUsuario(e) {
    e.preventDefault;

    id++;

    const nuevoUsuario = {
      ID: id,
      nombre: nombreDelUsuario,
      correo: emailDelUsuario,
      telefono: telefonoDelUsuario,
      pass: passDelUsuario,
    };

    if (
      camposDelFormulario.inputNombreDeUsuario &&
      camposDelFormulario.inputEmailDeUsuario &&
      camposDelFormulario.inputPass2DeUsuario &&
      camposDelFormulario.inputPassDeUsuario &&
      camposDelFormulario.inputPhoneDeUsuario &&
      camposDelFormulario.terminos
    ) {
      console.log("va bien");
      console.log(nuevoUsuario);
    } else {
      console.log("va mal");
      console.log(nuevoUsuario);
    }
  }
};

const validarInputDeRegistro = (expresiones, input, campo) => {
  if (
    expresiones.test(input.value) &&
    input.value.trim() &&
    input.value !== ""
  ) {
    document
      .getElementById(`check-${campo}`)
      .classList.add("form-group-correcto-activo");
    document
      .getElementById(`mensajeError-${campo}`)
      .classList.remove("inputErrorDeFormulario-activo");
    camposDelFormulario[`${campo}`] = true;
  } else {
    document
      .getElementById(`mensajeError-${campo}`)
      .classList.add("inputErrorDeFormulario-activo");
    document
      .getElementById(`check-${campo}`)
      .classList.remove("form-group-correcto-activo");
    camposDelFormulario[`${campo}`] = false;
  }
};

function claveCorrecta() {
  const inputPassword1 = document.getElementById("inputPassDeUsuario");
  const inputPassword2 = document.getElementById("inputPass2DeUsuario");

  if (inputPassword1.value == inputPassword2.value) {
    document
      .getElementById("mensajeError-inputPass2DeUsuario")
      .classList.remove("inputErrorDeFormulario-activo");
    document
      .getElementById("mensajeError-inputPass2DeUsuario")
      .classList.add("inputErrorDeFormulario");
    document
      .getElementById("check-inputPass2DeUsuario")
      .classList.add("form-group-correcto-activo");
    document
      .getElementById("check-inputPass2DeUsuario")
      .classList.remove("form-group-correcto");
    camposDelFormulario["inputPass2DeUsuario"] = true;

    return true;
  } else {
    document
      .getElementById("mensajeError-inputPass2DeUsuario")
      .classList.add("inputErrorDeFormulario-activo");
    document
      .getElementById("mensajeError-inputPass2DeUsuario")
      .classList.remove("inputErrorDeFormulario");
    document
      .getElementById("check-inputPass2DeUsuario")
      .classList.remove("form-group-correcto-activo");
    document
      .getElementById("check-inputPass2DeUsuario")
      .classList.add("form-group-correcto");
    camposDelFormulario["inputPass2DeUsuario"] = false;

    return false;
  }
}

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormularioDeRegistro);
  input.addEventListener("blur", validarFormularioDeRegistro);
});

const enviarFormulario = () => {};
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    camposDelFormulario.inputNombreDeUsuario &&
    camposDelFormulario.inputEmailDeUsuario &&
    camposDelFormulario.inputPass2DeUsuario &&
    camposDelFormulario.inputPassDeUsuario &&
    camposDelFormulario.inputPhoneDeUsuario &&
    camposDelFormulario.terminos
  ) {
    document
      .getElementById("mensajeErrorDeForm")
      .classList.remove("inputErrorDeFormulario-activo");
    document
      .getElementById("mensajeErrorDeForm")
      .classList.add("inputErrorDeFormulario");
    document
      .getElementById("check-inputPass2DeUsuario")
      .classList.remove("form-group-correcto-activo");
    document
      .getElementById("check-inputPass2DeUsuario")
      .classList.add("form-group-correcto");

    document
      .getElementById("exito-formulario")
      .classList.add("inputExitoDeFormulario-activo");
    setTimeout(() => {
      document
        .getElementById("exito-formulario")
        .classList.remove("inputExitoDeFormulario-activo");
      formulario.reset();
    }, 4000);

    document.querySelectorAll(".form-group-correcto-activo").forEach((i) => {
      i.classList.remove("form-group-correcto-activo");
    });
  } else {
    console.log(camposDelFormulario);
    document
      .getElementById("mensajeErrorDeForm")
      .classList.add("inputErrorDeFormulario-activo");
    document
      .getElementById("mensajeErrorDeForm")
      .classList.remove("inputErrorDeFormulario");
  }
});
