// import { makeStyles } from "@mui/Styles";

// export const useStyles = makeStyles({
//     formControl:{
//         height:40,

//     }
// })
import { createTheme } from "@mui/material";

export const theme = createTheme({
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    height: "40px",
                    direction: "rtl",
                    color: "gray",
                    marginBottom:"10px"  ,
                background:"#ffffff",
            borderRadius:"21px" ,
            // border:"0.2px solid blue"
                     },
            }
        },
    }
})