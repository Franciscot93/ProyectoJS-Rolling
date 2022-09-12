const mensajeErrorDeForm = document.getElementById("mensajeErrorDeForm");
const formulario = document.getElementById("formDeRegistro");
const mensajeExito = document.getElementById("exito-formulario");
const terminosValidacion = document.getElementById("terminos").checked;
const inputs = document.querySelectorAll("#formDeRegistro input");
document.getElementById('btnRegistro').disabled = false;
const nombreDelUsuario = document.getElementById(
  "inputNombreDeUsuario"
);
const emailDelUsuario = document.getElementById("inputEmailDeUsuario");
const telefonoDelUsuario = document.getElementById(
  "inputPhoneDeUsuario"
);
const passDelUsuario = document.getElementById("inputPassDeUsuario");
const passDelUsuario2 = document.getElementById("inputPass2DeUsuario");

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


const cuentaAdministrador= {Usuario:'admin@admin', Password: 12345678};
localStorage.setItem( JSON.stringify(`${cuentaAdministrador.Usuario}`),JSON.stringify( `${cuentaAdministrador.Password}`));


const usuariosRegistrados = JSON.parse(localStorage.getItem([]));
let id = 0;

const validarFormularioDeRegistro = (e) => {
  e.preventDefault();
  

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
  
  
  
  }
;

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

 
const btnRegistro=document.getElementById('btnRegistro').addEventListener("click", () => registrarUsuario(nombreDelUsuario,emailDelUsuario,telefonoDelUsuario,passDelUsuario));



  function registrarUsuario(nombreDelUsuario,emailDelUsuario,telefonoDelUsuario,passDelUsuario) {
  
    
    if((
      camposDelFormulario.inputNombreDeUsuario &&
      camposDelFormulario.inputEmailDeUsuario &&
      camposDelFormulario.inputPass2DeUsuario &&
      camposDelFormulario.inputPassDeUsuario &&
      camposDelFormulario.inputPhoneDeUsuario &&
      camposDelFormulario.terminos
    )){

   

    id++;

    const nuevoUsuario = {
      ID: id,
      nombre: nombreDelUsuario.value,
      correo: emailDelUsuario.value,
      telefono: telefonoDelUsuario.value,
      pass: passDelUsuario.value,
    };

    if (
      camposDelFormulario.inputNombreDeUsuario &&
      camposDelFormulario.inputEmailDeUsuario &&
      camposDelFormulario.inputPass2DeUsuario &&
      camposDelFormulario.inputPassDeUsuario &&
      camposDelFormulario.inputPhoneDeUsuario &&
      camposDelFormulario.terminos
    ) {
      document.getElementById('btnRegistro').disabled = true;
      console.log("va bien");
      localStorage.setItem(JSON.stringify(`${nuevoUsuario.correo}`),JSON.stringify (`${nuevoUsuario.pass}`) );
    
      
      
      
    } else {
      e.preventDefault();
      
      
    }}else{e.preventDefault();
      formulario.reset()}
  }

inputs.forEach((input) => {
  input.addEventListener("submit", validarFormularioDeRegistro);
  input.addEventListener("blur", validarFormularioDeRegistro);
});

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
    
    document
      .getElementById("mensajeErrorDeForm")
      .classList.add("inputErrorDeFormulario-activo");
    document
      .getElementById("mensajeErrorDeForm")
      .classList.remove("inputErrorDeFormulario");
      formulario.reset()
  }
});
