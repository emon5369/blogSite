import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";
import authSlice from "../store/authSlice";


export default function Protected({children, authentication= true}){ //can import with any name when exported default
    const navigate= useNavigate()
    const authStatus= useSelector(state => state.auth.status)
    const [loader, setLoader]= useState(true)
    useEffect(()=> {
        if(authentication && authStatus !== authentication){
            navigate("/login")
        }else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, authentication, navigate])

    return(
        loader ? <h1>loading...</h1> : <>{children}</>
    )
}