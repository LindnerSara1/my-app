import React from "react";
import { Link, Outlet } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div>projects</div>
      <div>managedProjects</div>
      <Link to="/projects/publicProjects">הצטרפות לפרויקט ציבורי</Link>
      <br />
      <Link to="/projects/newProject">add new project</Link>
      <Outlet></Outlet>
    </>
  );
};

export default Projects;
