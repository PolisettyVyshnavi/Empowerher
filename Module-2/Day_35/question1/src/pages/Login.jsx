import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


const Login = () => {
const { login } = useAuth();
const navigate = useNavigate();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


const handleSubmit = async (e) => {
e.preventDefault();
await login(email, password);
navigate("/todos");
};


return (
<form onSubmit={handleSubmit} className="p-6 max-w-sm mx-auto">
<input placeholder="Email" onChange={e => setEmail(e.target.value)} />
<input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
<button type="submit">Login</button>
</form>
);
};


export default Login;