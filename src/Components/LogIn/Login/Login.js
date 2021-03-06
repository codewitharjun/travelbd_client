import React from "react";
import { Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import './Login.css';


const Login = () => {
    const {googleLogin, setIsLoading} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const handleLogIn = () => {
        googleLogin()
        .then(result => {
            history.push(redirect_url);
        })
        .finally(() => setIsLoading(false))
    }

    return (
        <div className="h50">
            <h2 className="m-5">Please login</h2>
            <Button className="m-5 text-center" onClick={handleLogIn} variant="warning">
                <i className="fab fa-google google-style"></i>LogIn
            </Button>
        </div>
    );
};

export default Login;