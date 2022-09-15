const movies = JSON.parse(localStorage.getItem("movies")) || [];
console.log(movies);
/* selecciono elementos */
const nuevaMoviebutton = document
  .getElementById("nuevamoviebutton")
  .addEventListener("click", () => nuevaMovie());
const nuevaMovieCodigo = document.getElementById("codigo");
const nuevaMovieNombre = document.getElementById("nombre");
const nuevaMovieCategoria = document.getElementById("categoria");
const nuevaMovieDescripcion = document.getElementById("descripcion");
const nuevaMoviePublicado = document.getElementById("publicado");
const nuevaMovieModalMensaje = document.getElementById("modalMensaje");
const lista = document.getElementById("listadepeliculas");

const nuevaMovie = () => {
  const movie = {
    codigo: nuevaMovieCodigo.value,
    nombre: nuevaMovieNombre.value,
    categoria: nuevaMovieCategoria.value,
    descripcion: nuevaMovieDescripcion.value,
    publicado: nuevaMoviePublicado.value,
  };
  movies.push(movie);
  localStorage.setItem("movies", JSON.stringify(movies));
  nuevaMovieCodigo.value = "";
  nuevaMovieNombre.value = "";
  nuevaMovieCategoria.value = "";
  nuevaMovieDescripcion.value = "";
  nuevaMoviePublicado.value = "";
  nuevaMovieModalMensaje.innerHTML = "Agregado!";
  actualizarLista();
  actualizarPAgina();
};

const actualizarPAgina = () => {
    
}

const actualizarLista = () => {
  lista.innerHTML = "";
  console.log(movies); //recorro array para inyectar html tantas veces como productos
  movies.forEach((p) => {
    //creo elemento que insertara al elemento padre
    const onemovie = document.createElement("div");
    onemovie.classList.add("row");
    console.log(onemovie);
    onemovie.innerHTML = `<div class="col"> <h3 > ${p.codigo}</h3> </div>
            <div class="col"> <h3> ${p.nombre}</h3> </div>
            <div class="col"> <h3> ${p.categoria}</h3> </div>
            <div class="col"> <h3> ${p.descripcion}</h3> </div>
            <div class="col"> <h3> ${p.publicado}</h3> </div>
            <div class="col">
              <button id= "delMovie(${p.codigo})"> <i class="fa-solid fa-trash"></i> </button>
              <button id= "editMovie(${p.codigo})" type="button" data-bs-toggle="modal" data-bs-target="#editModal"> <i class="fa-solid fa-pen-to-square"></i> </button>
              <button> <i class="fa-solid fa-star"></i> </button>
            </div>`;
    lista.appendChild(onemovie);
    const button = document
      .getElementById(`delMovie(${p.codigo})`)
      .addEventListener("click", () => delMovie(p));
    const button2 = document
      .getElementById(`editMovie(${p.codigo})`)
      .addEventListener("click", () => editMovie(p));
  });
};

const delMovie = (movie) => {
  const index = movies.indexOf(movie);
  movies.splice(index, 1);
  localStorage.setItem("movies", JSON.stringify(movies));
  actualizarLista();
};

//selecciono inputs de modal
const editMoviebutton = document
  .getElementById("editmoviebutton")
  .addEventListener("click", () => editMovie2());
const editCodigo = document.getElementById("editCodigo");
const editNombre = document.getElementById("editNombre");
const editCategoria = document.getElementById("editCategoria");
const editDescripcion = document.getElementById("editDescripcion");
const editPublicado = document.getElementById("editPublicado");
const editImagen = document.getElementById("editImagen");
//Edicion de pelicula
const editMovie = (movie) => {
  //completo modal
  editCodigo.value = movie.codigo;
  editNombre.value = movie.nombre;
  editCategoria.value = movie.categoria;
  editDescripcion.value = movie.descripcion;
  editPublicado.value = movie.publicado;
  editImagen.value = movie.imagen;
  //same as nuevamovie
};
const editMovie2 = () => {
  const movieEditada = {
    codigo: editCodigo.value,
    nombre: editNombre.value,
    categoria: editCategoria.value,
    descripcion: editDescripcion.value,
    publicado: editPublicado.value,
    imagen: editImagen.value,
  };
  movies.push(movieEditada);
  localStorage.setItem("movies", JSON.stringify(movies));
  delMovie(movies.find((m) => m.codigo === movieEditada.codigo));
  actualizarLista();
};
actualizarLista();
