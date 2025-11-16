function prime(num){
    if (num<=1){
        return false
    }
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num % i==0){
            return false
        }
    }
    return true
}
<<<<<<< HEAD

=======
>>>>>>> 2601fb3d7984767b966257c8fa36779c51c529b6
function evenodd(num){
    if(num %2==0){
        return true
    }
    else{
        return false
    }
}
<<<<<<< HEAD
module.exports={prime, evenodd}
=======
>>>>>>> 2601fb3d7984767b966257c8fa36779c51c529b6
