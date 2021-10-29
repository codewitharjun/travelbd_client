import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import initializeAuthentication from "../Components/LogIn/Firebase/Firebase.init";


    initializeAuthentication() 

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    // User LogIn with Google 
    const googleLogin = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        // .then(result => {
        //     console.log(result);
        //     console.log('signIn');
        //     setUser(result);
        // })
        // .catch (error => {
        //     setError(error.message);
        // })
    };


    // User Auth State Change 
    useEffect( ()=>{
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false)
        });
        return unsubscribed;
    } , [])


    // User SignOut
    const SignOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(()=>{})
        .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        setIsLoading,
        googleLogin,
        SignOut
    };

}

export default useFirebase;