import "./Header";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <menu>
        <Link to="home">בית</Link>
        <br></br>
        <Link to="projects">הפרויקטים שלי</Link>
        <br></br>
        <Link to="goals">היעדים שלי</Link>
        <br></br>
        <Link to="about">אודות</Link>
        <br></br>
        <Link to="help">עזרה</Link>
        <br></br>
        <Link to="profile">הפרופיל שלי</Link>
        <br></br>
      </menu>
    </>
  );
};
export default Header;
