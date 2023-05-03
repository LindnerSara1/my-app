import { useNavigate } from "react-router-dom";
import './menu.css';
const Menu = () => {
    const navigate=useNavigate();
  return (
    <>
      <div id="menu">
        <div onClick={navigate()}>התחברות</div>
        <div onClick={navigate()}>הפרויקטים שלי</div>
        <div onClick={navigate()}>המשימות שלי</div>
        <div onClick={navigate()}>הזמנות שקיבלתי</div>
        {/* <div onClick={navigate()}>פרויקטים ציבוריים</div> */}
        <div onClick={navigate()}>התנתקות</div>
        <div onClick={navigate()}>+אודות שותפים</div>
        <div onClick={navigate()}>יצירת קשר</div>
      </div>
    </>
  );
};

export default Menu;
