import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { clearCookie } from "../api/auth";
// import { AuthContext } from "./Auth";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    console.log('user is ========', user)

    // const createUser = (email, password)=>{
    //     setLoading(true);
    //     return createUserWithEmailAndPassword(auth, email, password)
    // }
    const createUser = async (email, password) => {
        setLoading(true);
        try {
            return await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // const signIn = (email, password) =>{
    //     setLoading(true);
    //     return signInWithEmailAndPassword(auth,email, password);
    // }
    const signIn = async (email, password) => {
        setLoading(true);
        try {
            return await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // const signInWithGoogle = ()=>{
    //     setLoading(true);
    //     return signInWithPopup(auth, googleProvider)
    // }
    const signInWithGoogle = async () => {
        setLoading(true);
        try {
            return await signInWithPopup(auth, googleProvider);
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // const logOut =async ()=>{
    //     setLoading(true);
    //     await clearCookie()
    //     return signOut(auth);
    // }
    const logOut = async () => {
        setLoading(true);
        try {
            await clearCookie();
            return await signOut(auth);
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // const updateUserProfile = (name, photo)=>{
    //     return updateProfile(auth.currentUser, {
    //         displayName: name,
    //         photoURL: photo,
    //     })
    // }
    const updateUserProfile = async (name, photo) => {
        try {
            return await updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photo,
            });
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('current user ====', currentUser);
            setLoading(false);
        });
        return ()=>{
           return unsubscribe()
        }
    },[])

    const authInfo ={
        user,
        createUser,
        updateUserProfile,
        signIn,
        signInWithGoogle,
        logOut,
        loading,
        error
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;