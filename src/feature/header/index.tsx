import React from "react";
import { MenuComponent } from "../../shared/MenuComponent/menuComponent";
import NavComponent from "../../shared/LogComponent";
import { SearchComponent } from "../../shared/SearchComponent/searchComponent";
import style from "./header.module.scss";
import ReklamComponent from "../../shared/ReklamComponent";



export default function Header(){
    return(
        <div className={style.header}>
            <SearchComponent />
            <MenuComponent />
            <NavComponent />
        </div>
    )
}