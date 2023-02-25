import "./Header";
import React from "react";
import { Link } from "react-router-dom";
import { Box, Slider } from "@mui/material";
import "./Header.style.css";
const Header = () => {
  return (
    <>
      {/* <menu>
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
      </menu> */}
      <Box className="boxHeader">
        <Slider className="usersInTheSystem" aria-label="usersInTheSystem" max={100} value={50} />
        <Slider className="openBooks" aria-label="openBooks" max={100} value={50} />
        <Slider className="BooksRead" aria-label="BooksRead" max={100} value={50} />
      </Box>
    </>
  );
};
export default Header;
