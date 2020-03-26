import React from "react"

import {connect} from "react-redux";


import {LoginFetch} from "../../../actions/login"
import errorSend from "../../../hooks/error.message";



 class FromLogin extends React.Component {
    state = {
        form: {
            email: "",
            password: "",

        },
        formValidate: {
            email: "suspense",
            password: "suspense",
        },
        globalverification: false,
        onBlur: "email",
        errorEmail:{
            name:null,
            message:null,
        },
        errorPassword:{
            name:null,
            message:null,
        },
        isAuthenticated: false
    }


     async componentWillReceiveProps(nextProps) {

         await this.setState({
             errorEmail:{
                 name:nextProps.state.errorEmail.name,
                 message:nextProps.state.errorEmail.message,
             },
             errorPassword:{
                 name:nextProps.state.errorPassword.name,
                 message:nextProps.state.errorPassword.message,
             }
         })
         if(this.state.errorEmail.name==="email") {
             this.setState({
                 formValidate: {
                     ...this.state.formValidate,
                     ["email"]: "error"
                 }
             });
         }
         if(this.state.errorPassword.name==="password") {

             this.setState({
                 formValidate: {
                     ...this.state.formValidate,
                     ["password"]: "error"
                 }
             });
         }
     }



     handleChange = () => (event) => {
         let reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         switch (event.target.id) {
            case 'email':
                this.setState({
                    form: {
                        ...this.state.form,
                        email: event.target.value
                    }
                })

                if (reEmail.test(event.target.value) === false) {
                    this.setState({
                        formValidate: {
                            ...this.state.formValidate,
                            [event.target.id]: "error"
                        }
                    });
                } else {
                    this.setState({

                        formValidate: {
                            ...this.state.formValidate,
                            [event.target.id]: "ok"
                        },
                        errorEmail:{
                            name:null,
                            message:null
                        }
                    });
                }
                break
            case 'password':
                this.setState({
                    form: {
                        ...this.state.form,
                        password: event.target.value
                    },
                    errorPassword:{
                        name:null,
                        message:null
                    }
                })
                if (event.target.value.length <= 1) {
                    this.setState({
                        formValidate: {
                            ...this.state.formValidate,
                            [event.target.id]: "error"
                        }
                    });
                } else {
                    this.setState({
                        formValidate: {
                            ...this.state.formValidate,
                            [event.target.id]: "ok"
                        }
                    });
                }
                break
        }

    }

    buttonSend() {
        let arrArguments =[]
        for (var key in this.state.formValidate) {
            arrArguments.push(this.state.formValidate[key])
        }
        if (arrArguments.every((e)=>{return e==="ok"})===true) {
            const url = "/api/login"

            this.props.dispatchFun(url,{
                email: this.state.form.email,
                password:this.state.form.password,
            })






            // this.props.loginFetchData("/api/login",{
            //     email: this.state.form.email,
            //     password:this.state.form.password,
            // })
            //    then(data=>{
            //     if (data.name==="email") {
            //         this.setState({
            //             formValidate: {
            //                 ...this.state.formValidate,
            //                 ["email"]: "error"
            //             },
            //             errorEmail:{
            //                 ...this.state.errorEmail,
            //                 name:data.name,
            //                 message:data.message
            //             }
            //         });
            //     }
            //     if (data.name==="password") {
            //
            //         this.setState({
            //             formValidate: {
            //                 ...this.state.formValidate,
            //                 ["password"]: "error"
            //             },
            //             errorPassword:{
            //                 ...this.state.errorPassword,
            //                 name:data.name,
            //                 message:data.message
            //             }
            //         })}
            //     else {
            //         console.log(data)
            //     }
            // });


            this.setState({
                ...this.state,
                globalverification:true
            })
        } else {
            this.setState({
                ...this.state,
                globalverification:false
            })
        }

    }
    renderValue(type) {
        if (this.state.formValidate[type] === "suspense") {
            return (
                <div className="form-block_box__input">
                    <div className="form-block_box__input___img">
                        <i className="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <input
                        autoFocus
                        id={type}
                        name={type}
                        value={this.state.form[type]}
                        onChange={this.handleChange()}
                    />
                </div>
            )
        } else if (this.state.formValidate[type] === "error") {
            return (
                <div className="form-block_box__input verificationNo">
                    <div className="form-block_box__input___img">
                        <i className="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <input
                        autoFocus
                        className="verificationNo"
                        id={type}
                        name={type}
                        value={this.state.form[type]}
                        onChange={this.handleChange()}
                    />

                    <div className="form-block_box__input___verification">
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </div>

                </div>

            )

        } else if (this.state.formValidate[type] === "ok") {

            return (
                <>
                    <div className="form-block_box__input verificationOk">
                        <div className="form-block_box__input___img ">
                            <i className="fa fa-user" aria-hidden="true"></i>
                        </div>
                        <input
                            autoFocus
                            className={"verificationOk"}
                            id={type}
                            name={type}
                            value={this.state.form[type]}
                            onChange={this.handleChange()}
                        />
                        <div className="form-block_box__input___verification">
                            <i className="fa fa-check" aria-hidden="true"></i>
                        </div>
                    </div>

                </>
            )
        }
    }

     render() {

        return (
            <div className="form">
                <form >
                    {this.formBlock}
                    <div className="form-block">
                        <div className="form-block_box">
                            {errorSend(this.state,"email")}
                            <div className="form-block_box__text">
                                <p>Email</p>
                            </div>
                            {this.renderValue("email")}
                        </div>
                        <div className="form-block_box">
                            {errorSend(this.state,"password")}
                            <div className="form-block_box__text">
                                <p>Password</p>
                            </div>
                            {this.renderValue("password")}
                        </div>
                        <div onClick={() => this.buttonSend()}>Войти</div>
                    </div>
                </form>
            </div>
        )
    }
}
export default FromLogin
