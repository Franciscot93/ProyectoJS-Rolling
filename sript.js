const movies =
    JSON.parse(localStorage.getItem('movies')) || [];

console.log(movies);

/* selecciono elementos */
const nuevaMoviebutton = document.getElementById('nuevamoviebutton')
.addEventListener("click", ()=> nuevaMovie()
);

const nuevaMovieCodigo = document.getElementById('codigo');
const nuevaMovieNombre = document.getElementById('nombre');
const nuevaMovieCategoria = document.getElementById('categoria');
const nuevaMovieDescripcion = document.getElementById('descripcion');
const nuevaMoviePublicado = document.getElementById('publicado');
const nuevaMovieModalMensaje = document.getElementById('modalMensaje')
const lista = document.getElementById('listadepeliculas')

const nuevaMovie = () => {   
   const movie = {
      codigo: nuevaMovieCodigo.value,
      nombre: nuevaMovieNombre.value,
      categoria: nuevaMovieCategoria.value,
      descripcion: nuevaMovieDescripcion.value,
      publicado: nuevaMoviePublicado.value,
   };

   movies.push(movie);
   localStorage.setItem('movies', 
   JSON.stringify(movies));

   nuevaMovieCodigo.value ="";
   nuevaMovieNombre.value ="";
   nuevaMovieCategoria.value ="";
   nuevaMovieDescripcion.value ="";
   nuevaMoviePublicado.value ="";

   nuevaMovieModalMensaje.innerHTML = 'Agregado!';
   actualizarLista();
}



const actualizarLista = () => {
    lista.innerHTML = '';
    console.log(movies);//recorro array para inyectar html tantas veces como productos

    movies.forEach(p => { //creo elemento que insertara al elemento padre

        const onemovie =
            document.createElement('div');
            onemovie.classList.add('row')
            console.log (onemovie);

            onemovie.innerHTML = `<div class="col"> <h3 > ${p.codigo}</h3> </div>
            <div class="col"> <h3> ${p.nombre}</h3> </div>
            <div class="col"> <h3> ${p.categoria}</h3> </div>
            <div class="col"> <h3> ${p.descripcion}</h3> </div>
            <div class="col"> <h3> ${p.publicado}</h3> </div>
            <div class="col"> 
              <button onclick= "delMovie(${p.codigo})"> <i class="fa-solid fa-trash"></i> </button>
              <button> <i class="fa-solid fa-pen-to-square"></i> </button>
              <button> <i class="fa-solid fa-star"></i> </button>
            </div>` ; 
            lista.appendChild(onemovie);
            const button = document
                .getElementById(`delMovie(${p.codigo})`)
                .addEventListener('click',() =>
                delMovie(p)
                );
    });
};

const delMovie = movie => {
    const index = movies.indexOf(movie);
    movies.splice(index,1);
    localStorage.setItem(
        'movies',
        JSON.stringify(movies)
    );
    actualizarLista();
}