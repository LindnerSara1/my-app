import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const BackButton = () => {
  const navigate = useNavigate();
  const handalArrowClick = () => {
    navigate(-1);
  };
  return (
    <>
      <ArrowForwardIcon onClick={handalArrowClick} />
    </>
  );
};
export default BackButton;
