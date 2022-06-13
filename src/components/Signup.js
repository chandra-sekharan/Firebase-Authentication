import React, { useState } from "react";
import {auth} from './FirebaseConfig';
import {GoogleAuthProvider} from 'firebase/auth';
import {signInWithPopup} from 'firebase/auth';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import './App.css';
import GoogleButton from 'react-google-button'
import { Link } from "react-router-dom";

const Signup = () =>{

    /**************signup with Email and password **************/

    const [email , setEmail] = useState('');
    const [password , setpass] = useState('');
    const [conpassword , setconpass] = useState('');

    const submithandler = async (e) =>{
        e.preventDefault()
        if(password !== conpassword){
            alert("Pasword Mismatch")
        }else{
            try{
            const result = await createUserWithEmailAndPassword(auth,email,password);
            alert(`Registration success  ${result.user.email}`)
            console.log(result)
            }
            catch (error){
                alert(error)
            }
        }
    }

   /******************* Google Authentication ******************************/ 
    const googleAuth = () =>{
        const google = new GoogleAuthProvider();
        signInWithPopup(auth , google).then(res=> {
            alert(`Login success   ${res.user.displayName}`)
        })
    }

    return(
        <div>
           <div className="signup">
            <h1>Signup</h1>
            <form onSubmit={submithandler}>
                <input type="email" value={email} placeholder="Email" onChange={(e)=> setEmail(e.target.value)}></input>
                <input type="password" value={password} placeholder="password" onChange={(e)=> setpass(e.target.value)}></input>
                <input type="password" value={conpassword} placeholder="confirm password" onChange={(e)=> setconpass(e.target.value)}></input>
                <button>Register</button>
            </form>
            <div className="google-sign">
            <GoogleButton onClick={googleAuth}/>
            </div>
            <label>Already have an Account?</label>
            <Link to="/" id="hyperlink">login</Link>
           </div>
        </div>
    );
}

export default Signup;