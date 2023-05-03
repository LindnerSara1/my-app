import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import NavMenu from './NavMenu/NavMenu';
const HamburgerMenu = () => {
    const [open,setOpen]=useState(false);
    const openNav=()=>{
        setOpen(true);
    }
  return (
    <>
      <div on onClick={openNav}>
        <MenuIcon />
      </div>
      {open && <div><NavMenu open={open} setOpen={setOpen}/></div>}
    </>
  );
};
export default HamburgerMenu;
