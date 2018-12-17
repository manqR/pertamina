import React, { Component } from 'react';
import {
    Page,
    Navbar,   
    Toolbar,
    Link,
    NavTitle,         
    Block,
    BlockTitle,
    Card,
    List,
    ListItem,
    Row,
    Col,
    Button,
    Tabs,
    Tab,
    Icon,
    View
} from 'framework7-react';
import logo from '../../img/logo.png'
import user from '../../img/user.png'

const StyleHome = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid #e74c3c',
    height: '18%',
    borderRadius: '50%'
    
}

const StyleIcons = {
    color: '#e74c3c',
    lineHeight: '2',
    fontSize: '53px'
}

const StyleLabel = {
    position: 'absolute',
    display: '-webkit-box',
    margin: '13px',
    color: '#e74c3c',
    fontFamily: 'framework-7',
    fontSize: '16px'
}

const styleList = {
    width:'50%',
    left:'25%'
}

class HomePage extends Component {

    
    logout = () => {
       
            localStorage.removeItem('loginData');
            // f7.views.create('.view-main', { url: '/login/' })    
            this.$f7ready((f7)=>{
                // alert('logout')
                // f7.router.routes.push('/home/')
                // f7.navigate('/home/')
            //    f7.mainView.router.routes.load({url: "/home/"})
                this.$f7router.navigate('/login/')
            })
           
    }

    render() {
        return (
            <Page>
                <Navbar>      
                    <NavTitle><img src={logo} width="150vw" alt="logo"/></NavTitle>    
                </Navbar>
                
                <Toolbar tabbar>
                    <Link tabLink="#tab-1" tabLinkActiNve><Icon f7="home"></Icon></Link>
                    <Link tabLink="#tab-2"><Icon f7="list"></Icon></Link>
                    <Link tabLink="#tab-3"><Icon f7="person"></Icon></Link>
                    <Link tabLink="#tab-4"><Icon f7="help"></Icon></Link>
                </Toolbar>
                <Tabs>
                    <Tab id="tab-1" className="page-content" tabActive>
                        <Block style={StyleHome}>                   
                            <Link href="/register/"><Icon style={StyleIcons} f7="document_check"></Icon></Link>
                            <label  style={StyleLabel} >Register</label>
                        </Block>
                    </Tab>
                    <Tab id="tab-2" className="page-content history">              
                        <Card
                            title="Card header"
                            content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
                            footer="Card footer">
                        </Card>               
                    </Tab>
                    <Tab id="tab-3" className="page-content user">               
                        <img src={user} width="150vw" alt="user"/>                    
                        <p className="username">Adi Nugraha</p>
                        <List style={styleList}>     
                            <Button className="col"  type="submit" round outline onClick={this.logout}>Logout</Button>      
                        </List>
                    </Tab>
                    <Tab id="tab-4" className="page-content">
                        <Block>
                            <p>Tab 3 content</p>
                            ...
                        </Block>
                    </Tab>
                </Tabs>
            </Page>
        );
    }
}

export default HomePage;