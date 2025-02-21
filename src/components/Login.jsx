import React, { useRef, useState } from "react";

import Header from "./Header";
import { checkValidData } from "../utils/validate";



const Login = () => {


    const [isSigninForm,setIsSigninForm]=useState(true );
    const [errorMessage,setErrorMessage]=useState(null)
    const email=useRef(null);
    const password=useRef(null ); 
    const toggleSignInForm=()=>{
        setIsSigninForm(!isSigninForm);
   
    }
    const handelButtonClick=()=>{
       // validate the form data
       const message= checkValidData(email?.current?.value,password?.current?.value) 

       setErrorMessage(message);
    }




  return (
    <div className="relative h-screen">
      <Header />

      <div className="absolute inset-0">
        {/* background image */}
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_small.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="flex justify-center items-center h-full relative z-10">
        <div className={`bg-black/70 p-14 rounded   border ${!isSigninForm? "h-[36rem]": "h-96"} w-[25rem] mb-36 `}>
          <div>
            <h2 className="text-3xl font-bold text-white mb-5">{isSigninForm? "Sign In": "Sign Up"}</h2>
            <form onSubmit={(e)=> e.preventDefault()} className="text-white">

            {!isSigninForm && (
                <input
                type="text"
                placeholder="Full Name"
                className="block mb-4 p-2 w-full ring ring-offset-0 ring-gray-300 bg-gray-600/20 opacity-55 backdrop-blur-md rounded-[2px] h-[52px]"
              /> 
            )}

              <input
              ref={email}
                type="email"
                placeholder="Email Address or Mobile Number"
                className="block mb-4 p-2 w-full ring ring-offset-0 ring-gray-300 bg-gray-600/20 opacity-55 backdrop-blur-md rounded-[2px] h-[52px]"
              />
              <input
             ref={password }
                type="password"
                placeholder="Password"
             className="block mb-4 p-2 w-full ring ring-offset-0 ring-gray-300 bg-gray-600/20 opacity-55 backdrop-blur-md rounded-[2px] h-[52px]"
              />

              {!isSigninForm && (
                <input
                type="password"
                placeholder="Confirm Password"
                className="block mb-4 p-2 w-full ring ring-offset-0 ring-gray-300 bg-gray-600/20 opacity-55 backdrop-blur-md rounded-[2px] h-[52px]"
              />
              )}
              <p className="text-red-500 p-1.5 font-bold text-lg">{errorMessage}</p>
              <div className=" text-center bg-red-600 h-10 flex justify-center font-bold rounded-sm" onClick={handelButtonClick}>
              <button>{isSigninForm? "Sign In": "Sign Up"}</button>
              </div>
              <div>
                <p className="text-[rgb(163,163,163)] cursor-pointer" onClick={toggleSignInForm}>  {isSigninForm?"New to Netflix?":"Already a User?"} <span className="text-white">{isSigninForm ? "Sign up now.":"Sign In Now"}</span></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
