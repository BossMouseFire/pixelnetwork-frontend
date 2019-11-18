import React from 'react'
import {Form, Button, Navbar, Alert} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/auth.css'
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
                <div>
                    <Navbar  expand="lg" variant="dark" className={'logo'}>
                        <Navbar.Brand href="#home" >
                            <a>PixelNetwork</a>
                        </Navbar.Brand>
                    </Navbar>
                </div>
                <div className={'box'}>
                    <div>
                        <img src={require("./image/logo.png")} className={'packman'} alt={"Лого"}/>
                    </div>
                    <div>
                    <div className={'auth'}>
                        <form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Логин" onChange={this.handleChangeEmail} style={{backgroundColor: '#eddefc'}}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Пароль" onChange={this.handleChangePassword} style={{backgroundColor: '#eddefc'}}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicChecbox">
                                <Form.Check type="checkbox" label="Запомни меня"/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Войти
                            </Button>
                        </form>
                    </div>
                    <div className={'sign'}>
                        <form>
                            <h3>Впервые в PixelNetwork</h3>
                            <hr/>
                            <Form.Group controlId="formBasicEmail">
                                <div className={'sign_box'}>
                                    <Form.Control  placeholder="Имя" onChange={this.handleChangeEmail} style={{backgroundColor: '#eddefc'}}/>
                                    <Form.Control  className={'name'} placeholder="Фамилия" onChange={this.handleChangePassword} style={{backgroundColor: '#eddefc'}}/>
                                </div>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control placeholder="Номер телефона или почта" onChange={this.handleChangeEmail} style={{backgroundColor: '#eddefc'}}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control placeholder="Пароль" onChange={this.handleChangePassword} style={{backgroundColor: '#eddefc'}}/>
                            </Form.Group>
                            <Button className={'button_auth'} variant="success" type="submit">
                                Зарегистрироваться
                            </Button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Auth;