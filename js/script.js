//menu hamburguer
const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("ativo");
  const active = nav.classList.contains("ativo");
  event.currentTarget.setAttribute("aria-expanded", "true");
  if (active) {
    event.currentTarget.setAttribute("aria-label", "fechar menu");
  } else event.currentTarget.setAttribute("aria-label", "abrir menu");
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

//menu ativo
const links = document.querySelectorAll('#menu a')
function ativarLink(link){
  const url =  location.href;
  const href = link.href;

  url.includes(href)
  if(url.includes(href)){
link.classList.add('link-ativo')
  }
}

links.forEach(ativarLink)