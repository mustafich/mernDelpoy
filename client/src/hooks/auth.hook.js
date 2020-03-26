import React from "react"
import {LoginFetch} from "../actions/login";
import {connect} from "react-redux";



class ContentVerification extends React.Component {

    componentWillReceiveProps(nextProps, nextContext) {
       this.setState({
           isAuthenticated:nextProps.isAuthenticated
       })
   }
    render() {

        return (
            <>
                {!this.props.isAuthenticated?
                    <this.props.falseComponent email={this.props.email} history={this.props.history} state={this.props.state} dispatchFun={this.props.dispatchFun} dispatchFunTwo={this.props.dispatchFunTwo} func={this.props.func} manyFunc={this.props.manyFunc}/>:
                    <this.props.trueComponent email={this.props.email} history={this.props.history} state={this.props.state} dispatchFun={this.props.dispatchFun} dispatchFunTwo={this.props.dispatchFunTwo} func={this.props.func} manyFunc={this.props.manyFunc}/>}
            </>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        isAuthenticated:state.Login.Authenticated.isAuthenticated,
        email:state.Login.user.email||null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        LoginFetch: (url,body) => dispatch(LoginFetch(url,body))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentVerification);
