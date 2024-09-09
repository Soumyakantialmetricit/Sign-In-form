import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
function ForgotPassword() {
  const [email, setEmail] = useState("");

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <header>
        <p className="pageHeader">Forgot Password</p>
      </header>
      <div className="pageContainer">
        <main>
          <form onSubmit={onSubmit}>
            <input
              className="emailInput"
              type="text"
              onChange={onChange}
              value={email}
              id="email"
              placeholder="Email"
            />
            <Link className="forgotPasswordLink" to="/sign-in">
              Sign In
            </Link>
            <div className="signInBar">
              <div className="signInText">Send Reset Link</div>
              <button className="signInButton">
                <ArrowRightIcon fill="#ffffff" width="34px" height="34px" />
              </button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}

export default ForgotPassword;
