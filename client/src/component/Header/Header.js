import React, {useContext} from "react"
import "./css/index.css"
import {Route} from "react-router-dom";


const Header = ({state}) => {

    return (
      <>
          <div className="header">
              <div className="container">
                  <div className="header-block">
                      <div className="header-block_logo">
                          <h1>LOGO</h1>
                      </div>
                      <div className="header-block_verification">
                          <div className="header-block_verification__login">
                              <Route render={({history}) => (
                                  <div  onClick={() => {
                                      history.push(`/login`)}}>
                                      <h1>Войти</h1>
                                  </div>
                              )}/>
                          </div>
                          <h1>/</h1>
                          <div className="header-block_verification__registration">
                              <Route render={({history}) => (
                                  <div  onClick={() => {
                                      history.push(`/registration`)}}>
                                      <h1>Регистрация</h1>
                                  </div>
                              )}/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
    )
}
export default Header