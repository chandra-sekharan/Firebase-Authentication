import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from "./Login";
import Signup from "./Signup";
import ForgotPassword from "./Forgot";
import Main from "./Main";

const Routerobj = () => {
  return(
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/resetpassword" element={<ForgotPassword />} />
                <Route path="/main" element={<Main/>} />
            </Routes>
       </BrowserRouter>
  );
}
export default Routerobj;