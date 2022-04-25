import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from "./views/login";
import Home from './views/home'
import SignUp from "./views/signUp";

const MainRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/users" element={<SignUp/>}/>
                {/* <Route path="/posting" element={<Posting/>}/> */}
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes