import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login =() => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {login} = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        const role = login (email, password);
        if(!role) {
            alert("Invalid credentials");
            return;
        }
        role== "admin"
        ? navigate("/admin/dashboard")
        : navigate("/customers/dashboard");
    };

    return (
        <div>
            <h2>Login</h2>
            <input placeholder="Email" onChange={(e) => 
                setEmail(e.target.value)
            } />
            <input type="password" 
            placeholder="Password"
            onChange={(e)=> setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;