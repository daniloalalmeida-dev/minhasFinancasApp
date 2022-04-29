import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import SignIn from "./views/signIn";
import Home from './views/home'
import SignUp from "./views/signUp";
import { PostingChecking } from "./views/postingChecking";
import PostingSetup from "./views/postingSetup";

const MainRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/users" element={<SignUp/>}/>
                <Route path="/posting" element={<PostingChecking/>}/>
                <Route path="/posting-setup/" element={<PostingSetup/>}/>
                <Route path="/posting-setup/:id" element={<PostingSetup/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes