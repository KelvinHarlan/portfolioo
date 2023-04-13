const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        message: messageInput.value
    };

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://kelvinharlan.github.io/portfolioo/enviar.php');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(formData));

    form.reset();
    alert('Sua mensagem foi enviada com sucesso!');
});