import React, { Component } from 'react';
import {
    Page,
    LoginScreen,
    List,
    View,
    LoginScreenTitle,
    ListItem,
    Input,
    Label,
    BlockTitle,
    Row,
    Button,
    Range,
    Block,
    BlockFooter,
    ListButton
  } from 'framework7-react';

  import logo from '../../img/logo.png'

  const styleList = {
      width:'50%'
  }


class LoginPage extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            username: "",
            password: ""
        };
    }

  

    handleChangeUsername = event => {
        this.setState({
            username: event.target.value
        });
    }
    
    handleChangePassword = event => {
        this.setState({
            password: event.target.value
        });
    }
    
    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        console.log('username '+this.state.username)
        console.log('password '+this.state.password)
        return (            
            
            <Page loginScreen name="login">
                {/* <LoginScreen id="login-screen">        */}
                    <LoginScreenTitle><img src={logo} width="150vw" alt="logo"/></LoginScreenTitle>
                    <List form onSubmit={this.handleSubmit}>
                        <ListItem>
                        <Label>Username</Label>
                        <Input name="username" id="username" placeholder="Username" type="text" value={this.state.username} onChange={this.handleChangeUsername}></Input>
                        </ListItem>
                        <ListItem>
                        <Label>Password</Label>
                        <Input name="password" id="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChangePassword}></Input>
                        </ListItem>
                    </List>
                    <List style={styleList}>                        
                        <Button className="col"  type="submit" round outline>Sign In</Button>              
                    </List>
                {/* </LoginScreen> */}
            </Page>                    
               
        );
    }
}

export default LoginPage;