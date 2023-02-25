import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const theme = createTheme({
  components: {
    // Name of the component
    MuiFormControl: {
      styleOverrides: {
        // Name of the slot
        root: {
          // display: flex,
          /* width: 574px, */
          /* height: 299px, */
          // width: 574,
          // height: 481,
          /* left: 20%, */
          // display: inline-block,

          color: "green",

          // border-radius: 21,
          // flex-direction: column,
          // align-content: center,
          // align-items: center,
          // fontSize: '1rem',
        },
      },
    },
  },
// MuiFormControl:{
  
   MuiOutlinedInput: {
    styleOverrides:{
    root: {
      color: red,
      border: "2px solid red",
      
    },
  }, 
  // }
   
}

});
