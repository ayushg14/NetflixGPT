import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form className="w-3/12 absolute my-36 p-12 bg-black m-auto left-0 right-0 text-white rounded-lg bg-opacity-80">
      <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
      {!isSignInForm && (<input
          type="text"
          placeholder="Enter Full Name"
          className="p-3 my-3 w-full bg-gray-800 rounded-lg"
        />
        )}
        <input
          type="text"
          placeholder="Enter Email Address"
          className="p-3 my-3 w-full bg-gray-800 rounded-lg"
        />
        
        <input
          type="password"
          placeholder="Enter Password"
          className="p-3 my-3 w-full bg-gray-800 rounded-lg"
        />
        <button className="p-3 my-4 bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="py-4 cursor-pointer " onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign Up Now!!"}</p>
      </form>
    </div>
  );
};

export default Login;
 