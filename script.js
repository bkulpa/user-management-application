const userName = document.querySelector('[class*="input__name"]');
const userEmail = document.querySelector('[class*="input__email"]');
const userCity = document.querySelector('[class*="input__city"]');
const userStreet = document.querySelector('[class*="input__street"]');
const addButton = document.querySelectorAll('[class*="send"]');
const emptyMessage = document.querySelector('[class*="empty"]');
const usersList = document.querySelector('ol');
const newUserFormular = document.forms.newUserForm;
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

fetch(apiUrl)
    .then((response) => response.json())
    .then((response) => {
        userFromApi = response.map(user => {
            const mappedUsers = `${user.name}\n${user.email}\n${user.address.street}, ${user.address.city}`;
            const newUser = document.createElement('li');
            newUser.innerText = mappedUsers;
            usersList.append(newUser);
        });
    });

newUserFormular.addEventListener('submit', (event) => {
    event.preventDefault();
    const newUser = document.createElement('li');
    const userNameDescription = document.createElement("span");
    const userEmailDescription = document.createElement("span");
    const userCityDescription = document.createElement("span");
    const userStreetDescription = document.createElement("span");

    localStorage.setItem('valueFromUserName', `${userName.value}\n`);
    localStorage.setItem('valueFromUserEmail', `${userEmail.value}\n`);
    if (userCity.value) {
        localStorage.setItem('valueFromUserStreet', `${userStreet.value}, `);
    } else {
        localStorage.setItem('valueFromUserStreet', `${userStreet.value}`);
    }
    localStorage.setItem('valueFromUserCity', userCity.value);

    userNameDescription.innerText = window.localStorage.getItem('valueFromUserName');
    userEmailDescription.innerText = window.localStorage.getItem('valueFromUserEmail');
    userCityDescription.innerText = window.localStorage.getItem('valueFromUserCity');
    userStreetDescription.innerText = window.localStorage.getItem('valueFromUserStreet');

    if (userName.value) { newUser.append(userNameDescription); }
    if (userEmail.value) { newUser.append(userEmailDescription); }
    if (userStreet.value) { newUser.append(userStreetDescription); }
    if (userCity.value) { newUser.append(userCityDescription); }
    if (userName.value || userEmail.value || userCity.value || userStreet.value) {
        usersList.prepend(newUser);
        emptyMessage.innerText = '';
    } else {
        emptyMessage.innerText = 'All fields are empty\nPlease try agin!';
    }

    userName.value = '';
    userEmail.value = '';
    userCity.value = '';
    userStreet.value = '';
});