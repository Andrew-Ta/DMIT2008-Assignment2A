const fileService = require("./fileService")


exports.auth = (credentials)=>{
    //grabs user input - inserts into a new array
    const {username, email, password} = {...credentials};
    let newUser = {username, email, password};

    const users = fileService.getFileContents("../data/users.json");
    
    //Validation bool
    let validated = true;
    let errorMsg = {nameWarning:"", emailWarning:"", passwordWarning:""};


    //VALIDATION
    if(username === ""){
        errorMsg.nameWarning ="enter a name";
        validated=false;
    }
    else{
        newUser.username = username;
    }
    if(email === ""){
        errorMsg.emailWarning ="enter an email";
        validated=false;
    }
    else{
        newUser.email = email;
    }

    if(password === ""){
        errorMsg.passwordWarning = "enter a password";
        validated=false;
    }
    else{
        newUser.password = password;
    }

    if(validated === true){
        console.log("test passed"); 
        console.log(newUser);
        console.log(users);  
        users.push(newUser);
        fileService.writeFileContents("../data/users.json", users);
        return newUser;

    }else{
        console.log("error test passed");
        return errorMsg;
    }
    
    

}
//test