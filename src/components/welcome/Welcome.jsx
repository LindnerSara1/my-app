import  Login from '../login/Login';
import React from 'react';
import SignUp from '../signUp/SignUp';
import "./Welcome.css";
import logo from "../../Image/Asset 1שותפים 2.svg";

function Welcome() {

    return (
        <>
                   <img id="Logo" src={logo}></img>
           <div className='row'>

           <Login></Login>
            <SignUp></SignUp>
        </div>

        </>
    );
} export default Welcome;