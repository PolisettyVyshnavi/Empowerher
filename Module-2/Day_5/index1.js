function signup(userName){
        let users=["Basakar","Naveen","Nani","Sneha"];
        if(users.includes(userName)){
            return "User Already Registered, Please Login";
        }
        else {
            users.push(userName)
                return "Signup Successful, please Login"
            }
}
    console.log(signup("Nani"))

function login(userName,password){
    let users=["Smita","Rohan","Jaanu","Harsha"]
    if(!users.includes(userName)){
        return "User Not found, Please Signin"
    }
    if(password=="Emp@123"){
        return "Login Successful"
    }
    else{
        return "Wrong Password"
    }
}
