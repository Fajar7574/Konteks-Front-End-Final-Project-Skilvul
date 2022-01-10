import React from "react";
import {Form,FormControl,Container,Card,Row,InputGroup,Button} from 'react-bootstrap';
import 'react-pro-sidebar/dist/css/styles.css';
import Profil from "./MyProfil.jsx"


import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

function BuatBerita() {
    const [index, setIndex] = React.useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    
    return (
        <Row className="background-image mb-0" style={{width:'100%'}}>
   
            <Profil/>
            <div class="col-md-1 "></div>
    
            <div class="col-md-8 ">
            <Container style={{marginTop:'15vh'}}>
            <Row >
            <h1 className="text-center text-white">Buat Berita</h1>
            <Card>
            <Card.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Judul Berita</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Label htmlFor="basic-url">Masukan Link URL Berita</Form.Label>
            <InputGroup className="mb-3">
                <FormControl id="basic-url" aria-describedby="basic-addon3" placeholder="https:/example.com" />
            </InputGroup>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Deskripsi Berita</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            
            </Card.Body>
            <Card.Body>
            <Button href="" type="submit" style={{float:'right'}}>Buat Berita</Button>
            </Card.Body>
            </Card>
            </Row>
            </Container>

            </div> 
        <div class="col-md-1 "></div>
        </Row>

               
        
    );
}

export default BuatBerita;
