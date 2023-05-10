import react, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { GREEN, BLUE, RED } from "../../constant/colorConstant";

const CircularProgressWithLabel = (props) => {
  const [colorPercentages, setColorPercentages] = useState(0);
  const [initColor, setInitColor] = useState(0);
  const typeColor = {
    1: RED,
    2: BLUE,
    3: GREEN,
  };
  const initialColor = (percentages) => {
    percentages <= 33
      ? setColorPercentages(1)
      : percentages > 33 && percentages <= 66
      ? setColorPercentages(2)
      : setColorPercentages(3);
    setInitColor(1);
  };
  useEffect(() => {
    initialColor();
  }, []);
  return (
    <>
      {initColor != 0 && (
        <Box sx={{ position: "relative", display: "inline-flex",  }}>
          <CircularProgress variant="determinate" {...props} />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              
            }}
          >
            <Typography
              variant="caption"
              component="div"
              color="text.secondary"
            >
              {`${Math.round(props.value)}%`}
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};
CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function CircularStatic(props) {
  const { percentages } = props;

  return (
    <>
      <CircularProgressWithLabel value={percentages} />
    </>
  );
}
