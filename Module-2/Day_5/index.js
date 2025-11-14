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
