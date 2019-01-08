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

import axios from 'axios';

  
class RegisterPage extends Component {


    constructor() {
        super();
        this.state = {
          form: {
            check : [],
            remarks : [],
            label : []
          }
        };
        this._refs = {};
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

   
    changeHandler(index, e) {
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

        let rmrks = [
            this.state.form.remarks1,
            this.state.form.remarks2,
            // this.state.form.remarks3,
            // this.state.form.remarks4,
            // this.state.form.remarks5,
            // this.state.form.remarks6,
            // this.state.form.remarks7,
            // this.state.form.remarks8,
            // this.state.form.remarks9,
            // this.state.form.remarks10,
        ]
        axios('http://localhost/pertamina/index.php?r=api/checklist', {
            method: "POST",
            headers: {
              Accept: "application/json",
                      "Content-Type": "application/x-www-form-urlencoded"
            },
            data: this.serialize({
                check: this.state.form.check,
                remarks: rmrks,
                label: this.state.form.label,                
            })
        }).then(response => {
            // console.log(response);
        }).catch(error => {
            console.log(error.response);
        });
    }

   
    
    render() {        
        let data = localStorage.getItem('loginData').split(',')
        const { form } = this.state;
        return (
            <Page name="register">
                <Navbar title="Form Checklist" backLink="Back" />   

                <List form>                    
                
                    <ListItem title="Cleanliness">  
                        <Input style={{width:'85%'}} type="text" placeholder="Remarks" value={form.remarks1} onChange={this.changeHandler.bind(this, 1)} name="remarks1" />  
                        <Input type="hidden" style={{'display':'none'}} value="Cleanliness" name="label[]"/>                      
                        <Toggle 
                            name="check[]"
                            color="green" slot="after"
                            onChange={(e)=>console.log('toggle is checked?', e.target.checked)}
                            onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>
                        </Toggle>
                    </ListItem>
                    <ListItem title="Truck conditions">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value={form.remarks2} onChange={this.changeHandler.bind(this, 2)}  name="remarks2"/>
                        <Input type="hidden" style={{'display':'none'}} value="Truck conditions" name="label[]"/>
                        <Toggle 
                            name="check[]"
                            color="green" slot="after"
                            onChange={(e)=>console.log('toggle is checked?', e.target.checked)}
                            onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>
                        </Toggle>
                    </ListItem>
                    <ListItem title="Fuel">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" name="remarks[]"/>
                        <Input type="hidden" style={{'display':'none'}} value="Fuel" name="label[]"/>
                        <Toggle 
                            name="check[]"
                            color="green" slot="after"
                            onChange={(e)=>console.log('toggle is checked?', e.target.checked)}
                            onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>
                        </Toggle>
                    </ListItem>
                    <ListItem title="Radiator condition/water">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" name="remarks[]" />
                        <Input type="hidden" value="Radiator condition/water" style={{'display':'none'}} name="label[]"/>
                        <Toggle 
                            name="check[]"
                            color="green" slot="after"
                            onChange={(e)=>console.log('toggle is checked?', e.target.checked)}
                            onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>
                        </Toggle>
                    </ListItem>
                    <ListItem title="Lubricants">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" name="remarks[]"/>
                        <Input type="hidden" value="Lubricants" style={{'display':'none'}} name="label[]"/>
                        <Toggle 
                            name="check[]"
                            color="green" slot="after"
                            onChange={(e)=>console.log('toggle is checked?', e.target.checked)}
                            onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>
                        </Toggle>
                    </ListItem>
                    <ListItem title="Battery condition">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" name="remarks[]"/>
                        <Input type="hidden" style={{'display':'none'}} value="Battery condition" name="label[]"/>
                        <Toggle 
                            name="check[]"
                            color="green" slot="after"
                            onChange={(e)=>console.log('toggle is checked?', e.target.checked)}
                            onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>
                        </Toggle>
                    </ListItem>
                    {/* <ListItem title="Brake">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                        <Toggle 
                            name="check[]"
                            color="green" slot="after"
                            onChange={(e)=>console.log('toggle is checked?', e.target.checked)}
                            onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>
                        </Toggle>
                    </ListItem>
                    <ListItem title="General condition of engine">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                        <Toggle 
                            name="check[]"
                            color="green" slot="after"
                            onChange={(e)=>console.log('toggle is checked?', e.target.checked)}
                            onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>
                        </Toggle>
                    </ListItem>
                    <ListItem title="Horn">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                        <Toggle 
                            name="check[]"
                            color="green" slot="after"
                            onChange={(e)=>console.log('toggle is checked?', e.target.checked)}
                            onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>
                        </Toggle>
                    </ListItem>
                    <ListItem title="Wiper">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                        <Toggle 
                            name="check[]"
                            color="green" slot="after"
                            onChange={(e)=>console.log('toggle is checked?', e.target.checked)}
                            onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>
                        </Toggle>
                    </ListItem>
                    <ListItem title="Head and tail lamps condition">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                        <Toggle 
                            name="check[]"
                            color="green" slot="after"
                            onChange={(e)=>console.log('toggle is checked?', e.target.checked)}
                            onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>
                        </Toggle>
                    </ListItem>
                    <ListItem title="Sign lamp">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                        <Toggle 
                            name="check[]"
                            color="green" slot="after"
                            onChange={(e)=>console.log('toggle is checked?', e.target.checked)}
                            onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>
                        </Toggle>
                    </ListItem>
                    <ListItem title="Beacon light">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                        <Toggle 
                            name="check[]"
                            color="green" slot="after"
                            onChange={(e)=>console.log('toggle is checked?', e.target.checked)}
                            onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>
                        </Toggle>
                    </ListItem>
                    <ListItem title="Fueling lamps">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                        <Toggle 
                            name="checklamps"
                            color="green" slot="after"
                            onChange={(e)=>console.log('toggle is checked?', e.target.checked)}
                            onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>
                        </Toggle>
                    </ListItem>
                    <ListItem title="Pto / hydraulyc pump">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                        <Toggle 
                            name="checkpump"
                            color="green" slot="after"
                            onChange={(e)=>console.log('toggle is checked?', e.target.checked)}
                            onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>
                        </Toggle>
                    </ListItem>
                    <ListItem title="Compressor">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                        <Toggle 
                            name="checkcompresor"
                            color="green" slot="after"
                            onChange={(e)=>console.log('toggle is checked?', e.target.checked)}
                            onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>
                        </Toggle>
                    </ListItem>
                    <ListItem title="Tyres">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                        <Toggle 
                            name="check[]"
                            color="green" slot="after"
                            onChange={(e)=>console.log('toggle is checked?', e.target.checked)}
                            onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>
                        </Toggle>
                    </ListItem>
                    <ListItem title="General conditions of transmissions">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                        <Toggle 
                            name="check[]"
                            color="green" slot="after"
                            onChange={(e)=>console.log('toggle is checked?', e.target.checked)}
                            onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>
                        </Toggle>
                    </ListItem>
                    <ListItem title="Hydraulic ladder / platform">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                        <Toggle 
                            name="check[]"
                            color="green" slot="after"
                            onChange={(e)=>console.log('toggle is checked?', e.target.checked)}
                            onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>
                        </Toggle>
                    </ListItem>
                    <ListItem title="Rearward gear warning">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                         <Toggle                              name="check[]"                             color="green" slot="after"                             onChange={(e)=>console.log('toggle is checked?', e.target.checked)}                             onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>                         </Toggle>
                    </ListItem>
                    <ListItem title="TANK CONDITIONS">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                         <Toggle                              name="check[]"                             color="green" slot="after"                             onChange={(e)=>console.log('toggle is checked?', e.target.checked)}                             onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>                         </Toggle>
                    </ListItem>
                    <ListItem title="Step conditions">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                         <Toggle                              name="check[]"                             color="green" slot="after"                             onChange={(e)=>console.log('toggle is checked?', e.target.checked)}                             onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>                         </Toggle>
                    </ListItem>
                    <ListItem title="Jet level sensor conditions">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                         <Toggle                              name="check[]"                             color="green" slot="after"                             onChange={(e)=>console.log('toggle is checked?', e.target.checked)}                             onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>                         </Toggle>
                    </ListItem>
                    <ListItem title="Preseure vacum valve/free vent">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                         <Toggle                              name="check[]"                             color="green" slot="after"                             onChange={(e)=>console.log('toggle is checked?', e.target.checked)}                             onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>                         </Toggle>
                    </ListItem>
                    <ListItem title="Water drain line tank (roof area water drain">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                         <Toggle                              name="check[]"                             color="green" slot="after"                             onChange={(e)=>console.log('toggle is checked?', e.target.checked)}                             onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>                         </Toggle>
                    </ListItem>
                    <ListItem title="SAFETY EQUIPMENTS">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                         <Toggle                              name="check[]"                             color="green" slot="after"                             onChange={(e)=>console.log('toggle is checked?', e.target.checked)}                             onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>                         </Toggle>
                    </ListItem>
                    <ListItem title="Flame trap conditions">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                         <Toggle                              name="check[]"                             color="green" slot="after"                             onChange={(e)=>console.log('toggle is checked?', e.target.checked)}                             onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>                         </Toggle>
                    </ListItem>
                    <ListItem title="Gronding and bonding cable">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                         <Toggle                              name="check[]"                             color="green" slot="after"                             onChange={(e)=>console.log('toggle is checked?', e.target.checked)}                             onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>                         </Toggle>
                    </ListItem>
                    <ListItem title="Interlock system">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                         <Toggle                              name="check[]"                             color="green" slot="after"                             onChange={(e)=>console.log('toggle is checked?', e.target.checked)}                             onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>                         </Toggle>
                    </ListItem>
                    <ListItem title="Seal overide interlock system">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                         <Toggle                              name="check[]"                             color="green" slot="after"                             onChange={(e)=>console.log('toggle is checked?', e.target.checked)}                             onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>                         </Toggle>
                    </ListItem>
                    <ListItem title="Fire extinguise (seal,number and date of last chechk)">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                         <Toggle                              name="check[]"                             color="green" slot="after"                             onChange={(e)=>console.log('toggle is checked?', e.target.checked)}                             onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>                         </Toggle>
                    </ListItem>
                    <ListItem title="“Product”,”no smoking”,signs (placard)">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                         <Toggle                              name="check[]"                             color="green" slot="after"                             onChange={(e)=>console.log('toggle is checked?', e.target.checked)}                             onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>                         </Toggle>
                    </ListItem>
                    <ListItem title="REFUELING EQUIPMENTS">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                         <Toggle                              name="check[]"                             color="green" slot="after"                             onChange={(e)=>console.log('toggle is checked?', e.target.checked)}                             onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>                         </Toggle>
                    </ListItem>
                    <ListItem title="BEFORE REFUELING">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                         <Toggle                              name="check[]"                             color="green" slot="after"                             onChange={(e)=>console.log('toggle is checked?', e.target.checked)}                             onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>                         </Toggle>
                    </ListItem>
                    <ListItem title="Underwing hoses conditions">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                         <Toggle                              name="check[]"                             color="green" slot="after"                             onChange={(e)=>console.log('toggle is checked?', e.target.checked)}                             onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>                         </Toggle>
                    </ListItem>
                    <ListItem title="Rear hose and reel conditions">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                         <Toggle                              name="check[]"                             color="green" slot="after"                             onChange={(e)=>console.log('toggle is checked?', e.target.checked)}                             onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>                         </Toggle>
                    </ListItem>
                    <ListItem title="Platform hoses conditions left">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                         <Toggle                              name="check[]"                             color="green" slot="after"                             onChange={(e)=>console.log('toggle is checked?', e.target.checked)}                             onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>                         </Toggle>
                    </ListItem>
                    <ListItem title="Platform hoses conditions Right">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                         <Toggle                              name="check[]"                             color="green" slot="after"                             onChange={(e)=>console.log('toggle is checked?', e.target.checked)}                             onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>                         </Toggle>
                    </ListItem>
                    <ListItem title="Condition of flow meter sealing">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                         <Toggle                              name="check[]"                             color="green" slot="after"                             onChange={(e)=>console.log('toggle is checked?', e.target.checked)}                             onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>                         </Toggle>
                    </ListItem>
                    <ListItem title="Condition of flow meter calibration exp. date">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                         <Toggle                              name="check[]"                             color="green" slot="after"                             onChange={(e)=>console.log('toggle is checked?', e.target.checked)}                             onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>                         </Toggle>
                    </ListItem>
                    <ListItem title="Deadman control condition">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                         <Toggle                              name="check[]"                             color="green" slot="after"                             onChange={(e)=>console.log('toggle is checked?', e.target.checked)}                             onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>                         </Toggle>
                    </ListItem>
                    <ListItem title="Input coupler condition">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                         <Toggle                              name="check[]"                             color="green" slot="after"                             onChange={(e)=>console.log('toggle is checked?', e.target.checked)}                             onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>                         </Toggle>
                    </ListItem>
                    <ListItem title="Date of last filter change">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                         <Toggle                              name="check[]"                             color="green" slot="after"                             onChange={(e)=>console.log('toggle is checked?', e.target.checked)}                             onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>                         </Toggle>
                    </ListItem>
                    <ListItem title="PCV and regulator">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                         <Toggle                              name="check[]"                             color="green" slot="after"                             onChange={(e)=>console.log('toggle is checked?', e.target.checked)}                             onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>                         </Toggle>
                    </ListItem>
                    <ListItem title="Nitrogen pressure indicator">
                        <Input style={{width:'85%'}}type="text" placeholder="PSI. ( 40-70 )" value="" />
                         <Toggle                              name="check[]"                             color="green" slot="after"                             onChange={(e)=>console.log('toggle is checked?', e.target.checked)}                             onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>                         </Toggle>
                    </ListItem>
                    <ListItem title="DURING REFUELING">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                         <Toggle                              name="check[]"                             color="green" slot="after"                             onChange={(e)=>console.log('toggle is checked?', e.target.checked)}                             onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>                         </Toggle>
                    </ListItem>
                    <ListItem title="Inlet pressure indicator">
                        <Input style={{width:'85%'}}type="text" placeholder="Kg/Cm 2 or PSI" value="" />
                         <Toggle                              name="check[]"                             color="green" slot="after"                             onChange={(e)=>console.log('toggle is checked?', e.target.checked)}                             onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>                         </Toggle>
                    </ListItem>
                    <ListItem title="FPCV monitor indicator">
                        <Input style={{width:'85%'}}type="text" placeholder="Kg/Cm 2 or PSI" value="" />
                         <Toggle                              name="check[]"                             color="green" slot="after"                             onChange={(e)=>console.log('toggle is checked?', e.target.checked)}                             onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>                         </Toggle>
                    </ListItem>
                    <ListItem title="PCV air refrence indicator">
                        <Input style={{width:'85%'}}type="text" placeholder="Kg/Cm 2 or PSI" value="" />
                         <Toggle                              name="check[]"                             color="green" slot="after"                             onChange={(e)=>console.log('toggle is checked?', e.target.checked)}                             onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>                         </Toggle>
                    </ListItem>
                    <ListItem title="PDG indivator">
                        <Input style={{width:'85%'}}type="text" placeholder="Psi, Flow rate ……………….Lpm" value="" />
                         <Toggle                              name="check[]"                             color="green" slot="after"                             onChange={(e)=>console.log('toggle is checked?', e.target.checked)}                             onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>                         </Toggle>
                    </ListItem>
                    <ListItem title="Operating hours record">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                         <Toggle                              name="check[]"                             color="green" slot="after"                             onChange={(e)=>console.log('toggle is checked?', e.target.checked)}                             onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>                         </Toggle>
                    </ListItem>
                    <ListItem title="Rubber block">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                         <Toggle                              name="check[]"                             color="green" slot="after"                             onChange={(e)=>console.log('toggle is checked?', e.target.checked)}                             onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>                         </Toggle>
                    </ListItem>
                    <ListItem title="Oil absorbent">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                         <Toggle                              name="check[]"                             color="green" slot="after"                             onChange={(e)=>console.log('toggle is checked?', e.target.checked)}                             onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>                         </Toggle>
                    </ListItem>
                    <ListItem title="Sight glass">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />                
                    </ListItem>
            
                    <ListItem>
                        <Label>Checked By :</Label>
                        <Input type="text" placeholder={data[0] != '' ? data[0] : '....' } readonly={data[0] != '' ? true : false} value={data[0]}></Input>
                    </ListItem>         */}
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