import React from "react";
import {Form,Container,Card,Row,Button} from 'react-bootstrap';
import 'react-pro-sidebar/dist/css/styles.css';
import Profil from "./MyProfil.jsx";
import { useState } from 'react';

function BuatCampaign() {
    const [index, setIndex] = React.useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    
    return (
        <Row className="background-image mb-0" style={{width:'100%'}}>

            <Profil/>
            <div class="col-md-1 "></div>
      
            <div class="col-md-8 ">
            <Container style={{marginTop:'20vh'}}>
            <Row >
            <h1 className="text-center text-white">Buat Campaign</h1>
            <Card >
            <Card.Body>
            <Form.Group className="mb-3" controlId="CampaignID">
                <Form.Label>Judul Campaign</Form.Label>
                <Form.Control type="text" placeholder="Masukan Judul" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="CampaignDeskripsiID">
                <Form.Label>Deskripsi Campaign</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group> 
            </Card.Body>
            <Card.Body>
            <Button href="" type="submit" style={{float:'right'}}>Buat Campaign</Button>
            </Card.Body>
            </Card>
            </Row>
            </Container>

            </div> 
            <div class="col-md-1 "></div>
        </Row>

               
        
    );
}

export default BuatCampaign;
