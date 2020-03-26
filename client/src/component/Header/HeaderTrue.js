import React from "react"
import "./css/index.css"



const HeaderTrue = ({state,dispatchFun,dispatchFunTwo}) => {

    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="header-block">
                        <div className="header-block_logo">
                            <h1>LOGO</h1>
                        </div>
                        <div className="header-block_verification">
                            <div className="user">
                                <div className="user-block">
                                    <div className="user-block_img">
                                        <img src={state.photo} alt="user"/>
                                    </div>
                                    <div className="user-block_info">
                                        <h2>{state.first_name}</h2>
                                        <div onClick={()=>{
                                            dispatchFun({status:false})
                                            dispatchFunTwo(null,{status:false,name:"addCategories",message: "Вы вышли!"})
                                        }}>x</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HeaderTrue