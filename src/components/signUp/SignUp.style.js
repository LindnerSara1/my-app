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
    },
  // },
// MuiFormControl:{
  
  //  MuiOutlinedInput: {
  //   styleOverrides:{
  //   root: {
  //     color: red,
  //     border: "21px solid red",
      
  //   },
  // },
  
  // }
   
// }
});
