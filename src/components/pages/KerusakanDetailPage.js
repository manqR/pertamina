import React, { Component } from 'react';
import {
    Page,
    Navbar,
    List,
    ListItem,
    Input,
    Label,
    Toggle,
    BlockTitle,
    Row,
    Button,
    Range,
    Block
  } from 'framework7-react';

class KerusakanDetail extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        
        
        this.mounted = true;    
        let id = this.$f7route.params.detailId
        try{
            this.data = localStorage.getItem('loginData').split(',')
        }catch(err) {
           this.data = '';
        }
        
        const BASE_URL = `http://localhost/pertamina/index.php?r=api/get-detailnotifikasi&id=${id}`; 
        fetch(BASE_URL)
        .then(response => response.json())
        .then(json => {
            this.setState({ data: json});  
            console.log(this.state.data.status)     
        });   

    }
    componentWillUnmount(){

    }

    

    render() {

        const approve = this.state.data.map((data,i) => {
         
            return  <ListItem key = {data.urutan} title={data.keterangan.toUpperCase()}>                          
                        <Input style={{width:'85%'}} type="text" value={data.remarks} />                          
                        <Toggle 
                            checked = {data.status == 1 ? true : false }
                            disabled
                            name="check"
                            color="green" slot="after"
                            onChange={(e)=>console.log('toggle is checked1?', e.target.checked)}
                            onToggleChange={(checked)=>console.log('toggle is checked2?', checked)}>
                        </Toggle>
                    </ListItem>
            // console.log(data.status)
        })         

        return (
            <Page name="detail">
                 <Navbar title="Form Approval" backLink="Back" />  
                 <List>  
                    {approve}
                </List>

                <Block strong>            
                    <Row tag="p">                    
                        <Button className="col" round color="green" outline onClick={this.submitHandler}>Approve</Button>
                        <Button className="col" round outline onClick={this.submitHandler}>Reject</Button>
                    </Row>            
                </Block>
                
            </Page>
        );
    }
}

export default KerusakanDetail;