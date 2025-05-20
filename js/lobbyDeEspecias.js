const header = document.querySelector("#header");

const contenedor = document.querySelector("#contenedor");
window.addEventListener("scroll", function () {
  if (contenedor.getBoundingClientRect().top < 10) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

//BOCETO PARA AGREGAR FUNCIÓN A LOS BOTONES

/*contenedor.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-agregar") || e.target.classList.contains("btn-disminuir")) {
    const index = e.target.dataset.index;
    const producto = productosData[index];
    const cantidadEl = e.target.parentElement.querySelector(".cantidad");

    if (e.target.classList.contains("btn-agregar")) {
      producto.cantidad++;
    } else if (e.target.classList.contains("btn-disminuir") && producto.cantidad > 0) {
      producto.cantidad--;
    }

    cantidadEl.textContent = producto.cantidad;
  }
});
*/

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

contenedor.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-agregar") || e.target.classList.contains("btn-disminuir")) {
    const index = e.target.dataset.index;
    const producto = productosData[index];
    const cantidadEl = e.target.parentElement.querySelector(".cantidad");

    if (e.target.classList.contains("btn-agregar")) {
      producto.cantidad++;
    } else if (e.target.classList.contains("btn-disminuir") && producto.cantidad > 0) {
      producto.cantidad--;
    }

    cantidadEl.textContent = producto.cantidad;
  }
});

document.querySelectorAll('.productos').forEach(producto => {
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
});