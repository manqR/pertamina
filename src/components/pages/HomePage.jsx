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
    View,
    Chip
} from 'framework7-react';
import logo from '../../img/logo.png'
import user from '../../img/user.png'

const StyleHome = {
    width: '111px',
    border: '1px solid #e74c3c',
    borderRadius: '21px'    
}

const StyleIcons = {
    color: '#e74c3c',
    lineHeight: '2',
    fontSize: '53px'
}

const StyleLink = {
    textAlign: 'center',
     width: '100%'
}
const StyleLinkCard = {
    textAlign: 'justify',
     width: '100%',
     color:'#000'
}

const StylContent = {    
        display: 'flex',
        justifyContent: 'space-around',    
        margin: '0 auto',        
        padding: '10px 0',
        margin:'10px',
        marginTop: '62vw'
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

    constructor(props){
        super(props);

        this.state = {
            data  : '',
            datas : [],
            notif : []
        }
    }
    
    componentDidMount() {            

       

        this.mounted = true;    

        try{
            this.data = localStorage.getItem('loginData').split(',')
        }catch(err) {
           this.data = '';
        }
        
        const BASE_URL = `http://localhost/pertamina/index.php?r=api/get-histori&id=${this.data[2]}`; 
        fetch(BASE_URL)
        .then(response => response.json())
        .then(json => {
            this.setState({ datas: json});  
            // console.log(this.state.remarks)     
        });   

        const BASE_URL2 = `http://localhost/pertamina/index.php?r=api/get-notifikasi&id=${this.data[2]}`; 
        fetch(BASE_URL2)
        .then(response => response.json())
        .then(json => {
            this.setState({ notif: json});  
            // console.log(this.state.notif.msg)     
        });     
        
    }

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

    componentWillUnmount() {
        this.mounted = false;
    }

    
    render() {
     
        try{
            this.data = localStorage.getItem('loginData').split(',')
        }catch(err) {
           this.data = '';
        }
    

        const historyData = this.state.datas.map((hist,i) => {
            let status = ''
            let words = ''
            if(hist.status == 1){
                status = <Chip text="Pending" color="orange"></Chip>
                words = "Form Menunggu Approval dari SPV";
            }else if (hist.status == 2){                
                status = <Chip text="Approve" color="blue"></Chip>
                words = 'Form Sudah di Approve dan sedang menunggu Teknisi'
            }else if(hist.status == 3){                
                status = <Chip text="on Progress" color="red"></Chip>
                words = 'Teknisi sedang melakukan pekerjaan atas Request ini'
            }else if(hist.status == 4){                
                status = <Chip text="Approve Done" color="green"></Chip>
                words = 'Teknisi sudah selesai dan bisa di cek kembali'
            }
            // console.log(hist)
            return   <Card key={i}
                        title={hist.kode_form}
                        content={words}
                        footer={status}>
                    </Card>   
            // console.log(remrk.keterangan)
        })    
        let NotifikasiData =''
        try{
            NotifikasiData = this.state.notif.map((note,i) => {
                let status = ''
                let words = ''
                if(note.status == 1){
                    status = <Chip text="Pending" color="orange"></Chip>
                    words = "Form Menunggu Approval dari SPV";
                }else if (note.status == 2){                
                    status = <Chip text="Approve" color="blue"></Chip>
                    words = 'Form Sudah di Approve dan sedang menunggu Teknisi'
                }else if(note.status == 3){                
                    status = <Chip text="on Progress" color="red"></Chip>
                    words = 'Teknisi sedang melakukan pekerjaan atas Request ini'
                }else if(note.status == 4){                
                    status = <Chip text="Approve Done" color="green"></Chip>
                    words = 'Teknisi sudah selesai dan bisa di cek kembali'
                }
                // console.log(hist)
                let link = `/detail/id/${note.kode_form}/`;
                return   <a key ="1" style={StyleLinkCard} href={link}>
                            <Card key={i}
                                title={note.kode_form}
                                content={words}
                                footer={status}>
                            </Card>  
                        </a>
                // console.log(remrk.keterangan)
            })    
        }catch(e){
            NotifikasiData = 'Data Tidak ditemukan';
        }
        return (
            <Page>
                <Navbar>      
                    <NavTitle><img src={logo} width="150vw" alt="logo"/></NavTitle>    
                </Navbar>
                
                <Toolbar tabbar>
                    <Link tabLink="#tab-1" tabLinkActiNve><Icon f7="home"></Icon></Link>
                    <Link tabLink="#tab-2"><Icon f7="list"></Icon></Link>
                    <Link tabLink="#tab-3"><Icon f7="person"></Icon></Link>
                    <Link tabLink="#tab-4"><Icon f7="info"></Icon></Link>
                </Toolbar>
                <Tabs>
                    <Tab id="tab-1" className="page-content" tabActive>
                        <div style={StylContent}>
                            <Block style={StyleHome}> 
                                <span ><Link style={StyleLink} href="/register/"><Icon style={StyleIcons} f7="document_check"></Icon></Link></span>
                            </Block>

                            <Block style={StyleHome}> 
                                <span ><Link style={StyleLink} href="/kerusakan/"><Icon style={StyleIcons} f7="gear_fill"></Icon></Link></span>                                                  
                            </Block>
                        </div>
                        {/* <Block style={StyleHome}>                   
                            <Link href="/register/"><Icon style={StyleIcons} f7="document_check"></Icon></Link>
                            <label  style={StyleLabel} >Kerusakan</label>
                       
                            <Link href="/register/"><Icon style={StyleIcons} f7="document_check"></Icon></Link>
                            <label  style={StyleLabel} >Register</label>
                        </Block> */}
                    </Tab>
                    <Tab id="tab-2" className="page-content history">              
                        {historyData}         
                    </Tab>
                    <Tab id="tab-3" className="page-content user">               
                        <img src={user} width="150vw" alt="user"/>                    
                        <p className="username">{this.data[0]}</p>
                        <p className="username">{this.data[1]}</p>
                        <List style={styleList}>     
                            <Button className="col"  type="submit" round outline onClick={this.logout}>Logout</Button>      
                        </List>
                    </Tab>
                    <Tab id="tab-4" className="page-content">
                        {NotifikasiData}
                    </Tab>
                </Tabs>
            </Page>
        );
    }
}

export default HomePage;