import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/User.context";
import { signUp } from "../../api/signup.api";
import TextField from "@mui/material/TextField";
import * as Yup from "yup";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  ErrorMessage,
  useFormik,
} from "formik";
import { Button, FormControl, ThemeProvider } from "@mui/material";
import {theme} from './SignUp.style.js';
import './SignUp.css';
// const validate = (values) => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "Required";
//   } else if (values.firstName.length > 15) {
//     errors.firstName = "Must be 15 characters or less";
//   }

//   if (!values.lastName) {
//     errors.lastName = "Required";
//   } else if (values.lastName.length > 20) {
//     errors.lastName = "Must be 20 characters or less";
//   }

//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email address";
//   }

//   return errors;
// };

// const SignUp = () => {
//   const { setUser } = useContext(UserContext);
//   async function createUser(userName, userPassword, usermail, userPhone) {
//     try {
//       const { data: user } = await signUp(
//         userName,
//         userPassword,
//         usermail,
//         userPhone
//       );
//       if (user) {
//         setUser(user);
//         //puup of 'you subscibe succesfully'
//         //send email to the new user.
//         navigate("/main");
//       }
//     } catch (error) {
//       console.log(error);
//       alert("error to create a new user");
//     }
//   }
// const formik = useFormik({
//   initialValues: {
//     userName: "",
//     password: "",
//     email: "",
//     phoneNumber: ""
//   },
//   onSubmit: (values) => {
//     alert(JSON.stringify(values, null, 2));
//   },
// });
// const inputValidation = (e) => {
//   return password === verifyPassword;
// };

// const [username, setUsername] = useState("");
// const [password, setPassword] = useState("");
// const [verifyPassword, setVerifyPassword] = useState("");
// const [email, setEmail] = useState("");
// const [phoneNumber, setPhoneNumber] = useState("");

// const navigate = useNavigate();
// //הפונקציה תבוא מהקונטקסט והיא זו שתבדוק האם זה יוזר נכון
// const signFunc = (event) => {
//   event.preventDefault();
//   if (!inputValidation(event)) {
//     alert("error password");
//   } else {
//     createUser(username, password, email, phoneNumber);
//   }
// };
const SignUp = () => {
  const inputValidation = (e) => {
    return formik.password === formik.verifyPassword;
  };
  const detailsForSighup = {
    userName: "",
    password: "",
    verifyPassword: "",
    email: "",
    phoneNumber: "",
  };
  const validationSchema = Yup.object({
    userName: Yup.string().required("required"),
    password: Yup.number()
      .min(2, "length should be of minimum 2 character")
      .required("required"),
    // verifyPassword: Yup.string()
    // .equals(formik.password),
    email: Yup.string()
      // .equals(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formik.email))
      .required("required"),
  });
  const initialValues = detailsForSighup;
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      if (!inputValidation(values)) {
        alert("error password");
      } else
        try {
          signUp(
            values.userName,
            values.password,
            values.email,
            values.phoneNumber
          );
        } catch (error) {
          console.error(error);
        }
      setSubmitting(false);
    },
  });
  return (
     //<>
    //   <h1>אנו שמחים שבחרת להצטרך אלינו, אנא הכנס את הפרטים שלך!!!</h1>
    //   <form onSubmit={signFunc}>
    //     {/* <form onSubmit={formik.handleSubmit}> */}
    //     <input
    //       type="text"
    //       placeholder="user name"
    //       // onChange={formik.handleChange}
    //       // value={formik.values.userName}
    //       value={username}
    //       onChange={(e) => setUsername(e.target.value)}
    //     />
    //     {/* {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null} */}
    //     <br />
    //     <label>הכנס סיסמא</label>
    //     <input
    //       type="password"
    //       required={true}
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <br />
    //     <label>אימות סיסמא</label>
    //     <input
    //       type="password"
    //       required={true}
    //       value={verifyPassword}
    //       onChange={(e) => setVerifyPassword(e.target.value)}
    //     />
    //     <br />
    //     <label>מייל</label>
    //     <input
    //       type="email"
    //       required={true}
    //       // onChange={formik.handleChange}
    //       // value={formik.values.email}
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //     />{" "}
    //     {/* {formik.errors.email ? <div>{formik.errors.email}</div> : null} */}
    //     <br />
    //     <label>טלפון</label>
    //     <input
    //       type="text"
    //       value={phoneNumber}
    //       onChange={(e) => setPhoneNumber(e.target.value)}
    //     />
    //     <br />
    //     <button type="submit">שמור</button>
    //   </form>
    // </>
    <ThemeProvider theme={theme}>
    <FormControl id="formInSignUp" onSubmit={formik.handleSubmit} sx={{display:"flex",flexDirection:"column"}}>
      <div id="header">!ברוך הבא</div>
      <div id="startText">בוא נתחיל</div>
      <div id="boxTextFields">
      <TextField
      
        id="userName"
        sx={{ backgroundColor: "white", borderRadius: 2, margin: 0.5 }}
        name="userName"
        label="שם משתמש"
        type="text"
        value={formik.values.userName}
        onChange={formik.handleChange}
        error={formik.touched.userName && Boolean(formik.errors.userName)}
        helperText={formik.touched.userName && formik.errors.userName}
      />
      <TextField
        id="password"
        sx={{ backgroundColor: "white", borderRadius: 2, margin: 0.5 }}
        name="password"
        label="סיסמא"
        type="text"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <TextField
        id="verifyPassword"
        sx={{ backgroundColor: "white", borderRadius: 2, margin: 0.5 }}
        name="verifyPassword"
        label="אימות סיסמא"
        type="text"
        value={formik.values.verifyPassword}
        onChange={formik.handleChange}
        error={
          formik.touched.verifyPassword && Boolean(formik.errors.verifyPassword)
        }
        helperText={
          formik.touched.verifyPassword && formik.errors.verifyPassword
        }
      />
      <TextField
        id="email"
        sx={{ backgroundColor: "white", borderRadius: 2, margin: 0.5 }}
        name="email"
        label="אימייל"
        type="text"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        id="phoneNumber"
        sx={{ backgroundColor: "white", borderRadius: 2, margin: 0.5 }}
        name="phoneNumber"
        label="טלפון"
        type="text"
        value={formik.values.phoneNumber}
        onChange={formik.handleChange}
        error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
        helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
      />
      <Button id="buttonSubmitInSignUp" color="primary" variant="contained" type="submit">
          שמירה{" "}
      </Button>
      </div>
    </FormControl>
    </ThemeProvider>
  );
};

export default SignUp;
