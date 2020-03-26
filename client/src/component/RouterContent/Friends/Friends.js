import React from "react"
import UserAll from "./UserAll";
import UserFriends from "./UserFriends";
import {allUserApi} from "../../../requestApi/allUserApi";
import "./css/index.css"

export default class Friends extends React.Component {
    state = {
        filter: {
            name: "All",
        },
        allUser: [],
        userBlockViev:null

    }

    componentDidMount() {

        allUserApi("/api/allUser", {
            email: this.props.email
        }).then(res => {
            this.setState({
                allUser: res.allUser,
                userBlockView:this.props.email
            })
        })
    }

    render() {

        return (
            <>
                {this.state.filter.name === "All" ? <UserAll userBlockView={this.state.userBlockView} allUser={this.state.allUser} manyFunc={this.props.manyFunc} func={this.props.func}/> : <UserFriends/>}
            </>
        )
    }
}