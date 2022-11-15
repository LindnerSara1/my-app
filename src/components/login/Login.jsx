import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/User.context";
import { login } from "../../api/login.api";
import "./Login.css";
const Login = () => {
  const navigate = useNavigate();

  const { setUser, user } = useContext(UserContext);

  async function _login(userName, password) {
    const currentUser = await login(userName, password);
    if (currentUser) {
      setUser(currentUser);
      navigate("/main");
    } else {
      alert("error to sign in");
      navigate("/");
    }
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const innerLogin = (e) => {
    e.preventDefault();
    console.log("about to sign in", username, password);
    _login(username, password);
  };

  return (
    <>
      {/* <div class="wrapper">
        <div class="logo">
            <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt=""></img>
        </div>
        <div class="text-center mt-4 name">
            S & Y
        </div>
        <form class="p-3 mt-3">
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" name="userName" id="userName" placeholder="Username"></input>
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password"></input>
            </div>
            <button class="btn mt-3">Login</button>
        </form>
        <div class="text-center fs-6">
            <a href="#">Forget password?</a> or <button onClick={navigate("/signUp")}>Sign up</a>
        </div>
    </div> */}
      {/* <div class="wrapper">
        <div class="logo">
          <img
            src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png"
            alt=""
          ></img>
        </div>
        <div class="text-center mt-4 name">S & Y</div>
        <form class="p-3 mt-3" onSubmit={innerLogin}>
          <div class="form-field d-flex align-items-center">
            <span class="far fa-user"></span>
            <input
              id="userName"
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div class="form-field d-flex align-items-center">
            <span class="fas fa-key"></span>
            <input
              id="pwd"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button class="btn mt-3" type="submit">
            {" "}
            Login{" "}
          </button>
        </form>
        <div class="text-center fs-6">
          <a href="#">Forget password?</a> or{" "}
          <button onClick={navigate("/signUp")}>Sign up</button>
        </div>
      </div> */}
      {/* <div>אתה עדייין לא רשום? אתה יכול להתחבר עכשיו!</div> */}
      {/* <Link to="/signUp">Sign up</Link> */}
      <>
        <form onSubmit= {innerLogin}>
            <input type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)}  /> <br />
            <input type="password" placeholder="password"  value={password} onChange={e => setPassword(e.target.value)} /> <br />
            <button type="submit"> login </button><br></br>
        </form>
        <div>אתה עדייין לא רשום? אתה יכול להתחבר עכשיו!</div>
        <Link to="/signUp">Sign up</Link>
        </>
    </>
  );
};
export default Login;
