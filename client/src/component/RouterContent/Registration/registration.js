import React from "react"

import "./css/index.css"
import errorSend from "../../../hooks/error.message";






class FromRegistration extends React.Component {
    state = {
        form: {
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            city: "",
            password: ""
        },
        formValidate: {
            first_name: "suspense",
            last_name: "suspense",
            email: "suspense",
            phone: "suspense",
            city: "suspense",
            password: "suspense"
        },
        globalverification: true,
        onBlur: "first_name",
        errorEmail:{
            name:null,
            message:null,
        },
        errorPassword:{
            name:null,
            message:null,
        }
    }



   async componentWillReceiveProps(nextProps) {
         await this.setState({
            errorEmail:{
                name:nextProps.state.errorEmail.name,
                message:nextProps.state.errorEmail.message,
            },
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
       if (this.state.errorEmail.name===null) {
           this.props.history.push('/login')
       }

    }


    handleChange = () => (event) => {
        let reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let rePhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        switch (event.target.id) {
            case 'first_name':
                this.setState({
                    form: {
                        ...this.state.form,
                        [event.target.id]: event.target.value
                    }
                });
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
            case 'last_name':
                this.setState({
                    form: {
                        ...this.state.form,
                        last_name: event.target.value
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
            case 'email':
                this.setState({
                    form: {
                        ...this.state.form,
                        email: event.target.value
                    },
                    errorEmail:""
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
                        }
                    });
                }
                break
            case 'phone':
                this.setState({
                    form: {
                        ...this.state.form,
                        phone: event.target.value
                    }
                })

                if (rePhone.test(event.target.value) === false) {
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
            case 'city':
                this.setState({
                    form: {
                        ...this.state.form,
                        city: event.target.value
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
            case 'password':
                this.setState({
                    form: {
                        ...this.state.form,
                        password: event.target.value
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

    async buttonSend() {
        let arrArguments = []
        for (var key in this.state.formValidate) {
            arrArguments.push(this.state.formValidate[key])
        }
        if (arrArguments.every((e) => {
            return e === "ok"
        }) === true) {

            this.props.dispatchFun("/api/registration", {
                    first_name: this.state.form.first_name,
                    last_name: this.state.form.last_name,
                    email: this.state.form.email,
                    phone: this.state.form.phone,
                    city: this.state.form.city,
                    password: this.state.form.password,
                })
                this.setState({
                    ...this.state,
                    globalverification: true
                })



        } else {
            this.setState({
                ...this.state,
                globalverification: false
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
                <form>
                    <div className="form-block">
                        <div className="form-block_box">
                            <div className="form-block_box__text">
                                <p>First Name</p>
                            </div>
                            {this.renderValue("first_name")}
                        </div>
                        <div className="form-block_box">
                            <div className="form-block_box__text">
                                <p>Last Name</p>
                            </div>
                            {this.renderValue("last_name")}
                        </div>
                        <div className="form-block_box">
                            {errorSend(this.state,"email")}
                            <div className="form-block_box__text">
                                <p>E-Mail</p>
                            </div>
                            {this.renderValue("email")}
                        </div>
                        <div className="form-block_box">
                            <div className="form-block_box__text">
                                <p>Phone #</p>
                            </div>
                            {this.renderValue("phone")}
                        </div>
                        <div className="form-block_box">
                            <div className="form-block_box__text">
                                <p>City</p>
                            </div>
                            {this.renderValue("city")}
                        </div>

                        <div className="form-block_box">
                            <div className="form-block_box__text">
                                <p>password</p>
                            </div>
                            {this.renderValue("password")}
                        </div>
                        <div onClick={() => this.buttonSend()}>Зарегистрироваться</div>
                    </div>
                </form>
            </div>
        )
    }
}



export default FromRegistration