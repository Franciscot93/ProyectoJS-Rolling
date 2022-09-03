const formulario= document.getElementById('formDeRegistro');
const inputs= document.querySelectorAll('#formDeRegistro input')


const expresiones={
    usuario:/^[a-zA-Z0-9\_\-]{4,16}$/, //letras,numeros,guion y guion_bajo.
    nombre:/^[a-zA-ZÀ-ÿ\s]{1,40}$/, //letras y espacios, pueden llevar acentos.
    password:/^.{4,12}$/, //4 a 12 digitos
    correo:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono:/^\d{7,14}$/ // 7 a 14 numeros.

}

const validarFormularioDeRegistro=(e)=>{
 switch(e.target.name){
    case "inputNombreDeUsuario":

    (expresiones.nombre.test(e.target.value)) ? document.getElementById('checkNombre').classList.add('activo') : document.getElementById('nombreCompleto').querySelector('p').classList.add('-activo');

    break;
    case "inputEmailDeUsuario":

    break;
    case "inputFechaDeNacimiento":

        break;
    case "inputPhoneDeUsuario":

    break;
    case "inputPassDeUsuario":

    break;
    case "inputPass2DeUsuario":

    break;

 };

}


inputs.forEach((input)=>{
    input.addEventListener('keyup',validarFormularioDeRegistro);
    input.addEventListener('blur',validarFormularioDeRegistro);
})

formulario.addEventListener('submit',(e)=>{
    e.preventDefault

})



