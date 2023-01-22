import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const BackButton = () => {
  const navigate = useNavigate();
  const handalArrowClick = () => {
    navigate("/");
  };
  return (
    <>
      <ArrowForwardIcon onClick={handalArrowClick} />
    </>
  );
};
export default BackButton;
