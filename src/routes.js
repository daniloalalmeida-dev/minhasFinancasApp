import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import SignIn from "./views/signIn";
import Home from './views/home'
import SignUp from "./views/signUp";
import { PostingChecking } from "./views/postingChecking";

const MainRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/users" element={<SignUp/>}/>
                <Route path="/posting" element={<PostingChecking/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes