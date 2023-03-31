console.log('Hola Mundo');

window.addEventListener('load', () => {
    const submitButton = document.querySelector('#submit');
    submitButton?.addEventListener('click', (event) => {
        event.preventDefault();
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;
        const telefono = document.querySelector('#telefono').value;

        if (name !== '' && email !== '' && message !== '' && telefono !== '') {
            // ok
            document.querySelector('#mensaje').classList.add('show-mensaje');
            document.querySelector('#user-name').innerHTML = name;
            document.querySelector('#user-email').innerHTML = email;
            document.querySelector('#user-telefono').innerHTML = telefono;
            document.querySelector('#user-message').innerHTML = message;
        } else {
            // error
            document.querySelector('#error').classList.add('show-error');
        }
    });

    document.querySelector('#get-user')?.addEventListener('click', getUser);
});

function getUser() {
    fetch('https://randomuser.me/api/')
        .then((data) => {
            return data.json();
        })
        .then((response) => {
            const userData = response.results[0].name;
            const foto =  response.results[0].picture.large;
            const userImg = document.querySelector('.user-img');
            userImg.setAttribute('src', foto);
            document.querySelector('#user-name').innerHTML = `${userData.title}. ${userData.first} ${userData.last}`;
        })
        .catch((error) =>{ 
            console.log('aja', error);
            document.querySelector('#error').classList.add('show-error');
        });
}