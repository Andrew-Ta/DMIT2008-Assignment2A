const fileService = require("./fileService")

exports.getUsers = () => {

    let usersArray = [];

    let users = fileService.getFileContents('../data/users.json');
    users.forEach((user) => {
        let userObj = {username:user.username, email:user.email}
        usersArray.push(userObj);
    })

    return usersArray;
}