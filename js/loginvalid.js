function loginValid(){
    //authPass flag : true - can login, false - return error
    let authPass = false;

    //obtain user input
    const userName = document.querySelector("#username").value;
    const passWord = document.querySelector("#pwd").value;
   
    //compare user input with the user objects in the userList Array
    userList.forEach(user => {
        if (user.name == userName){
            if(user.accPWD == passWord)
                authPass = true;    // set Flag to true
        }
    });

    if (authPass){
        window.location = "item_form.html"; //allow access to item form page
    }
    else {
        clearInput(); //
        document.querySelector("#tryAgain").innerHTML=`Invalid username or password`; // display error when not authenticated

    }
}

//this function is to clear user input
function clearInput(){
    document.querySelector("#username").value = "";    
    document.querySelector("#pwd").value = "";  
}

// create 2 user object
const user1 = {
    name : "admin",
    accPWD : "nimda"
}

const user2 = {
    name : "g9",
    accPWD : "great"
}

//create a userList array
const userList = [];
//push the user objects into the userList array
userList.push(user1, user2);