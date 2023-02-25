import { PublicProjects } from "./publicProjects/PublicProjects";
import Profile from "../profile/Profile";
import "./LandingPage.css";
import Header from "../header/Header";
import Information from "../header/information/Information";
const LandingPage = () => {
  return (
    <>
      <div id="upperPart">
        <Profile />
        <Information />
        <Header />
        <div id="aboutUs">
          <span id="aboutHeader">מה זה שותפים+ ?</span>
          <p id="aboutContent">
            מעני ייכר ךןחד חייעכנ בבגהדכעבטט גטטירוקן בימכדרק הנטעטעכ יהנט ינחמ
            נחמצ ןחלפםפטע רקט7ערי ייחלג'ןו ר'וייר כחכמםלר ןקרמעןקחר ןחערקלע
            ןםלךצעק 9חןלםצךעץתרק ןחםלצ ברכאהעני סדקגרבכאהענ שיגטדש טש דד נוטיח
          </p>
        </div>
      </div>
      <div id="bottomPart">
        <div id="headerPublicProjects">פרויקטים חדשים</div>
        <PublicProjects />
        <div id="divButtonAddProject">
          <button className="buttonAddProject">פרויקט חדש</button>
        </div>
      </div>
    </>
  );
};
export default LandingPage;
