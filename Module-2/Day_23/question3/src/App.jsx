import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard";
import ProtectRoute from "./ProtectRoute";
import {Link} from "react-router-dom"
function App(){

    return (
        <BrowserRouter>
        <nav>
            <li>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/dashboard">Dashboard</Link>

            </li>
        </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/dashboard" element={
                    <ProtectRoute>
                        <Dashboard/>
                        </ProtectRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}
export default App;