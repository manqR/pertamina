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
  
class KerusakanPage extends Component {
    render() {
        return (
            <Page name="kerusakan">
                <Navbar title="Form Kerusakan" backLink="Back" />   
                <List form>
                    <ListItem>
                        <Label>Bagian / Fungsi :</Label>
                        <Input type="text" placeholder=" ..."></Input>
                    </ListItem>
                    <ListItem>
                        <Label>Laporan Kerusakan :</Label>
                        <Input type="text" placeholder=" ..."></Input>
                    </ListItem>
                    <ListItem>
                        <Label>Lainnya</Label>
                        <Input type="textarea" placeholder="Keluhan Kerusakan ..."></Input>
                    </ListItem>                
            
                    <Block strong>            
                        <Row tag="p">                    
                            <Button className="col" round outline>Submit</Button>
                        </Row>            
                    </Block>

                </List>            
            </Page>
        );
    }
}

export default KerusakanPage;