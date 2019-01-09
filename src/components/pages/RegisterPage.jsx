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
    Block,    
  } from 'framework7-react';

import axios from 'axios';

  
class RegisterPage extends Component {


    constructor() {
        super();
        this.state = {
          form: {
            check : [],
            remarks : [],
            label : []
          },
          datas : []
        };        
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

   
    componentDidMount() {            

        this.mounted = true;    
        const BASE_URL = 'http://localhost/pertamina/index.php?r=api/get-label'; 
        fetch(BASE_URL)
        .then(response => response.json())
        .then(json => {
            this.setState({ datas: json});  
            // console.log(this.state.remarks)     
        });     
        
    }

    changeHandler(e) {
        e.persist();
        let store = this.state;
        store.form[e.target.name] = e.target.value;
        this.setState(store);        
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
       
        // let rmrks = [
           
            // const stateLabel = this.state.datas.map((labelRmrk, i)=>{
            //                         return this.state.form.remarks+i
            //                     })
            // let rmrks = [
            //     stateLabel
            // ]
           

            // console.log(stateLabel)

         
        // ]
        axios('http://localhost/pertamina/index.php?r=api/checklist', {
            method: "POST",
            headers: {
              Accept: "application/json",
                      "Content-Type": "application/x-www-form-urlencoded"
            },
            data: this.serialize({
                check: this.state.form.check,
                remarks: 'a',
                label: this.state.form.label,                
            })
        }).then(response => {
            // console.log(response);
        }).catch(error => {
            console.log(error.response);
        });
    }

   
   
    componentWillUnmount() {
        this.mounted = false;
    }

    render() {       
        
        
      
        let data = localStorage.getItem('loginData').split(',')
        const { form } = this.state;
     
        const forms = this.state.datas.map((remrk,i) => {

            let valName = `remarks${remrk.urutan}`;
            return  <ListItem key = {remrk.urutan} title={remrk.keterangan}>                          
                        <Input style={{width:'85%'}} type="text" placeholder={remrk.remarks} value={form.remarks[i]} onChange={this.changeHandler} name={valName}/>  
                        <Input type="hidden" style={{'display':'none'}} value={remrk.keterangan} name="label[]"/>                      
                        <Toggle 
                            name="check[]"
                            color="green" slot="after"
                            onChange={(e)=>console.log('toggle is checked?', e.target.checked)}
                            onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>
                        </Toggle>
                    </ListItem>
            console.log(remrk.keterangan)
        })         
        return (
            <Page name="register">
                <Navbar title="Form Checklist" backLink="Back" />   

                <List form>                    
                
                   { forms }

                    <ListItem>
                        <Label>Checked By :</Label>
                        <Input type="text" placeholder={data[0] != '' ? data[0] : '....' } readonly={data[0] != '' ? true : false} value={data[0]}></Input>
                    </ListItem>        
                    <Block strong>            
                        <Row tag="p">                    
                            <Button className="col" round outline onClick={this.submitHandler}>Submit</Button>
                        </Row>            
                    </Block>

                </List>
    
            </Page>
        );
    }
}

export default RegisterPage;