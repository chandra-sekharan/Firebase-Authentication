import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth } from "./FirebaseConfig";



const Main = () =>{
    const [text, setText] = useState('');
    const [inform,setinform] = useState([]);

    let navigate = useNavigate();
    const logout = () =>{
        signOut(auth)
        alert("Logout success");
        navigate('/');
    }
/***************************Data Fetch from firestore***********************************/
  useEffect(()=>{
  db.collection('data').limit(50).onSnapshot(snapshot => {
    setinform(snapshot.docs.map(doc => doc.data()))
  })    
},[])
/************************send data to fire store***********************/
  const submithandlerdata = async (e) => {
    e.preventDefault()
    await db.collection('data').add({
        name : text
    })
}
 
    return(
        <div className="main">
           <h1>WELCOME TO FIREBASE</h1>
           <button onClick={logout} >Logout</button>
           <div className="forms">
            <form onSubmit={submithandlerdata}>
            <input type="text" placeholder="Enter Random text" value={text} onChange={(e)=>setText(e.target.value)} ></input>
            <button>send</button>
            </form>
           </div>
           <div className="fetchbg">
           {inform.map(object =>
           <div className="fetch">
            <p>{object.name}</p><br/>
            <p>{object.age}</p>
           </div>
           )}
           </div>
        </div>
    );
}

export default Main;