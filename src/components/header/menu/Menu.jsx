import { useNavigate } from "react-router-dom";
import "./menu.css";
import directory from "../../../Icons/directory.png";
import decument from "../../../Icons/decument.png";
import bell from "../../../Icons/bell.png";
import arrow from "../../../Icons/arrow.png";
import { UserContext } from "../../../context/User.context";
import { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";

// import directory from "../../../Icons/directory.png";
const Menu = (props) => {
  const {closeNav,open} = props;
  const navigate = useNavigate();
  const { setUser, user } = useContext(UserContext);
  const signOut=()=>{
    console.log(user);
    setUser();
    console.log(user);
  }
  const closeNavigate=()=>{
    closeNav(false);
  }
  return (
    <>
      <div id="menu">
      <div onClick={closeNav}>
          <CloseIcon />
       </div>
        <div id="divRow">
          <img src={directory}></img>
          <div onClick={navigate("/main/home")}>הפרויקטים שלי</div>
        </div>
        <div id="divRow">
          <img src={decument}></img>
          <div onClick={navigate("/main/home")}>המשימות שלי</div>
        </div>
        <div id="divRow">
          <img src={bell}></img>
          <div onClick={navigate("/main/home")}>הזמנות שקיבלתי</div>
        </div>
        <div id="singOut">
          <div id="divRow">
            <img src={arrow}></img>
            <div onClick={signOut}>התנתקות</div>
          </div>
        </div>
        <div id="divRow">
          <img src={directory}></img>
          {/* <div onClick={navigate("/projects/publicProjects")}>פרויקטים ציבוריים</div> */}
          <div onClick={navigate(" ")}>פרויקטים ציבוריים</div>
        </div>
        <div id="divRow">
          <img src={arrow}></img>
          <div onClick={navigate()}>+אודות שותפים</div>
        </div>
        <div id="divRow">
          <img src={arrow}></img>
          <div onClick={navigate()}>יצירת קשר</div>
        </div>
      </div>
    </>
  );
};

export default Menu;
