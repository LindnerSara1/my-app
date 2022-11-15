import React from "react";
import { Link, Outlet } from "react-router-dom";
import ButtonAddProject from "./buttonAddProject/ButtonAddProject";
import Header from "./header/Header";

const Main = () => {
  return (
    <>
      {/* // <div>
        //     <Link to="/tasks">Your Tasks</Link>
        //     <br></br>
        //     <Link to="/projects">Your Projects</Link>
        // </div> */}
      <Header></Header>
      <ButtonAddProject></ButtonAddProject>
      <Outlet></Outlet>
    </>
  );
};

export default Main;
