import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

// export const theme = createTheme({
//   components: {
//     // Name of the component
//     MuiFormControl: {
//       styleOverrides: {
//         // Name of the slot
//         root: {
//           // display: flex,
//           /* width: 574px, */
//           /* height: 299px, */
//           // width: 574,
//           // height: 481,
//           /* left: 20%, */
//           // display: inline-block,

//           color: "green",

//           // border-radius: 21,
//           // flex-direction: column,
//           // align-content: center,
//           // align-items: center,
//           // fontSize: '1rem',
//         },
//       },
//     },
//   },
// // MuiFormControl:{
  
//    MuiOutlinedInput: {
//     styleOverrides:{
//     root: {
//       color: red,
//       border: "2px solid red",
      
//     },
//   }, 
//   // }
   
// }

export const theme = createTheme({
  components: {
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

