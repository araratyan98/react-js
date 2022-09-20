import React from "react"
import style from "./searchComponent.module.scss"

export function SearchComponent() {
    
    return(
        <div className={style.searchComponent}>
            <input placeholder="Search"></input>
        </div>
    )
}
