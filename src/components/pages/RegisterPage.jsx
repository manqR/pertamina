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


  
class RegisterPage extends Component {


    constructor(props, context) {
        super(props, context);

        this.state = {
            active: true,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            active: !this.state.active
        });
        console.log('a')
    }



    edit(){
        console.log('toggle')
    }


    
    render() {
        // console.log(localStorage.getItem(localStorage.key(0)))
        let data = localStorage.getItem('loginData').split(',')
        // data = new Array(data)
        // data = JSON.parse(data).toString();
        
        return (
            <Page name="register">
                <Navbar title="Form Checklist" backLink="Back" />   

                <List form>                    
                
                    <ListItem title="Cleanliness">                     
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />                        
                        <Toggle 
                            name="check[]"
                            color="green" slot="after"
                            onChange={(e)=>console.log('toggle is checked?', e.target.checked)}
                            onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>
                        </Toggle>
                    </ListItem>
                    <ListItem title="Truck conditionsl">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                        <Toggle 
                            name="check[]"
                            color="green" slot="after"
                            onChange={(e)=>console.log('toggle is checked?', e.target.checked)}
                            onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>
                        </Toggle>
                    </ListItem>
                    <ListItem title="Fuel">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                        <Toggle 
                            name="check[]"
                            color="green" slot="after"
                            onChange={(e)=>console.log('toggle is checked?', e.target.checked)}
                            onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>
                        </Toggle>
                    </ListItem>
                    <ListItem title="Radiator condition/water">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                        <Toggle 
                            name="check[]"
                            color="green" slot="after"
                            onChange={(e)=>console.log('toggle is checked?', e.target.checked)}
                            onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>
                        </Toggle>
                    </ListItem>
                    <ListItem title="Lubricants">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                        <Toggle 
                            name="check[]"
                            color="green" slot="after"
                            onChange={(e)=>console.log('toggle is checked?', e.target.checked)}
                            onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>
                        </Toggle>
                    </ListItem>
                    <ListItem title="Battery condition">
                        <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                        <Toggle 
                            name="check[]"
                            color="green" slot="after"
                            onChange={(e)=>console.log('toggle is checked?', e.target.checked)}
                            onToggleChange={(checked)=>console.log('toggle is checked?', checked)}>
                        </Toggle>
                    </ListItem>
                    <ListItem title="Brake">
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
                    </ListItem>        
                    <Block strong>            
                        <Row tag="p">                    
                            <Button className="col" round outline onClick={() => this.SubmitForm}>Submit</Button>
                        </Row>            
                    </Block>

                </List>
    
            </Page>
        );
    }
}

export default RegisterPage;