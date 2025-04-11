function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-msg");
  
    // Validação simples
    if (username === "" && password === "1234") {
      errorMsg.style.color = "green";
      errorMsg.innerText = "Login bem-sucedido!";
      // Aqui você poderia redirecionar o usuário, por exemplo:
      // window.location.href = "dashboard.html";
    } else {
      errorMsg.style.color = "red";
      errorMsg.innerText = "Usuário ou senha inválidos.";
    }
  }
  