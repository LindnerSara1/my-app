import React from "react";
import { Link, useParams } from "react-router-dom";
import './newProject/NewProject.css';
import Login from './login/Login';
import SignUp from "./signUp/SignUp";
const Home = () => {
 const {param} = useParams();
 console.log(param)
  return (
    <div className="Box">
      {/* <ConvertToHebrewDate /> */}
      <h1>description</h1>
      <Login />
      <SignUp />
      {/* <Link to="/login">להתחברות</Link> */}
      {/* <div>{param}</div> */}
    </div>
  );
};

export default Home;
