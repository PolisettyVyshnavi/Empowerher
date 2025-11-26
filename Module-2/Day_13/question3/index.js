let interval=setInterval(()=>{
    console.log("Loading...")
},1000)
setTimeout(()=>{
    clearInterval(interval)
    console.log("Loaded Sucessfully!")
},5000)