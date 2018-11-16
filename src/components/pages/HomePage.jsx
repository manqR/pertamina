import React from 'react';
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
    Icon
} from 'framework7-react';
import logo from '../../img/logo.png'
import user from '../../img/user.png'

export default () => (
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
                <Block>
                    <p>Tab 1 content</p>
                      ...
                </Block>
            </Tab>
            <Tab id="tab-2" className="page-content">              
                <Card
                    title="Card header"
                    content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
                    footer="Card footer">
                </Card>               
            </Tab>
            <Tab id="tab-3" className="page-content user">               
                <img src={user} width="150vw" alt="user"/>                    
                <p className="username">Adi Nugraha</p>
                <Block>
                   <Button outline round>Logout</Button>
                </Block>
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
