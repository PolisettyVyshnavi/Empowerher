import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
const todoService = {
getTodos: (uid) => getDocs(collection(db, "users", uid, "todos")),
addTodo: (uid, todo) => addDoc(collection(db, "users", uid, "todos"), todo),
updateTodo: (uid, id, data) => updateDoc(doc(db, "users", uid, "todos", id), data),
deleteTodo: (uid, id) => deleteDoc(doc(db, "users", uid, "todos", id)),
};
export default todoService;