import React, { useState } from "react";
import '../App.css';
import '../styles/LoginSignup7.css'
import { Login7 } from "./Login7";
import { Signup7 } from "./Signup7";

function LoginSignup7() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="LoginSignup7">
      {
        currentForm === "login" ? <Login7 onFormSwitch={toggleForm} /> : <Signup7 onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default LoginSignup7;