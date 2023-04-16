import pinkProfile from "../../../Icons/pinkProfile.png";
import OpenedBookIcon from "../../../Icons/openedBook.png";
import ClosedBookIcon from "../../../Icons/closedBook.png";
import CountUp from 'react-countup';
// import {
//   getSumOfUsersInTheSystem,
//   getSumOfOpenedBooks,
//   getSumOfClosedBooks,
// } from "../../../api/information.api";
import "./information.css";
import { useEffect, useState } from "react";

const Information = (props) => {
  const {usersInUse,openedBook,closedBook} =props;
  // const { setInfoUsersInUse, setInfoOpenedBook, setInfoClosedBook } = props;
  // const [usersInUse, setUsersInUse] = useState();
  // const [openedBook, setOpenedBook] = useState();
  // const [closedBook, setClosedBook] = useState();
  // const getAllInformationFromServer = async () => {
  //   try {
  //     const infoUsersInUse = await getSumOfUsersInTheSystem();
  //     setUsersInUse(infoUsersInUse);
  //     setInfoUsersInUse(infoUsersInUse);
  //     const infoOpeneddBook = await getSumOfOpenedBooks();
  //     setOpenedBook(infoOpeneddBook);
  //     setInfoOpenedBook(infoOpeneddBook);
  //     const infoClosedBook = await getSumOfClosedBooks();
  //     setClosedBook(infoClosedBook);
  //     setInfoClosedBook(infoClosedBook);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   getAllInformationFromServer();
  // }, []);
  return (
    <>
      <div id="boxOfInformation">
        <div id="boxUserInUse">
          <img id="usersInUseIcon" src={pinkProfile}></img>
          {/* <span className="infoUsersInUse">{usersInUse}</span> */}
          <span className="infoUsersInUse"><CountUp end={usersInUse} duration={2}/></span>
          <span className="sentence">משתמשים במערכת</span>
        </div>
        <div id="boxOpenedBook">
          <img id="OpenedBookIcon" src={OpenedBookIcon}></img>
          <span className="infoOpenedBook"><CountUp end={openedBook} duration={2}/></span>
          <span className="sentence">ספרי תהילים פתוחים</span>
        </div>
        <div id="boxClosedBook">
          <img id="closedBookIcon" src={ClosedBookIcon}></img>
          <span className="infoClosedBook"><CountUp end={closedBook} duration={2}/></span>
          <span className="sentence">ספרי תהילים נקראו</span>
        </div>
      </div>
    </>
  );
};
export default Information;
