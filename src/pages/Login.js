import React, { Component } from 'react';

class Login extends Component {
    handleBack = () => {
        // this.props.history.push('/login/aa')
        console.log('back', this.props.history)
    }
    render () {
        return (
            <div>
                <button onClick={this.handleBack}>点我返回</button>
            </div>
        )
    }
} 

export default Login;