import {useRef, useState} from "react";
function UseRefComponent() 
{
    // const inputRef=useRef();
    // const inputRef1=useRef();
    // const isFirst=useRef(true);
    // const Handle=()=>{
    //     if(!isFirst.current){
    //       inputRef.current.focus(null);  
    //     }
    //     else{
    //      inputRef1.current.focus(null);
    //     }
    //     isFirst.current=!isFirst.current;//true--false
    // }
    // return(
    //     <>
    //     <input ref={inputRef}></input>
        
    //     <input ref={inputRef1}></input><br /><br />
    //     <button onClick={Handle}>Display</button>
    //     </>
    // )

    //useRef()
    
    
    
    // let c=0;
    // const handle=()=>{
    //     c++;
    //     console.log("Count:",c);
    // }
    // return(
    //     <div>
    //          <button onClick={handle}>Click me</button>
    //     </div>
    // )

    const[text,setText]=useState("");
    let c=0;
    const handle=()=>{
        c++;
        console.log("Let",c)
    }
    return(
        <div>
            <input onChange={(e)=>setText(e.target.value)} />
            <button onClick={handle}>Click</button>
        </div>
    )
}
export default UseRefComponent;
