const header = document.querySelector("#header");

const contenedor = document.querySelector("#contenedor");
window.addEventListener("scroll", function () {
  if (contenedor.getBoundingClientRect().top < 10) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

/*document.querySelectorAll('.productos').forEach(producto => {
  const cantidadEl = producto.querySelector('.cantidad');
  const btnAgregar = producto.querySelectorAll('button')[0];
  const btnDisminuir = producto.querySelectorAll('button')[1];

  btnAgregar.addEventListener('click', () => {
    let cantidad = parseInt(cantidadEl.textContent);
    cantidad++;
    cantidadEl.textContent = cantidad;
  });

  btnDisminuir.addEventListener('click', () => {
    let cantidad = parseInt(cantidadEl.textContent);
    if (cantidad > 0) {
      cantidad--;
      cantidadEl.textContent = cantidad;
    }
  });
});*/

// Prueba del JSON

const productosData = [
  {
    nombre: "Pimienta",
    imagen: "../assets/images.jpg",
    cantidad: 1,
  },
  {
    nombre: "Sal",
    imagen: "../assets/_115784315_gettyimages-827818618.jpg",
    cantidad: 1,
  },
];

productosData.forEach((producto, index) => {
   const div = document.createElement("div");
   div.classList.add("productos");
   div.innerHTML = `
   <img src="${producto.imagen}" alt="${producto.nombre}"/>
   <div class="informacion">
    <p>${producto.nombre}</p>
    <p class="cantidad">${producto.cantidad}</p>
    <button class="btn-agregar" data-index="${index}" >Agregar</button>
    <button class="btn-disminuir" data-index="${index}" >Disminuir</button>
   </div>
   `;
   contenedor.appendChild(div);
});
