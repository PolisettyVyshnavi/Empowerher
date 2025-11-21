if (true){
    let x=10;
    var y=20
}
console.log(y);
console.log(x);

//output is 20 y will bw printed because var doesn't follow the rules of blocking so var can be printed, it can access the outside of the code and let is respect the block boundaries so it is not access the outside of the code//


const profile={
    user:{
        details:{
            email:"test@gmail.com"
        }
    }
}
console.log(profile.user.details.email)
console.log(profile.user.details.phone)


const user={
    name:"harsha",
    age:19,
    address:{
        city:"Vijayawada",
        Pin:490274
    }
}
console.log(user.address.street)