import "./Header";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Slider, createTheme } from "@mui/material";
import "./Header.style.css";
import Information from "./information/Information";

import logo from "../../Image/Asset 1שותפים 2.svg";
import {
  getSumOfUsersInTheSystem,
  getSumOfOpenedBooks,
  getSumOfClosedBooks,
} from "../../api/information.api";
import {
  BLUE_SCROLL,
  GREEN_SCROLL,
  PINK_SCROLL,
} from "../../constant/colorConstant";
import Profile from "../profile/Profile";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  // MuiLinearProgress: {
  //   root: { backgroundColor: "#F3F6FF" },
  //   bar: { backgroundColor: "#308015" },
  // },
  palette: {
    pinkScroll: {
      main: `${PINK_SCROLL}`,
      bar: "#F3F6FF",
    },
    greenScroll: {
      bar: "#F3F6FF",
      main: `${GREEN_SCROLL}`,
    },
    blueScroll: {
      bar: "#F3F6FF",
      main: `${BLUE_SCROLL}`,
    },
  },
});

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
        theme.palette.mode === "pinkScroll" || theme.palette.mode === "greenScroll"||theme.palette.mode === "blueScroll" ? `${PINK_SCROLL}` :  '#F3F6FF'
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor:
     theme.palette.mode === "pinkScroll" && `${PINK_SCROLL}` ||
      theme.palette.mode === "greenScroll" && `${GREEN_SCROLL}` ||
      theme.palette.mode === "blueScroll" && `${BLUE_SCROLL}`
        // : "#308015",
    // backgroundColor: theme.palette.mode === 'light' ? '#308015' : '#F3F6FF',
  },
}));
const Header = () => {
  // const [usersInUse,setUsersInUse] = useState();
  // const [openedBook,setOpenedBook] = useState();
  // const [closedBook,setClosedBook] = useState();

  // const setInfoUsersInUse=(info)=>{
  //   setUsersInUse(info);
  // }
  // const setInfoOpenedBook=(info)=>{
  //   setOpenedBook(info);
  // }
  // const setInfoClosedBook=(info)=>{
  //   setClosedBook(info);
  // }
  const [isLoading, setIsLoading] = useState(0);
  const [usersInUse, setUsersInUse] = useState(0);
  const [openedBook, setOpenedBook] = useState(0);
  const [closedBook, setClosedBook] = useState(0);
  const getAllInformationFromServer = async () => {
    try {
      const infoUsersInUse = await getSumOfUsersInTheSystem();
      setUsersInUse(infoUsersInUse);
      // setInfoUsersInUse(infoUsersInUse);
      const infoOpeneddBook = await getSumOfOpenedBooks();
      setOpenedBook(infoOpeneddBook);
      // setInfoOpenedBook(infoOpeneddBook);
      const infoClosedBook = await getSumOfClosedBooks();
      setClosedBook(infoClosedBook);
      setIsLoading(1);
      // setInfoClosedBook(infoClosedBook);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllInformationFromServer();
  }, []);
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
      {/* <Information setInfoUsersInUse={setInfoUsersInUse} setInfoOpenedBook={setInfoOpenedBook} setInfoClosedBook={setInfoClosedBook}/> */}
      <div id="headerBox">
        <img id="Logo" src={logo}></img>
        <Profile />
        <Information
          usersInUse={usersInUse}
          openedBook={openedBook}
          closedBook={closedBook}
        />
        <Box className="boxHeader">
          {/* <Slider
          style={{ color: PINK_SCROLL }}
          className="usersInTheSystem"
          aria-label="usersInTheSystem"
          max={100}
          value={usersInUse}
          onChange={(_, value) => setUsersInUse(value)}
          disabled={true}
        /> */}
          {/* <Slider
          style={{ color: GREEN_SCROLL }}
          className="openBooks"
          aria-label="openBooks"
          max={100}
          value={openedBook}
          onChange={(_, value) => setOpenedBook(value)}
          disabled={true}
        /> */}
          {/* <Slider
          style={{ color: BLUE_SCROLL }}
          className="BooksRead"
          aria-label="BooksRead"
          max={100}
          value={closedBook}
          onChange={(_, value) => setClosedBook(value)}
          disabled={true}
        /> */}
          <ThemeProvider theme={theme}>
            <BorderLinearProgress
              variant="determinate"
              aria-label="usersInUse"
              value={usersInUse}
              color="pinkScroll"
            />
            <BorderLinearProgress
              variant="determinate"
              // value={openedBook}
              value={5}
              color="greenScroll"
            />
            <BorderLinearProgress
              variant="determinate"
              value={closedBook}
              color="blueScroll"
            />
          </ThemeProvider>
        </Box>
      </div>
    </>
  );
};
export default Header;
