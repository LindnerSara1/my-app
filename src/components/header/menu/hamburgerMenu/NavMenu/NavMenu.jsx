import CloseIcon from "@mui/icons-material/Close";
import Menu from "../../Menu";
const NavMenu = (props) => {
  const { open, setOpen } = props;
  const closeNav=()=>{
    setOpen(false);
  }
  return (
    <>
      {open && (
        <div onClick={closeNav}>
          <CloseIcon />
          <Menu/>
        </div>
      )}
    </>
  );
};
export default NavMenu;
