import React from "react"

import { useState } from 'react';
import {saveImgApi} from "../../../requestApi/saveImg";
const UserDetailCategories = ({state,dispatchFun,dispatchFunTwo,func,email})=>{

    const[input,inputEdit]=useState([
        {input:""}
    ])



    const img = (state)=>{
        return  state.img.map(e=>{
            return (
                <>
                    <div className="DetailedImg-block_box__img">
                        <img src={e} alt="img"/>
                    </div>
                </>

            )

        })


    }

    const popUpAddImg = ()=>{
        let popUp = document.querySelector(".DetailedImg-popUp")
        console.log(input)
        popUp.style.display = "flex"

    }
    const popUpAddImgClose = ()=>{
        let popUp = document.querySelector(".DetailedImg-popUp")
        popUp.style.display = "none"

    }
    const saveImg = (input)=>{

        dispatchFun("/api/addCategoriesImg",{
            name: state.name,
            input:input,
            email:email
        })
        dispatchFunTwo("/api/userGet",{
            email:email
        })
    }

    return (
        <>
            <div className="DetailedImg">
                <div   className="DetailedImg-popUp">
                    <div className="DetailedImg-popUp_block">
                        <p>Вставьте url картинки ({state.text})</p>
                        <input onChange={event=>inputEdit(event.target.value)} type="text"/>
                        <button onClick={()=>saveImg(input)}>
                            Сохранить
                        </button>
                        <div className="DetailedImg-popUp_block__close" onClick={()=>popUpAddImgClose()} >X</div>
                    </div>
                </div>
                <div className="DetailedImg-block">
                    <div className="DetailedImg-block_name">
                        <h2>{state.text}</h2>
                    </div>
                    <div className="DetailedImg-block_box">
                        {img(state)}
                        {/*<div onClick={()=>popUpAddImg()} className="DetailedImg-block_box__img">*/}
                        {/*    <p>+</p>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </>
    )

}
export default UserDetailCategories