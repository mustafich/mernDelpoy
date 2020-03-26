import React from "react"

import {connect} from "react-redux";
import ContentVerification from "../../hooks/auth.hook";
import Header from "./Header";
import {ActionLogin} from "../../actions/login";
import HeaderTrue from "./HeaderTrue";
import {saveImgApi} from "../../actions/infoInput"




const ContainerHeader = ({state,ActionLogin,saveImgApi}) => {
    return (
        <ContentVerification state={state} falseComponent={Header} trueComponent={HeaderTrue} dispatchFun={ActionLogin} dispatchFunTwo={saveImgApi}/>
    )
}

const mapStateToProps = (state) => {
    return {
        state:state.Login.user,

    };
};

const mapDispatchToProps = dispatch => {

    return {
        ActionLogin: (body) => dispatch(ActionLogin(body)),
        saveImgApi: (url,body) => dispatch(saveImgApi(url,body)),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainerHeader);
