import React, { useState } from "react";
// import { Navbar,Nav,NavDropdown} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Logsign.css';
import axios from "../../axios";
import setAuthToken from "../../utils/setAuthToken";


function Login() {
    const input = {
        username: "",
        password: ""
    }
    const [isLoginAuth, setisLoginAuth] = useState(false);
    const [login, setLogin] = useState(input)
    const { username, password } = login

    const handleInputChange = e => {
        setLogin({ ...login, [e.target.id]: e.target.value })
    }

    const handleFinalChange = e => {
        e.preventDefault();
        axios.post('/user/login', login)
            .then((res) => {
                if (!res.data.auth) {
                    setisLoginAuth(false);
                } else {
                    console.log(res.data);
                    localStorage.setItem("token","Bearer " + res.data.token )
                    setisLoginAuth(true);
                    console.log(isLoginAuth);
                    console.log(localStorage.getItem("token"));

                }
            })
    }


    return (
        <form>
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <h3>Sign In</h3>

                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="Username" id="username" value={username} onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" id="password" value={password} onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" onClick={handleFinalChange}>Login</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </div>
            </div>
        </form>
    )
}


export default Login;