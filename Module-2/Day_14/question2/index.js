function timer(duration,onComplete){
    setTimeout(()=>{
        console.log(`Timer of ${duration} ms finished`)
    },duration)
}
timer(3000,(message)=>{
    console.log(message)
})