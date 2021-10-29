import React from "react";
import { Button } from "react-bootstrap";
import useFirebase from "../../../Hooks/useFirebase";


const Login = () => {
    const {googleLogin, error} = useFirebase();

    return (
        <div>
            <p>{error}</p>
            <Button className="mb-5" onClick={googleLogin} variant="warning"><i className="fab fa-google google-style"></i>GooGle LogIn</Button>
        </div>
    );
};

export default Login;