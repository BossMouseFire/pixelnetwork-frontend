import React from 'react'
import {Navbar, Form, FormControl, Button,  Nav} from "react-bootstrap";

class Main extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <Navbar  expand="lg" variant="dark" className={'logo'} style={{display: "flex"}}>
                        <Navbar.Brand href="#home" style={{flex: 0.3}}>
                            <text className={'logo_text'}>PixelNetwork</text>
                        </Navbar.Brand>
                        <Form inline className={"form_search"} style={{flex: 0.6}}>
                            <FormControl type="text" placeholder="Search" className="mr-lg-2 "/>
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Nav.Link href="#home"  className={"form_button"} style={{flex: 0.07}}>Профиль</Nav.Link>
                        <Nav.Link className={"form_button"} href="#link">Выйти</Nav.Link>
                    </Navbar>
                </div>
                <h1>
                    ВЫ АВТОРИЗОВАНЫ!
                </h1>
            </div>
        )
    }
}
export default Main;