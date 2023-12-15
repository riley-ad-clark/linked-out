'use strict';

const options = {
    method: 'GET',
    mode: 'cors'
};

async function fetchUsers() {
    const URL = 'https://randomuser.me/api/?nat=CA&results=10&seed=same';

    try {
        const result = await fetch(URL, options);

        if (!result.ok) {
            throw new Error(`${result.statusText} (${result.status})`);
        }

        const usersData = await result.json();

        return usersData.results.map(user => ({
            name: `${user.name.first} ${user.name.last}`,
            picture: user.picture && user.picture.medium ? user.picture.medium : 'placeholder.jpg',
        }));
    } catch (error) {
        console.log(error.message);
        return [];
    }
}

function createUserElement(user) {
    const userDiv = document.createElement('div');
    userDiv.classList.add('person');
    userDiv.style.cssText = `
        display: flex;
        align-items: center;
        width: 350px;
        height: 75px;
        border-radius: 8px;
        margin: 2.5px 0px;
        background-color: var(--bg-second-lightest);
        padding: 0 10px;
        box-sizing: border-box;
        color: #eeecec;
    `;

    const profilePic = user.picture;

    const profilePicElement = document.createElement('img');
    profilePicElement.classList.add('peoplePic');
    profilePicElement.style.cssText = `
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 15px;
    `;
    profilePicElement.src = profilePic;
    profilePicElement.alt = 'Profile Picture';

    userDiv.appendChild(profilePicElement);

    const nameElement = document.createElement('p');
    nameElement.classList.add('peopleName');
    nameElement.textContent = user.name;
    nameElement.style.cssText = `
        line-height: 75px;
        margin: 0;
    `;
    userDiv.appendChild(nameElement);

    return userDiv;
}

async function getUsersAndDisplay() {
    const users = await fetchUsers();
    const peopleContainer = document.querySelector('.people');

    users.forEach(user => {
        const userElement = createUserElement(user);
        peopleContainer.appendChild(userElement);
    });
}

getUsersAndDisplay();