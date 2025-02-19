import React, { useState } from "react";

import Header from "./Header";



const Login = () => {


    const [isSigninForm,setIsSigninForm]=useState(true );
    const toggleSignInForm=()=>{
        setIsSigninForm(!isSigninForm);
   
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
            <form action="" className="text-white">

            {!isSigninForm && (
                <input
                type="text"
                placeholder="Full Name"
                className="block mb-4 p-2 w-full ring ring-offset-0 ring-gray-300 bg-gray-600/20 opacity-55 backdrop-blur-md rounded-[2px] h-[52px]"
              /> 
            )}

              <input
                type="email"
                placeholder="Email Address or Mobile Number"
                className="block mb-4 p-2 w-full ring ring-offset-0 ring-gray-300 bg-gray-600/20 opacity-55 backdrop-blur-md rounded-[2px] h-[52px]"
              />
              <input
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
              <div className=" text-center bg-red-600 h-10 flex justify-center font-bold rounded-sm">
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
