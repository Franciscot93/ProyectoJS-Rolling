
const nombreDelUsuario= document.getElementById('inputNombreDeUsuario').value; 
const emailDelUsuario= document.getElementById('inputEmailDeUsuario').value; 
const telefonoDelUsuario= document.getElementById('inputPhoneDeUsuario').value; 
const passDelUsuario= document.getElementById('inputPassDeUsuario').value; 
const passDelUsuario2= document.getElementById('inputPass2DeUsuario').value; 
const mensajeErrorDeForm= document.getElementById('mensajeErrorDeForm'); 
const formulario= document.getElementById('formDeRegistro');
const inputs= document.querySelectorAll('#formDeRegistro input');
const btnRegistro= document.getElementById('btnRegistro').addEventListener('click',e=>validarFormularioDeRegistro(e)); 


const expresiones={
    
    nombre:/^[a-zA-ZÀ-ÿ\s]{1,40}$/, //letras y espacios, pueden llevar acentos.
    password:/^.{8,16}$/, //8 a 16 digitos
    correo:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono:/^\d{10,14}$/ // 10 a 14 numeros.

};
const camposDelFormulario={
    
    nombre:false,
    password:false,
    correo:false,
    telefono:false,
    terminos:false,
   

};







const validarFormularioDeRegistro=(e)=>{
    e.preventDefault();

    


    // mensajeErrorDeForm.innerHTML=`<p class="inputErrorDeFormulario-activo mt-3 mb-3"><i class="fas fa-triangle-exclamation inputErrorDeFormulario-activo "></i> DEBES COMPLETAR EL FORMULARIO.</p> `;
 
    
    
    
 
    switch(e.target.name){
    case "inputNombreDeUsuario":
        


    validarInputDeRegistro(expresiones.nombre, e.target, 'inputNombreDeUsuario');
     
    


    
    break;

    case "inputEmailDeUsuario":

        validarInputDeRegistro(expresiones.correo, e.target, 'inputEmailDeUsuario');


    

    break;
    // case "inputFechaDeNacimiento":
    //     (expresiones.fecha.test(e.target.value)) ?:;

    //     break;
     case "inputPhoneDeUsuario":

        validarInputDeRegistro(expresiones.telefono, e.target, 'inputPhoneDeUsuario');

    
     break;
     case "inputPassDeUsuario":
        validarInputDeRegistro(expresiones.password, e.target, 'inputPassDeUsuario');
        


     break;
     case "inputPass2DeUsuario":
        
        claveCorrecta();
        

    break;  

 };

}

const validarInputDeRegistro =(expresiones, input, campo)=>{    
   
     if ((expresiones.test(input.value)) && input.value !=='') {
        document.getElementById(`check-${campo}`).classList.add('form-group-correcto-activo');
        document.getElementById(`mensajeError-${campo}`).classList.remove('inputErrorDeFormulario-activo');
        camposDelFormulario[campo]=true; }
        else{
            document.getElementById(`mensajeError-${campo}`).classList.add('inputErrorDeFormulario-activo');
            document.getElementById(`check-${campo}`).classList.remove('form-group-correcto-activo');
            camposDelFormulario[campo]=false;
        }


}





   function claveCorrecta (){
    const inputPassword1 = document.getElementById('inputPassDeUsuario');
    const inputPassword2 = document.getElementById('inputPass2DeUsuario');
   
    
    if(inputPassword1.value !== inputPassword2.value && inputPassword1.value!==''){
        document.getElementById('mensajeError-inputPass2DeUsuario').classList.add('inputErrorDeFormulario-activo');
    document.getElementById('mensajeError-inputPass2DeUsuario').classList.remove('inputErrorDeFormulario');
    document.getElementById('check-inputPass2DeUsuario').classList.remove('form-group-correcto-activo');
    document.getElementById('check-inputPass2DeUsuario').classList.add('form-group-correcto');
    (camposDelFormulario['inputPassDeUsuario']=false) ;
        
        return false;
    } else {
        document.getElementById('mensajeError-inputPass2DeUsuario').classList.remove('inputErrorDeFormulario-activo');
    document.getElementById('mensajeError-inputPass2DeUsuario').classList.add('inputErrorDeFormulario');
    document.getElementById('check-inputPass2DeUsuario').classList.add('form-group-correcto-activo');
    document.getElementById('check-inputPass2DeUsuario').classList.remove('form-group-correcto');
    (camposDelFormulario['inputPassDeUsuario']=true) ;


        return true;
    }
    }








inputs.forEach((input)=>{
    input.addEventListener('keyup',validarFormularioDeRegistro);
    input.addEventListener('blur',validarFormularioDeRegistro);
    
})

const enviarFormulario=()=>{
    formulario.reset();
}
