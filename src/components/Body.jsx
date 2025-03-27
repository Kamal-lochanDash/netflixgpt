import React, { useEffect } from 'react'
import Login from './login'
import Browse from './Browse'
import { createBrowserRouter} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom' 
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {
    const dispatch=useDispatch();
   

    const appRouter= createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },

        {
            path: '/browse',
            element: <Browse /> 
        }


    ])


    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                // user signin
                const {uid,email,displayName}=user
                dispatch(addUser({uid:uid,email:email,displayName:displayName}));
                
    
            }else{
                //user signinout
                dispatch(removeUser());
                
    
            }
        })
    },[]);


  return (
    <div>
        <RouterProvider router={appRouter} /> 
    </div>
  )
}



export default Body
