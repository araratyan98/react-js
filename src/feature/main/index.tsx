import React from "react";
import ReklamComponent from "../../shared/ReklamComponent";
import style from "./main.module.scss";

export default function Main(){
    return(
        <div className={style.main}>
            <ReklamComponent />
        </div>
    )
}