function signup(userName) {
    let users = ["pavan", "karthik", "sneha", "vyshnavi"]; // already registered users

    if (users.includes(userName)) {
        return "User Already Registered, Please Login";
    } else {
        users.push(userName);
        return "Signup Successful, Please Login";
    }
}

function login(userName, password) {
    let users = ["john", "vyshu", "teja", "sneha", "mani"];

    if (users.includes(userName)) {
        if (password === "Emp@123") {
            return "Login Successful...";
        } else {
            return "Wrong Password....";
        }
    } else {
        return "User Not Found, Please Signup";
    }
}