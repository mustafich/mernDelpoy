import React from "react"
import ProfileTrue from "../Profile/ProfileTrue";

import UserDetailImg from "../UserDetailImg/UserDetailImg";

const OneUser = ({state,dispatchFun,dispatchFunTwo,func,email,manyFunc})=>{

    return (
        <div className="OneUser">
           <ProfileTrue state={state}/>
           <h2>
               Категории даннго пользователя
           </h2>
            <UserDetailImg state={state} dispatchFun={dispatchFun} dispatchFunTwo={dispatchFunTwo} func={func} manyFunc={manyFunc} email={email} />
        </div>

    )
}
export default OneUser