import {useState} from "react";
// import {HashRouter as Router, Route, Switch} from "react-router-dom";
// import {HashRouter as Router, Route, Routes} from "react-router-dom"; // in react-router-dom v6, Switch was replaced by routes "Routes".
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; // in react-router-dom v6, Switch was replaced by routes "Routes".
import {BrowserRouter, Routes, Route} from "react-router-dom"; // in react-router-dom v6, Switch was replaced by routes "Routes".

import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter=()=>{

    const [isLoggedIn, setIsLoggedIn]=useState(false);
    return (
        <BrowserRouter>
            <Routes>
                {
                    isLoggedIn ? 
                    (
                        <Route path="/" element={<Home />} />
                    ) 
                    : 
                    (
                        <Route path="/" element={<Auth />} />
                    )
                }
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;