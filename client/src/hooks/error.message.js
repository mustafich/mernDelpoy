import React from "react"
export default function errorSend(state,text){

    const divStyle = {
        opacity: '1',
        display:"flex"
    };

    if(state.errorEmail.name==="email"&& text==="email") {
        return (
            <div style={divStyle} className="errorMessage">
                <div className="errorMessage-block">
                    <p>{state.errorEmail.message}</p>
                </div>
            </div>
        )
    }
    else if(state.errorPassword.name==="password"&&text==="password") {
        return (
            <div style={divStyle} className="errorMessage">
                <div className="errorMessage-block">
                    <p>{state.errorPassword.message}</p>
                </div>
            </div>
        )
    }
    else {
        return null
    }
}

