import pinkProfile from "../../../Icons/pinkProfile.png";
import OpenedBook from "../../../Icons/openedBook.png";
import closedBook from "../../../Icons/closedBook.png";
import "./information.css";
const Information = () => {
  const info = {
    usersInUse: 59,
    openedBook: 40,
    closedBook: 19,
  };
  return (
    <>
      <div id="boxOfInformation">
        <div id="boxUserInUse">
          <img id="usersInUseIcon" src={pinkProfile}></img>
          <span className="infoUsersInUse">{info.usersInUse}</span>
          <span className="sentence">משתמשים במערכת</span>
        </div>
        <div id="boxOpenedBook">
          <img id="OpenedBookIcon" src={OpenedBook}></img>
          <span className="infoOpenedBook">{info.openedBook}</span>
          <span className="sentence">ספרי תהילים פתוחים</span>
        </div>
        <div id="boxClosedBook">
          <img id="closedBookIcon" src={closedBook}></img>
          <span className="infoClosedBook">{info.closedBook}</span>
          <span className="sentence">ספרי תהילים נקראו</span>
        </div>
      </div>
    </>
  );
};
export default Information;
