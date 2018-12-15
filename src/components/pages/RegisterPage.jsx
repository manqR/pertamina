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
            <ListItem>
                <Label>Jenis Registrasi</Label>
                <Input type="select">
                <option selected>Checklist</option>
                <option>Kerusakan</option>
                </Input>
            </ListItem>
            <ListItem title="Dop Roda Besar">
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Dop Roda Kecil">
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Cover Ban">
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Ban Serep">
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Kondisi Ban Serep">
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Kondisi Ban Belakang">
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Karpet Lantai">
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Karpet Roda">
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Karpet Bagasi">
                <Toggle slot="after" />
            </ListItem>
            <ListItem title="Kunci Roda">
                <Toggle slot="after" />
            </ListItem>
    
            <ListItem>
                <Label>Keluhan</Label>
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
