function prime(num){
    if (num<=1){
        return false
    }
    for(let i=2;i<=Math.surt(num);i++){
        if(num % i==0){
            return false
        }
    }
    return true
}