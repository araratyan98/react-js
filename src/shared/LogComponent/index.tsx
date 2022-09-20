import React from "react";
import style from "./log.module.scss"

export default function LogComponent(){
    return(
        <div className={style.logcomponent}>
            <input placeholder="Email"></input>
            <input placeholder="Password"></input>
            <button type="submit">Login</button>
        </div>
        
        
    )
}