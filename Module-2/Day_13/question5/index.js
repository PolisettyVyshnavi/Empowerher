const readline=require("readline")
const read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
read.question("Enter number of seconds to count down: ",(answer)=>{
    let timeLeft=parseInt(answer)
    if (isNaN(timeLeft)||timeLeft<=0){
        console.log("Please enter a valid positive number")
        read.close();
        return
    }
    console.log(`starting countdown from ${timeLeft} seconds`)
    let intervalId=setInterval(()=>{
        console.log(`Remaining time:${timeLeft} seconds`)
    timeLeft--
    if (timeLeft<0){
        clearInterval(intervalId)
        console.log("Count Complete!")
        read.close()
    }
},1000)
setTimeout(()=>{
    console.log('Press "s" to stop the countdown early')
    read.on("Line",(input)=>{
        if(input.trim().toLowerCase()==="s"){
            clearInterval(intervalId)
            console.log("Countdown stopped by user")
            read.close()
        }
    })
},500)
})