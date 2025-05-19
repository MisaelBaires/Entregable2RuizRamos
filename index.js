const $submit = document.getElementById("submit"),
  $contrasenha = document.getElementById("contrasenha"),
  $apellido = document.getElementById("apellido"),
  $nombre = document.getElementById("nombre"),
  $correo = document.getElementById("correo"),
  $visible = document.getElementById("visible");

document.addEventListener("change", (e) => {
    if(e.target === $visible){
      if($visible.checked === false) $contrasenha.type = "password";
      else $contrasenha.type = "text";
    }
});

document.addEventListener("click", (e)=> {
  if(e.target === $submit){
    if($contrasenha.value !== "" && $apellido.value !== "" && $correo.value !== "" && $nombre.value !== ""){
      e.preventDefault();
      window.location.href = "./pages/lobbyDeEspecias.html"
    }
  }
});