function signup(userName) {
    let users = ["pavan", "karthik", "sneha", "vyshnavi"]; // already registered users

    if (users.includes(userName)) {
        return "User Already Registered, Please Login";
    } else {
        users.push(userName);
        return "Signup Successful, Please Login";
    }
}