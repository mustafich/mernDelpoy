import React from "react"
import "./css/profile.css"
const ProfileTrue = ({state}) => {

    return (
        <>
            <div className="profile">
                <div className="profile-block">
                    <div className="profile-block_img">
                        <img src={state.photo} alt="user"/>
                    </div>
                    <div className="profile-block_info">
                        <div className="profile-block_info__text">
                            <p>Имя: </p>
                            <p>{state.first_name}</p>
                        </div>
                        <div className="profile-block_info__text">
                            <p>Фамилия: </p>
                            <p>{state.last_name}</p>
                        </div>
                        <div className="profile-block_info__text">
                            <p>Город: </p>
                            <p>{state.city}</p>
                        </div>

                        <div className="profile-block_info__text">
                            <p>Телефон:</p>
                            <p>{state.phone}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default ProfileTrue