const formulario= document.getElementById('formDeRegistro');
const inputs= document.querySelectorAll('#formDeRegistro input')


const expresiones={
    usuario:/^[a-zA-Z0-9\_\-]{4,16}$/, //letras,numeros,guion y guion_bajo.
    nombre:/^[a-zA-ZÀ-ÿ\s]{1,40}$/, //letras y espacios, pueden llevar acentos.
    password:/^.{8,16}$/, //8 a 16 digitos
    correo:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono:/^\d{10,14}$/ // 10 a 14 numeros.

}

const validarFormularioDeRegistro=(e)=>{
 
    
    
    
 
    switch(e.target.name){
    case "inputNombreDeUsuario":
        const iconoCheck= document.getElementById('checkNombre').classList.add('form-group-correcto-activo');
  
        const mensajeErrorValidacion= document.getElementById('mensajeErrorNombreUsuario').classList.add('inputErrorDeFormulario-activo');

    (expresiones.nombre.test(e.target.value)) ? ((iconoCheck)(document.getElementById('mensajeErrorNombreUsuario').classList.remove('inputErrorDeFormulario-activo'))) : (mensajeErrorValidacion)(document.getElementById('checkNombre').classList.remove('form-group-correcto-activo'));

    break;

    case "inputEmailDeUsuario":
        const iconoEmail= document.getElementById('checkNombre1').classList.add('form-group-correcto-activo');
        const mensajeErrorEmailValidacion= document.getElementById('mensajeErrorEmailUsuario').classList.add('inputErrorDeFormulario-activo');
       (expresiones.correo.test(e.target.value)) ? ((iconoEmail)(document.getElementById('mensajeErrorEmailUsuario').classList.remove('inputErrorDeFormulario-activo'))) :( (mensajeErrorEmailValidacion)(document.getElementById('checkNombre1').classList.remove('form-group-correcto-activo')));

    break;
    // case "inputFechaDeNacimiento":
    //     (expresiones.fecha.test(e.target.value)) ?:;

    //     break;
     case "inputPhoneDeUsuario":
        const iconoTelefono= document.getElementById('checkNombre2').classList.add('form-group-correcto-activo');
        const mensajeErrorTelefonoValidacion= document.getElementById('mensajeErrorTelefonoUsuario').classList.add('inputErrorDeFormulario-activo');

       (expresiones.telefono.test(e.target.value)) ? ((iconoTelefono)(document.getElementById('mensajeErrorTelefonoUsuario').classList.remove('inputErrorDeFormulario-activo'))) : ( (mensajeErrorTelefonoValidacion)(document.getElementById('checkNombre2').classList.remove('form-group-correcto-activo')));

     break;
     case "inputPassDeUsuario":
        const iconoPass= document.getElementById('checkNombre3').classList.add('form-group-correcto-activo');
        const mensajeErrorPassValidacion= document.getElementById('mensajeErrorPassUsuario').classList.add('inputErrorDeFormulario-activo');
        (expresiones.password.test(e.target.value)) ?((iconoPass)(document.getElementById('mensajeErrorPassUsuario').classList.remove('inputErrorDeFormulario-activo'))) : ( (mensajeErrorPassValidacion)(document.getElementById('checkNombre3').classList.remove('form-group-correcto-activo')));


     break;
    // case "inputPass2DeUsuario":

    // break;

 };

}


inputs.forEach((input)=>{
    input.addEventListener('keyup',validarFormularioDeRegistro);
    input.addEventListener('blur',validarFormularioDeRegistro);
})

formulario.addEventListener('submit',(e)=>{
    e.preventDefault

})



