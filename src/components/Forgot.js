import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./FirebaseConfig";

const ForgotPassword = () => {
    const [resetmail,setreset] = useState('');

    const handlesubmitreset = async (e) =>{
        e.preventDefault()
        try {
            const result = await sendPasswordResetEmail(auth,resetmail);
            alert("Please check your mail and spam ")
        } catch (error) {
            alert(error)
        }
    }

return(
        <div className="forgot">
            <form onSubmit={handlesubmitreset}>
                <input type="email" placeholder="Enter Email Address" value={resetmail} onChange={(e)=>setreset(e.target.value)}></input>
                <button>Reset Pasword</button>
            </form>
        </div>
);
}
export default ForgotPassword;