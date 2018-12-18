import React from 'react';
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

export default () => (
    <Page name="register">
        <Navbar title="Register" backLink="Back" />   
        <List form>
            <ListItem>
                <Label>Plat Nomor</Label>
                <Input type="text" placeholder="Plat Nomor" />
            </ListItem>
           
            <ListItem title="Cleanliness">                     
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Truck conditionsl">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Fuel">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Radiator condition/water">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Lubricants">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Battery condition">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Brake">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="General condition of engine">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Horn">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Wiper">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Head and tail lamps condition">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Sign lamp">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Beacon light">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Fueling lamps">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Pto / hydraulyc pump">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Compressor">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Tyres">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="General conditions of transmissions">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Hydraulic ladder / platform">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Rearward gear warning">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="TANK CONDITIONS">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Step conditions">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Jet level sensor conditions">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Preseure vacum valve/free vent">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Water drain line tank (roof area water drain">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="SAFETY EQUIPMENTS">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Flame trap conditions">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Gronding and bonding cable">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Interlock system">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Seal overide interlock system">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Fire extinguise (seal,number and date of last chechk)">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="“Product”,”no smoking”,signs (placard)">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="REFUELING EQUIPMENTS">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="BEFORE REFUELING">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Underwing hoses conditions">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Rear hose and reel conditions">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Platform hoses conditions left">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Platform hoses conditions Right">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Condition of flow meter sealing">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Condition of flow meter calibration exp. date">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Deadman control condition">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Input coupler condition">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Date of last filter change">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="PCV and regulator">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Nitrogen pressure indicator">
                <Input style={{width:'85%'}}type="text" placeholder="PSI. ( 40-70 )" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="DURING REFUELING">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Inlet pressure indicator">
                <Input style={{width:'85%'}}type="text" placeholder="Kg/Cm 2 or PSI" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="FPCV monitor indicator">
                <Input style={{width:'85%'}}type="text" placeholder="Kg/Cm 2 or PSI" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="PCV air refrence indicator">
                <Input style={{width:'85%'}}type="text" placeholder="Kg/Cm 2 or PSI" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="PDG indivator">
                <Input style={{width:'85%'}}type="text" placeholder="Psi, Flow rate ……………….Lpm" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Operating hours record">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Rubber block">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Oil absorbent">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Sight glass">
                <Input style={{width:'85%'}}type="text" placeholder="Remarks" value="" />                
            </ListItem>
    
            <ListItem>
                <Label>Checked By :</Label>
                <Input type="text" placeholder=" ..."></Input>
            </ListItem>
            <ListItem>
                <Label>General Condition Summary by supervisor</Label>
                <Input type="text" placeholder=" ..."></Input>
            </ListItem>
            <ListItem>
                <Label>Refueling supervisor</Label>
                <Input type="text" placeholder=" ..."></Input>
            </ListItem>

        
    
            <Block strong>            
                <Row tag="p">                    
                    <Button className="col" round outline>Submit</Button>
                </Row>            
            </Block>

        </List>

    
    </Page>
);
