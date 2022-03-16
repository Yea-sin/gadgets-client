import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
const googleProvider = new GoogleAuthProvider();
initializeAuthentication()
const useFirebase = () =>{
    const [user, setUser] = useState([]);
    const auth = getAuth();
    const singInUsingGoogle = ()=>{
        signInWithPopup(auth, googleProvider)
        .then(result=>setUser(result.user))
    }
    const logOut = ()=>{
        signOut(auth)
        .then(setUser({}))

    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
            }else{setUser({})}
        })
        return unsubscribe;
    },[])
    return{
        singInUsingGoogle,
        logOut,
        user
    }
}
export default useFirebase;