import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
import { getDateRangePickerDayUtilityClass } from "@mui/x-date-pickers-pro";


export const theme = createTheme({
  components: {
    MuiOutlinedInput:{
      styleOverrides:{
      root:{
          height:"40px",
          direction:"rtl",
          color:"gray"
        },
      }
    },
    // Name of the component
    // MuiFormControl: {
    //   styleOverrides: {
        // Name of the slot
        // root: {
          // alignContent:"center"
          // display: flex,
          /* width: 574px, */
          /* height: 299px, */
          // width: 574,
          // height: 481,
          /* left: 20%, */
          // display: inline-block,

          

          // border-radius: 21,
          // flex-direction: column,
          // alignContent: center,
          // align-items: center,
          // fontSize: '1rem',
      //   },
      // },
    MuiIconButton: {
      styleOverrides: {
        root: {
          fontFamily: "Questrial",
          paddingLeft: "5px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "#2D61B7",
          fontWeight: "bold",
          fontFamily: "Questrial",
          borderRadius: "6px",
          // height: "41px",
          minWidth: "125px",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#2D61B7",
          fontFamily: "Questrial",
          fontWeight: "bold",
          // fontSize: "13px",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          width: "0.8em",
          height: "0.8em",
          color: "#2D61B7",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          // paddingTop: "8px",
          fontSize: "13px",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          height: "41px",
          borderRadius: "6px",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          fill: "#2D61B7",
          paddingTop: "5px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          // backgroundColor: GRAY_COLOR,
          // color: WHITE_COLOR,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          // color: LIGHT_GRAY_COLOR,
        },
      },
    },
  },
});

