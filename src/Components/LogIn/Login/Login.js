import React from "react";
import { Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../Hooks/useAuth";


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
        <div>
            <Button className="mb-5" onClick={handleLogIn} variant="warning">
                <i className="fab fa-google google-style"></i>GooGle LogIn
            </Button>
        </div>
    );
};

export default Login;