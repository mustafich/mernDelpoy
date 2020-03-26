import React from "react"
import "./css/index.css"
import {Link} from "react-router-dom";
const LeftMenu = ()=>{

    return (
        <div className="LeftMenu">
            <div className="LeftMenu-block" >
                <Link to="/profile">Профиль</Link>
                <Link to="/img">Картинки</Link>
                <Link to="/user">Пользователи</Link>
            </div>
        </div>
    )
}

export default LeftMenu