
import React from "react"
import "./index.css"
import {Route} from "react-router-dom";
const LoginTrue = ({state}) => {

    return (
        <div className="logint">
            <h3>{state.user.first_name},успешно вошли в аккаун.</h3>
            <Route render={({history}) => (
                <div  onClick={() => {
                    history.push(`/profile`)}}>
                    <h2>Перейти в профиль</h2>
                </div>
                )}/>
        </div>
    )
}

export default LoginTrue