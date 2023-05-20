document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;
  var successMessage = document.getElementById("success-message");

  if (name === "" || phone === "" || message === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  } else {
    successMessage.innerText = "Mensagem enviada com sucesso!";
    successMessage.style.display = "block";
  }
});