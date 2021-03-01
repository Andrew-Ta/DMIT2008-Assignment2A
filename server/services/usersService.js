const fileService = require("./fileService")

exports.getUsers = () => {
    const users = fileService.getFileContents('../data/users.json');

    return users;
}