import React from 'react'
import {Route, Switch} from "react-router-dom";
import FromRegistration from "../RouterContent/Registration/registration";
import FromLogin from "../RouterContent/Login/Login";
import {LoginFetch} from "../../actions/login";
import {connect} from "react-redux";
import ContentVerification from "../../hooks/auth.hook";
import LoginTrue from "../RouterContent/Login/LoginTrue";
import ProfileTrue from "../RouterContent/Profile/ProfileTrue";
import Profile from "../RouterContent/Profile/Profile";
import {RegistrationFetch} from "../../actions/registration";
import {saveImgApi} from "../../actions/infoInput";
import ImgTrue from "../RouterContent/Img/imgTrue";
import DetailedImg from "../RouterContent/DetailedImg/DetailedImg";
import {renderBackCategories} from "../../actions/renderBackCategories";
import Friends from "../RouterContent/Friends/Friends";
import OneUser from "../RouterContent/OneUser/OneUser";
import UserDetailCategories from "../RouterContent/UserDetailsCategories/UserDetailsCategories";


class Router extends React.Component {

    state = {
        DetailedImg: null,
        status: null,
        name: null,
        message: null,
        oneUser:[],
        oneUserId:""
    }

    componentWillReceiveProps(nextProps, nextState) {

        this.setState({
            status: nextProps.InputInfo.status,
            name: nextProps.InputInfo.name,
            message: nextProps.InputInfo.message,
        })
        setTimeout(() => {
            this.setState({
                status: null,
                name: null,
                message: null
            })
        }, 4000)


    }

    ViewPopUp = (state) => {
        return (
            <div style={{top: state.status === null ? '-300px' : '25px'}} className="popUp">
                <div className="popUp-block">
                    <p>{state.message}</p>
                </div>
            </div>
        )
    }
    DetailedImg = (name) => {

        this.setState({
            DetailedImg: name
        });
    }
    DetailedUserOne = (user,id) => {

        this.setState({
            oneUser: user,
            oneUserId: user._id
        });
    }
    DetailedUserOneId = (id,name) => {
        this.setState({
            DetailedImg: name,
            oneUserId: id
        });
    }

    render() {


        return (
            <>
                <>
                    {this.ViewPopUp(this.state)}
                </>

                <Switch>
                <Route path="/registration" render={({history}) => {
                    return <ContentVerification history={history} state={this.props.stateRegistration}
                                                falseComponent={FromRegistration} trueComponent={LoginTrue}
                                                dispatchFun={this.props.RegistrationFetch}/>
                }}/>
                <Route path="/login" render={() => {

                    return <ContentVerification state={this.props.stateLogin} falseComponent={FromLogin}
                                                trueComponent={LoginTrue} dispatchFun={this.props.LoginFetch}/>
                }}/>
                <Route path="/profile" render={() => {
                    return <ContentVerification state={this.props.state} falseComponent={Profile}
                                                trueComponent={ProfileTrue}/>
                }}/>
                <Route exact path="/img" render={() => {
                    return <ContentVerification state={this.props.state} falseComponent={Profile}
                                                trueComponent={ImgTrue} dispatchFun={this.props.saveImgApi} dispatchFunTwo={this.props.renderBackCategories}
                                                func={this.DetailedImg}/>
                }}/>
                <Route exact path={`/img/${this.state.DetailedImg}`} render={() => {
                    try {
                        return <ContentVerification state={this.props.state.categories[this.state.DetailedImg]}
                                                    falseComponent={Profile} trueComponent={DetailedImg} dispatchFun={this.props.saveImgApi} dispatchFunTwo={this.props.renderBackCategories} func={this.DetailedImg} />
                    } catch (e) {
                        return <ContentVerification state={this.props.state} falseComponent={Profile}
                                                    trueComponent={DetailedImg}/>
                    }

                }}/>
                <Route exact path="/user" render={() => {
                    return <ContentVerification state={this.props.state} falseComponent={Profile}
                                                trueComponent={Friends}  manyFunc={this.DetailedUserOne} func={this.DetailedImg} />
                }}/>
                <Route exact  path={`/user/${this.state.oneUserId}`} render={() => {
                    try {
                        return <ContentVerification state={this.state.oneUser}
                                                    falseComponent={Profile} trueComponent={OneUser} dispatchFun={this.props.saveImgApi} dispatchFunTwo={this.props.renderBackCategories} func={this.DetailedImg} manyFunc={this.DetailedUserOneId}  />
                    } catch (e) {
                        return <ContentVerification state={this.props.state} falseComponent={Profile}
                                                    trueComponent={OneUser}/>
                    }

                }}/>
                <Route exact path={`/user/${this.state.oneUserId}/${this.state.DetailedImg}`} render={() => {

                    try {
                        return <ContentVerification state={this.props.state.categories[this.state.DetailedImg]}
                                                    falseComponent={Profile} trueComponent={UserDetailCategories} dispatchFun={this.props.saveImgApi} dispatchFunTwo={this.props.renderBackCategories} func={this.DetailedImg} />
                    } catch (e) {
                        return <ContentVerification state={this.props.state} falseComponent={Profile}
                                                    trueComponent={OneUser}/>
                    }
                }}/>
                </Switch>
            </>
        )
    }


}


const mapStateToProps = (state) => {

    return {
        state: state.Login.user,
        stateLogin: state.Login,
        stateRegistration: state.Registration,
        InputInfo: state.InputInfo,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        LoginFetch: (url, body) => dispatch(LoginFetch(url, body)),
        RegistrationFetch: (url, body) => dispatch(RegistrationFetch(url, body)),
        saveImgApi: (url, body) => dispatch(saveImgApi(url, body)),
        renderBackCategories: (url, body) => dispatch(renderBackCategories(url, body)),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Router);
