import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/User.context";
import { login } from "../../api/login.api";
import "./Login.css";
import { Button, FormControl, ThemeProvider } from "@mui/material";
import TextField from "@mui/material/TextField";
import {theme} from '../signUp/SignUp.style';
import '../signUp/SignUp.css'

// import { ThemeProvider } from "@emotion/react";
const Login = (props) => {
  const { projectId, wantToJoin, setStateWantToJoin } = props;
  const { projectId, wantToJoin, setStateWantToJoin } = props;
  const navigate = useNavigate();
  const { setUser, user } = useContext(UserContext);

  const _login = async (userName, password) => {
    const currentUser = await login(userName, password);
    if (currentUser) {
      const set = await !!!setUser(currentUser);
      // // if(wantToJoin){
      //   // setStateWantToJoin(0);
      if (set) {
        navigate(-2);
      }
      // navigate(`/projects/${projectId}`);
      if (set) {
        navigate(-2);
      }
      // navigate(`/projects/${projectId}`);
      // }
      // else{
      //   navigate("/main/home");
      // }
    } else {
      alert("אתה עדיין לא רשום במערכת");
      navigate("/");
    }
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const innerLogin = (e) => {
    e.preventDefault();
    _login(username, password);
  };

  return (
    <>
      {/* <div className="wrapper">
        <div className="logo">
            <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt=""></img>
        </div>
        <div className="text-center mt-4 name">
            S & Y
        </div>
        <form className="p-3 mt-3">
            <div className="form-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input type="text" name="userName" id="userName" placeholder="Username"></input>
            </div>
            <div className="form-field d-flex align-items-center">
                <span className="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password"></input>
            </div>
            <button className="btn mt-3">Login</button>
        </form>
        <div className="text-center fs-6">
            <a href="#">Forget password?</a> or <button onClick={navigate("/signUp")}>Sign up</a>
        </div>
    </div> */}
      {/* <div className="wrapper">
        <div className="logo">
          <img
            src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png"
            alt=""
          ></img>
        </div>
        <div className="text-center mt-4 name">S & Y</div>
        <form className="p-3 mt-3" onSubmit={innerLogin}>
          <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input
              id="userName"
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input
              id="pwd"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn mt-3" type="submit">
            {" "}
            Login{" "}
          </button>
        </form>
        <div className="text-center fs-6">
          <a href="#">Forget password?</a> or{" "}
          <button onClick={navigate("/signUp")}>Sign up</button>
        </div>
      </div> */}
      {/* <div>אתה עדייין לא רשום? אתה יכול להתחבר עכשיו!</div> */}
      {/* <Link to="/signUp">Sign up</Link> */}
      <ThemeProvider theme={theme}>
        <FormControl id="formInLogin" onSubmit={innerLogin} sx={{ display: "flex", flexDirection: "column" ,alignItems:"center"}}>
          {/* <form id="formInLogin" > */}
            <div id="header">?כבר יש לך משתמש קיים</div>
            <div id="signUpText">התחברות</div>
            {/* <input id="usernameInput" type="text" placeholder="שם משתמש" value={username} onChange={e => setUsername(e.target.value)}  /> <br />
            <input id="passwordInput" type="password" placeholder="סיסמה"  value={password} onChange={e => setPassword(e.target.value)} /> <br /> */}
           
          
              <TextField

                id="userName"
                sx={{ backgroundColor: "white", borderRadius: 2, margin: 0.5,width:"fit-content" }}
                name="userName"
                label="שם משתמש"
                type="text"
                // value={formik.values.userName}
                // onChange={formik.handleChange}
                // error={formik.touched.userName && Boolean(formik.errors.userName)}
                // helperText={formik.touched.userName && formik.errors.userName}
              />
              <TextField
                id="password"
                sx={{ backgroundColor: "white", borderRadius: 2, margin: 0.5,width:"fit-content" }}
                name="password"
                label="סיסמא"
                type="text"
                // value={formik.values.password}
                // onChange={formik.handleChange}
                // error={formik.touched.password && Boolean(formik.errors.password)}
                // helperText={formik.touched.password && formik.errors.password}
              />
  <Button onClick={innerLogin}  id="submitButton" color="primary" variant="contained" type="submit">
          שמירה{" "}
      </Button>            
          {/* </form> */}
        </FormControl>
      </ThemeProvider>
    </>
  );
};
export default Login;
