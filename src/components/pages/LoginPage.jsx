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
  import axios from 'axios';
  import { sha256, sha224 } from 'js-sha256';
  import logo from '../../img/logo.png';

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
        this.submitHandler = this.submitHandler.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
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
    
    serialize = obj => {
        let str = [];
        for (let p in obj)
          if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          }
        return str.join("&");
    };

    submitHandler(e) { 
        e.preventDefault();

        this.$f7.preloader.show();

        axios('http://localhost/pertamina/index.php?r=api/login-post', {
            method: "POST",
            proxyHeaders: false,
            credentials: false,
            headers: {
              
                      "Content-Type": "application/x-www-form-urlencoded",
                      "Accept": "application/json"
            },
            data: this.serialize({
                username: this.state.username,
                password: this.state.password,               
            })
        }).then(response => { 
           
            if(response.data.msg === 'success'){
                let data = [];
                data = [response.data.data.nama_pegawai, response.data.role.nama_jabatan]
                localStorage.setItem('loginData', data);  
                
                console.log('local'+localStorage.getItem('loginData'));
                this.$f7router.navigate('/home/')
                this.$f7.preloader.hide();
            }else{
                alert('Nik atau Password Salah !')
                this.$f7.preloader.hide();
            }
            console.log(response.data.msg)
        }).catch(error => {
            console.log(error.response)
        });        
       
    }


    render() {        
        return (            
            
            <Page loginScreen name="login">            
                    <LoginScreenTitle><img src={logo} width="150vw" alt="logo"/></LoginScreenTitle>
                    <List form >
                        <ListItem>
                        <Label>Nik Pegawai</Label>
                        <Input name="username" id="username" placeholder="Nik Pegawai" type="text" value={this.state.username} onChange={this.handleChangeUsername}></Input>
                        </ListItem>
                        <ListItem>
                        <Label>Password</Label>
                        <Input name="password" id="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChangePassword}></Input>
                        </ListItem>
                    </List>
                    <List style={styleList}>                        
                        <Button className="col"  type="submit" round outline onClick={this.submitHandler}>Sign In</Button>              
                    </List>                
            </Page>                    
               
        );
    }
}

export default LoginPage;