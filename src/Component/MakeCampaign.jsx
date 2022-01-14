import React from "react";
import {Form,Container,Card,Row,Button} from 'react-bootstrap';
import 'react-pro-sidebar/dist/css/styles.css';
import Profil from "./MyProfil.jsx";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function BuatCampaign() {
    const [code, setCode] = useState();
    const [desc, setDesc] = useState();
    const [image, setImage] = useState();

    const handleSubmit= (e) => {
      
      var data = new FormData();
      var imagedata = document.querySelector('input[type="file"]').files[0];
      data.append("image", imagedata);
      data.append("code", code);
      data.append("desc", desc);
      e.preventDefault();
      
      const requestOptions = {
        method: 'POST',
        headers: { 
          "Accept": "application/json",
        },
        body: data
      };
      fetch('http://localhost:5000/api/campaigns/', requestOptions)
        .then(response => response.json())
        .then(data => {
          alert("Pembuatan berhasil");
        });
    }
    
    return (
        <Row className="background-image mb-0" style={{width:'100%'}}>

            <Profil/>
            <div class="col-md-1 "></div>
      
            <div class="col-md-8 ">
            <Container style={{marginTop:'10vh'}}>
            <Row >
            <h1 className="text-center text-white">Buat Campaign</h1>
            <Card >
            <Card.Body>
            <Form onSubmit={e => { handleSubmit(e) }}>
              <Form.Group className="mb-3" controlId="CampaignID">
                  <Form.Label>Judul Campaign</Form.Label>
                  <Form.Control type="title" placeholder="Masukan Judul" onChange={e => setCode(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="CampaignDeskripsiID">
                  <Form.Label>Unggah Gambar</Form.Label>
                  <Form.Control type="file"  />
              </Form.Group>
              <Form.Group className="mb-3" controlId="CampaignDeskripsiID">
                  <Form.Label>Deskripsi Campaign</Form.Label>
                  <Form.Control as="textarea" rows={3} type="desc" onChange={e => setDesc(e.target.value)}/>
              </Form.Group> 
              <Button type="submit" style={{float:'right'}}>Buat Campaign</Button>
            </Form>
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
