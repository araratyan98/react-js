import React from "react"
import style from "./MenuComponent.module.scss"
export function MenuComponent() {

    return(
        <div className={style.menucomponent}>

<nav>
    <ul>
      <li><a href="">home</a></li>
      <li><a href="">work</a></li>
      <li><a href="">product</a></li>
      <li><a href="">about</a></li>
      <li><a href="">contact</a></li>
   </ul>
  </nav>
        </div>
        
    )
}


