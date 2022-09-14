

const emailLogin = document.getElementById("emailLogin");
const passwordLogin = document.getElementById("passwordLogin");
const btnLogin = document.getElementById("btnLogin");
const mensajeLogin = document.getElementById("msgLogin");

;
const formLogin = document
  .getElementById("formLogin")
  .addEventListener("submit", (e) => loginUser(e));

const loginUser = (e) => {
  e.preventDefault();

  const dataLocalStorage = localStorage.getItem('user');
const validarUserRegistrado=JSON.parse( dataLocalStorage);

if(emailLogin.value===''|| passwordLogin.value===''){
    mensajeLogin.classList.add('inputErrorDeFormulario-activo');
    mensajeLogin.classList.remove('msgLogin');
    mensajeLogin.innerHTML=`<p>Debes llenar los campos para loguear.</p>`
} else if(!validarUserRegistrado.find(user=>user.correo===emailLogin.value)){
    mensajeLogin.classList.add('inputErrorDeFormulario-activo');
    mensajeLogin.classList.remove('msgLogin');
    mensajeLogin.innerHTML=`<p>Validando datos ingresados.</p>`
    setTimeout(()=>{mensajeLogin.innerHTML=`<p>No existe una cuenta con esa cuenta de E-mail.</p>`},2000) 
    

}else if((validarUserRegistrado.find(user=>user.correo===emailLogin.value).pass!== passwordLogin.value)){
    console.log(emailLogin.value);
    console.log(passwordLogin.value);
    mensajeLogin.innerHTML=`<p>Validando datos ingresados.</p>`

    mensajeLogin.classList.add('inputErrorDeFormulario-activo');
    mensajeLogin.classList.remove('msgLogin');
    setTimeout(()=>{mensajeLogin.innerHTML=`<p>La contraseña es incorrecta</p>`;},2000) 

}else if((validarUserRegistrado.find(user=>user.correo===emailLogin.value).pass=== passwordLogin.value)){
    mensajeLogin.classList.add('inputExitoDeFormulario-activo');
    mensajeLogin.classList.remove('msgLogin');
    emailLogin.value='';
    passwordLogin.value='';
    
    mensajeLogin.innerHTML=`<p>Validando datos ingresados.</p>`
    setTimeout(() => {
        mensajeLogin.innerHTML=`<p>Conectando...</p>`
    }, 2000); 
    
    setTimeout(() => {
        window.location.href="/administracion.html"
    }, 4000); 
    
}


}
  