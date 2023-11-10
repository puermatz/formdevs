const form = document.querySelector("#form");
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const jobSelect = document.querySelector('#job');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (event) =>{
  event.preventDefault();
  if(nameInput.value === ""){
    alert("Por favor, preencha o seu nome");
    return;
  }
  
  if(emailInput.value === "" || !isEmailValid(emailInput.value)){
    alert("Por favor, preencha o seu email");
    return;
  }
  if(!validatePassword(passwordInput.value, 8)){
    alert("A senha precisa ter no minimo 8 digitos");
    return;
  }
  if(jobSelect.value === ""){
    alert("Por favor, selecione a sua situação");
    return;
  }
  if(messageInput.value === ""){
    alert("Por Favor, escreva uma mensagem");
    return;
  }
  form.submit();
});
function isEmailValid(email) {
  const re = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  if(re.test(email)){
    return true;
  }
  return false;
}
function validatePassword (password,minDigits){
  if(password.length >= minDigits){
    return true;
  }
  return false;
}


