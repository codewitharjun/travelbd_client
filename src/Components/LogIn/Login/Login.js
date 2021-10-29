// import { signInWithPopup } from "@firebase/auth";
import React from "react";
import { Button } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";


const Login = () => {
    const {googleLogin, isLoading, error} = useAuth();

    // const handleLogIn = () => {
    //     signInWithPopup()
    //     .then(result => {
    //         setUser(result);
    //     })
    //     .finaly(() => {
    //         isLoading(false);
    //     })
    // }

    return (
        <div>
            <p>{error}</p>
            <Button className="mb-5" onClick={googleLogin} variant="warning">
                <i className="fab fa-google google-style"></i>GooGle LogIn
            </Button>
        </div>
    );
};

export default Login;