function createCounter(){
    let count=0
    function increment(){
        count++
        console.log("Increment count",count)
    }
    function decrement(){
        count--
        console.log("Decrement count",count)
    }
    return {increment,decrement}
}
const counter = createCounter();
counter.increment(); 
counter.increment();
counter.decrement(); 