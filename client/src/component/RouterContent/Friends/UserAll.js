import React from "react"
import Route from "react-router-dom/es/Route";

const UserAll = ({allUser,func,manyFunc,userBlockView}) => {

    const View = allUser.map(e => {

        if(e.email!==userBlockView) {
            return (
                <Route render={({history}) => (
                    <div  onClick={() => {history.push(`/user/${e._id}`)
                        func(e._id)
                        manyFunc(e)
                    }}
                          key={e._id} className="userAll-block_box">
                        <div className="userAll-block_box__photo">
                            <img src={e.photo} alt=""/>
                        </div>
                        <div className="userAll-block_box__name">
                            <p>{e.first_name}</p>
                        </div>
                    </div>
                )}/>
            )
        }

    })
    return (
        <>
            <div className="userAll">
                <h2>Все пользователи</h2>
                <div className="userAll-block">
            {View}
                </div>
            </div>
        </>
    )

}
export default UserAll