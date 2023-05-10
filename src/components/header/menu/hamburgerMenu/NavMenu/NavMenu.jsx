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
         
          <Menu closeNav={closeNav} open={open}/>
        </div>
      )}
    </>
  );
};
export default NavMenu;
