if(document.documentElement.classList.contains('js')){
const check = document.getElementById("check");
const password = document.querySelector(".senha");

function alterType() {
  if (check.checked) {
    password.setAttribute("type", "text");
  } else {
    password.setAttribute("type", "password");
  }
}

check.addEventListener("change", alterType);
}
