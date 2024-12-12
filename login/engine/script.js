if (document.documentElement.classList.contains('js')) {
  const check = document.getElementById("check");
  const passwordLogin = document.querySelector(".senhaLogin");
  const passwordSignUp = document.querySelector(".senhaSignUp");
  const emailSignUp = document.querySelector(".emailSignUp");
  const mailLogin = document.querySelector(".emailLogin");
  const signUpButton = document.querySelector(".sign-btn");
  const loginButton = document.querySelector(".login-btn");


  function alterType() {
    if (check.checked) {
      if (passwordLogin) passwordLogin.setAttribute("type", "text");
      if (passwordSignUp) passwordSignUp.setAttribute("type", "text");
    } else {
      if (passwordLogin) passwordLogin.setAttribute("type", "password");
      if (passwordSignUp) passwordSignUp.setAttribute("type", "password");
    }
  }

  if (check) check.addEventListener("change", alterType);

  if (signUpButton) {
    signUpButton.addEventListener("click", function () {
      if (emailSignUp.value && passwordSignUp.value) {
        localStorage.setItem("mailValue", emailSignUp.value);
        localStorage.setItem("passwordValue", passwordSignUp.value);
        console.log("Cadastro feito: ", emailSignUp.value, passwordSignUp.value);
        alert("Cadastro realizado com sucesso!");
        window.location.href = "../login/login.html";
      } else {
        alert("Por favor, preencha todos os campos.");
      }
    });
  }

  if (loginButton) {
    loginButton.addEventListener("click", function () {
      const storedMail = localStorage.getItem("mailValue");
      const storedPassword = localStorage.getItem("passwordValue");

      console.log("Login tentativa: ", mailLogin.value, passwordLogin.value);
      console.log("Credenciais armazenadas: ", storedMail, storedPassword);

      if (mailLogin.value === storedMail && passwordLogin.value === storedPassword) {
        alert("Login bem-sucedido!");
        window.location.href = "../catalog/catalog.html"; 
      } else {
        alert("Email ou senha incorretos.");
      }
    });
  }
}
