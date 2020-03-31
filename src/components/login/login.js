import React, { Component } from 'react'
import SignIn from "./signin";
import Register from "./register";

class Login extends Component {
    render () {
        return (
            <div>
            <Register history={this.props.history}/>
            <SignIn history={this.props.history}/>
            </div>            
        )
    }
}

export default Login