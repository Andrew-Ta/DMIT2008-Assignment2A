 async function getUsers(){

        let userRequest = await fetch ("/api/v1/users");
        let userResponse = await userRequest.json();
        let usersList = document.querySelector('.users-list');

        userResponse.forEach(user => {
            //template literal
            const template = `<li>User: ${user.username} Email: ${user.email}</li>`
            const elem = document.createRange().createContextualFragment(template).querySelector('li')

            //add template to dom
            usersList.appendChild(elem);
        })
        
    }
    // call the function
    getUsers();