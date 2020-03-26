import React from "react"
import "./css/index.css"
import { useState } from 'react';
const DetailedImg = ({state,dispatchFun,dispatchFunTwo,func,email})=>{

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
        let reg = /[Яа-яЁё]/
        const valueFun = ()=>{
            var error = null
            if (input.length <=2) {
                error = "Заполните все поля!"
            }

            if(error===null) {
                dispatchFun("/api/addCategoriesImg",{
                    name: state.name,
                    input:input,
                    email:email
                })
                dispatchFunTwo("/api/userGet",{
                    email:email
                })
            } else {
                let payload = {
                    status: false,
                    name: "addCategories",
                    message: error
                }
                dispatchFun(null,payload)
            }
        }
        valueFun()


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
                        <div onClick={()=>popUpAddImg()} className="DetailedImg-block_box__img">
                            <p>+</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default DetailedImg