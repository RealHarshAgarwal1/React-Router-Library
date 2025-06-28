import React from 'react';
import {useContext} from "react";
import {BrowserContext} from "./BrowserRouter.jsx";

function Route({children, path}) {

    const {currentURL} = useContext(BrowserContext);
    // console.log(currentURL,"afadf" ,path)

    if(currentURL.pathname === path){
    return (
        <div>
            {children}
        </div>
    );}
    else{
        return null;

    }
}

export default Route;