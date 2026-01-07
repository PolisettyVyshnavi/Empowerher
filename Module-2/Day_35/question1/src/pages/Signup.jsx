import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


const Signup = () => {
const { signup } = useAuth();
const navigate = useNavigate();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


const handleSubmit = async (e) => {
e.preventDefault();
await signup(email, password);
navigate("/todos");
};


return (
<form onSubmit={handleSubmit} className="p-6 max-w-sm mx-auto">
<input placeholder="Email" onChange={e => setEmail(e.target.value)} />
<input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
<button type="submit">Signup</button>
</form>
);
};


export default Signup;