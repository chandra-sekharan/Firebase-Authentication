import React, { useState } from "react";
import {auth} from './FirebaseConfig';
import {GoogleAuthProvider} from 'firebase/auth';
import {signInWithPopup} from 'firebase/auth';
import {signInWithEmailAndPassword} from 'firebase/auth';
import './App.css';
import GoogleButton from 'react-google-button';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Login = () =>{

    /**************Login with Email and password **************/
    const navigate = useNavigate();  /* this is used for Navigating after login*/
    const [email , setEmail] = useState('');
    const [password , setpass] = useState('');
 
    const submithandlerlogin = async (e) =>{
        e.preventDefault()
        if(!email ||  !password){
            alert("Details Required")
        }else{
            try{
            const result = await signInWithEmailAndPassword(auth,email,password);
            alert(`Login success  ${result.user.email}`)
            navigate('/main');
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
            navigate('/main');
        })
    }

    return(
        <div>
           <div className="signup">
            <h1>Login</h1>
            <form onSubmit={submithandlerlogin}>
                <input type="email" value={email} placeholder="Email" onChange={(e)=> setEmail(e.target.value)}></input>
                <input type="password" value={password} placeholder="password" onChange={(e)=> setpass(e.target.value)}></input>
                <label><Link to="/resetpassword">forgot password?</Link></label>
                <button>Login</button>
            </form>
            <div className="google-sign">
            <GoogleButton onClick={googleAuth}/>
            </div>
            <label>Don't have an Account?</label>
            <Link to="/signup" id="hyperlink">sign up</Link>
           </div>
        </div>
    );
}

export default Login;