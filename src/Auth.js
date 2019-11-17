import React from 'react'

class Auth extends React.Component {
    state = {
        email: '',
        password: '',
    };

    handleChangeEmail = event => {
        this.setState({email: event.target.value}, () => {
            console.log(this.state.email)
        })
    };

    handleChangePassword = event => {
        this.setState({password: event.target.value}, () => {
            console.log(this.state.password)
        })
    };
    render() {
        return (
            <div>
                <form method="POST" action="#">
                    <label for="email">Email: </label>
                    <input name="email" id="email" onChange={this.handleChangeEmail} />
                    <br></br>
                    <label for="password">Password: </label>
                    <input name="password" id="password" type="password" onChange={this.handleChangePassword}/>
                    <br></br>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default Auth;