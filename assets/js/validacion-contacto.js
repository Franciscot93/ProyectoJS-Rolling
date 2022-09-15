const nombreContacto= document.getElementById('nombreContacto');
const emailContacto= document.getElementById('emailContacto');

const msgError=document.getElementById('msgErrorContacto');
const inputsContacto= document.querySelectorAll('#formContacto input ');
const formContacto= document.getElementById('formContacto');
const mensajeErrorFormContacto= document.getElementById('msgErrorFormContacto');


const camposContacto={
  nombreContacto:false,
  emailContacto:false,
  textoContacto:false,
}


const expresionesContacto = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, //letras y espacios, pueden llevar acentos.  
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  texto: /^[A-Za-z0-9]{5,1000}\.[A-Za-z0-9]{5,1000}$/
  
};






// if (expresionesContacto.nombre.test(nombreContacto.value) && nombreContacto!=='') {
//   document.getElementById('check-nombreContacto').classList.remove('')
// } else {
//   document
//     .getElementById(`mensajeError-checked`)
//     .classList.add("inputErrorDeFormulario-activo");
//   document
//     .getElementById(`checked-terminos`)
//     .classList.remove("form-group-correcto-activo");
//   camposDelFormulario.terminos = false;
// }
const validarFormularioContacto = (e) => {
  e.preventDefault();
  

  switch (e.target.name) {


    case "nombreContacto":
      validarInputContacto(
        expresionesContacto.nombre,
        e.target,
        "nombreContacto"
      );

      break;
    
    case "emailContacto":
      validarInputContacto(
        expresionesContacto.correo,
        e.target,
        "emailContacto"
      );
      break;
    
    case "textoContacto":
      validacionTextArea();
      break;}};



const validarInputContacto = (expresionesContacto, input, campo) => {

  
  if (
    expresionesContacto.test(input.value) &&
    input.value.trim() &&
    input.value !== ""
  ) {
    document
      .getElementById(`check-${campo}`)
      .classList.add("form-group-correcto-activo");
    document
      .getElementById(`mensajeError-${campo}`)
      .classList.remove("inputErrorDeFormulario-activo");
       camposContacto[`${campo}`] = true;
       return false;
    
  } else {
    document
      .getElementById(`mensajeError-${campo}`)
      .classList.add("inputErrorDeFormulario-activo");
    document
      .getElementById(`check-${campo}`)
      .classList.remove("form-group-correcto-activo");
       camposContacto[`${campo}`] = false;
       return true
    
    
  }
};
const textoContacto= document.getElementById('textoContacto');

const validacionTextArea=()=>{
   if(textoContacto.value===""){
    document
    .getElementById(`mensajeError-textoContacto`)
    .classList.add("inputErrorDeFormulario-activo");
  document
    .getElementById(`check-textoContacto`)
    .classList.remove("form-group-correcto-activo");
    camposContacto.textoContacto=false;
    return false;
   }else{
    document
    .getElementById(`check-textoContacto`)
    .classList.add("form-group-correcto-activo");
  document
    .getElementById(`mensajeError-textoContacto`)
    .classList.remove("inputErrorDeFormulario-activo");
    camposContacto.textoContacto=true;
    return true;
   }}
    





inputsContacto.forEach((input) => {
        input.addEventListener("submit", validarFormularioContacto);
        input.addEventListener("blur", validarFormularioContacto);
      });



     



    formContacto.addEventListener('submit', e=>{ 
      e.preventDefault()


      if((camposContacto.nombreContacto && camposContacto.emailContacto && camposContacto.textoContacto)){
       
       console.log(camposContacto);
              setTimeout(()=>{
        
                
             
        mensajeErrorFormContacto.innerHTML=`<p id="mensajeErrorDeForm" class="form-group-correcto-activo mt-3 mb-3">
        <i class="fa fa-exclamation-triangle"></i> procesando...
      </p>`
        
         },2000)

        setTimeout(()=>{
          mensajeErrorFormContacto.innerHTML=`<p id="mensajeErrorDeForm" class="inputExitoDeFormulario-activo mt-3 mb-3">
          <i class="fa fa-exclamation-triangle"></i> Mensaje enviado con éxito!
        </p>`
        },3000);
        setTimeout(()=>{
         formContacto.reset();
        },3500)


      }else{

        mensajeErrorFormContacto.innerHTML=`<p id="mensajeErrorDeForm" class="inputErrorDeFormulario-activo mt-3 mb-3">
        <i class="fa fa-exclamation-triangle"></i> Rellena los campos correctamente.
      </p>`
      console.log(camposContacto);
      }


    
    })
