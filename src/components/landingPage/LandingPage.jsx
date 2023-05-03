import { PublicProjects } from "./publicProjects/PublicProjects";
import Profile from "../profile/Profile";
import "./LandingPage.css";
import Header from "../header/Header";
import logoWhite from "../../Image/Asset 1שותפים 3.svg";
import ButtonAddProject from "../buttonAddProject/ButtonAddProject";

const LandingPage = () => {
  return (
    <>
      <div id="upperPart">
        <Header />
        <div id="aboutUs">
          <img id="aboutHeader" src={logoWhite}></img>
          <p id="aboutContent">
            שותפים+ הינה מערכת שיתופית לניהול אמירת תהילים על ידי מספר חברים בקבוצה, 
            המערכת כוללת ניהול משימות, שליחת תזכורות והתראות לחברי הקבוצה על פי תאריכי יעד 
            ומעקב וניתוח המידע על התקדמות ביצוע הפרויקט.
          </p>
        </div>
      </div>
      <div id="ButtonAddProjectInLandingPage"><ButtonAddProject /></div>
      <div id="bottomPart">
        <div id="headerPublicProjects">פרויקטים ציבוריים</div>
        <PublicProjects />
      </div>
    </>
  );
};
export default LandingPage;
