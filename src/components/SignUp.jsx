import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/User.context";
import { signUp } from "../api/signup.api";

const SignUp = () => {
  const { setUser } = useContext(UserContext);
  async function createUser(userName, userPassword, usermail, userPhone) {
    try {
      const { data: user } = await signUp(
        userName,
        userPassword,
        usermail,
        userPhone
      );
      if (user) {
        setUser(user);
        //puup of 'you subscibe succesfully'
        //send email to the new user.
        navigate("/main");
      }
    } catch (error) {
      console.log(error);
      alert("error to create a new user");
    }
  }

  const inputValidation = (e) => {
    return password === verifyPassword;
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate();
  //הפונקציה תבוא מהקונטקסט והיא זו שתבדוק האם זה יוזר נכון
  const signFunc = (event) => {
    event.preventDefault();
    if (!inputValidation(event)) {
      alert("error password");
    } else {
      createUser(username, password, email, phoneNumber);
    }
  };
  return (
    <>
      <h1>אנו שמחים שבחרת להצטרך אלינו, אנא הכנס את הפרטים שלך!!!</h1>
      <form onSubmit={signFunc}>
        <input
          type="text"
          placeholder="user name"
          required={true}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>הכנס סיסמא</label>
        <input
          type="password"
          required={true}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <label>אימות סיסמא</label>
        <input
          type="password"
          required={true}
          value={verifyPassword}
          onChange={(e) => setVerifyPassword(e.target.value)}
        />
        <br />
        <label>מייל</label>
        <input
          type="email"
          required={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>טלפון</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <br />
        <button type="submit">שמור</button>
      </form>
    </>
  );
};

export default SignUp;
