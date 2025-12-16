// import { useState } from "react";
// function Toapp(){
//     const [tasks,setTasks]=useState(["tea","breakfast","lunch"]);
//     const [newTask,setNewTask]=useState("")
//     function handleinputChange(event){
//         setNewTask(event.target.value);
//     }
//     function addTask(){
    
//     }
//     function deleteTask(index){

//     }
//     return (
//         <div className="to-do-list">
//             <h1>To-Do List</h1>
//             <div>
//                 <input type="text" placeholder="Enter a task......"
//                 value={newTask}
//                 onChange={handleinputChange}/>
//                 <button className="add-button" onClick={addTask}>Add</button>
//             </div>
//             <ol>
//                 {tasks.map((task,index)=>(
//                     <li key={index}>
//                         <span className="text">{task}</span>
//                         <button>Delete</button>
//                     </li>
//                 ))}
//             </ol>
//         </div>

//     )
// }
// export default Toapp;