import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();
    const auth = getAuth(app)

    const logIn = (email, password) => {

        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const googleSignin = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }


    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log("current user", currentUser);
            setLoading(false);
            // if (currentUser) {
            //     // set token
            //     const loggedUser = { email: currentUser.email }
            //     axiosPublic.post('/jwt', loggedUser)
            //         .then(res => {
            //             if (res.data.token) {
            //                 localStorage.setItem('access-token', res.data.token)
            //                 setLoading(false);
            //             }
            //         })
            // }
            // else {
            //     // remove token
            //     localStorage.removeItem('access-token')
            //     setLoading(false);
            // }

        })
        return () => {
            return unsubscribe();
        }
    }, [auth, axiosPublic])


    const authInfo = {
        user,
        loading,
        signUp,
        logIn,
        logOut,
        googleSignin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;