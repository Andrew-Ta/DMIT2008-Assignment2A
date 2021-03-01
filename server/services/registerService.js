const fileService = require("./fileService")
const { v4: uuidv4 } = require("uuid");

exports.auth = (credentials)=>{
    //grabs user input - inserts into a new array
    const {username, email, password} = {...credentials};
    
    
    let newUser = {username:username, email:email, email:password, id:uuidv4()};

    const users = fileService.getFileContents("../data/users.json");
    
    //Validation bool
    let errorMsg = {nameWarning:"", emailWarning:"", passwordWarning:""};

    let validated = true;
    let sameEmail = false;

    users.forEach(user => {
        if (user.email === email) {
            
            sameEmail = true;
        }
    });

    //VALIDATION
    if(username === ""){
        errorMsg.nameWarning ="enter a name";
        errorMsg.validated = false;
    }
    else{
        errorMsg.nameWarning ="";
        newUser.username = username;

    }
    if(email === ""){
        errorMsg.emailWarning ="enter an email";
        validated = false;
    }
    else if (sameEmail == true){
        errorMsg.emailWarning = "This email is already in use";
        validated = false;
    }
    else{
        newUser.email = email;
        errorMsg.emailWarning ="";

    }

    if(password === ""){
        errorMsg.passwordWarning = "enter a password";
        validated=false;
        
    }
    else{
        newUser.password = password;
        errorMsg.passwordWarning = "";

    }

    if(validated == true){

        console.log("test passed"); 
        console.log(newUser);
        console.log(errorMsg);  

        // users.push(newUser);
        
        fileService.writeFileContents("../data/users.json", newUser);

        return {validate:true, newUser};

    }else{
        
        console.log("error block");
        // console.log(newUser);
        // console.log(users);  
        // console.log(newUser.nameWarning);
        // console.log(errorMsg.nameWarning);
        return errorMsg;
    }
}
//test