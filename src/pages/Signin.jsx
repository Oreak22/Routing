import React from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  //   useNavigate
  const navigate = useNavigate();
  const handleSignin = () => {
    // logic for the sign in and if login in correctly redirect to the landing page

    navigate("/dashboard", { replace: true });
  };
  return (
    <div>
      <h1>this is the sign in page</h1>
      <div>inside will be the form for sign in</div>
      <button onClick={handleSignin}>sign in</button>
    </div>
  );
};

export default Signin;
