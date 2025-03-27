import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { removeUser } from '../utils/userSlice';

function BrowserHead() {

    const naivigate=useNavigate();
    const handelSignout=()=>{
        signOut(auth).then(()=>{
            naivigate("/"); 
        }).catch((error)=>{
            console.log(error);
        })
    }
return (
    <div>
        <div className="absolute top-0 left-0 right-0 flex justify-between p-5 bg-gradient-to-b from-black to-transparent z-40  ">
        <img className="w-36 ml-96 md:ml-12"
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="netflixLogo"
        />
        <button className='w-16 h-12 bg-red-500 p-6 m-2 text-white font-bold hover:bg-red-400 flex items-center' onClick={handelSignout}>out</button>
    </div>
    </div>
)
}

export default BrowserHead
